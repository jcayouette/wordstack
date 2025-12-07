import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">WordStack</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Modern Church Website Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build a beautiful, multilingual church website with AI-powered sermon processing,
            private training content, and event management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
              View Sermons
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Sermons</h3>
            <p className="text-muted-foreground">
              Automatic transcript cleanup, scripture extraction, and multi-language translation.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">Member Management</h3>
            <p className="text-muted-foreground">
              Role-based access for public content, member training, and admin tools.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">Event Calendar</h3>
            <p className="text-muted-foreground">
              Collaborative event management with public viewing and member editing.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>WordStack - Open source church website platform</p>
        </div>
      </footer>
    </div>
  );
}
