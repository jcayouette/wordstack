-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create profiles table (extends auth.users)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  role text check (role in ('public', 'member', 'admin')) default 'public',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create sermons table
create table sermons (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  speaker text,
  date date not null,
  passage text,
  tags text[],
  youtube_url text not null,
  transcript text,
  refined_text text,
  summary text,
  outline text,
  duration int,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create events table
create table events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  date_start timestamp with time zone not null,
  date_end timestamp with time zone,
  location text,
  created_by uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;
alter table sermons enable row level security;
alter table events enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using (true);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Sermons policies (public read, admin write)
create policy "Sermons are viewable by everyone"
  on sermons for select
  using (true);

create policy "Admins can insert sermons"
  on sermons for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );

create policy "Admins can update sermons"
  on sermons for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );

create policy "Admins can delete sermons"
  on sermons for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );

-- Events policies (public read, members+ can write)
create policy "Events are viewable by everyone"
  on events for select
  using (true);

create policy "Members and admins can insert events"
  on events for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role in ('member', 'admin')
    )
  );

create policy "Members and admins can update events"
  on events for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role in ('member', 'admin')
    )
  );

create policy "Members and admins can delete events"
  on events for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role in ('member', 'admin')
    )
  );

-- Function to automatically create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role)
  values (new.id, 'public');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger update_profiles_updated_at before update on profiles
  for each row execute procedure update_updated_at_column();

create trigger update_sermons_updated_at before update on sermons
  for each row execute procedure update_updated_at_column();

create trigger update_events_updated_at before update on events
  for each row execute procedure update_updated_at_column();

-- Create indexes for better performance
create index sermons_slug_idx on sermons(slug);
create index sermons_date_idx on sermons(date desc);
create index sermons_tags_idx on sermons using gin(tags);
create index events_date_start_idx on events(date_start);
