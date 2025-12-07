import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Latest Sermon Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Sermon</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-muted rounded-lg flex items-center justify-center">
            {/* YouTube embed will go here */}
            <div className="text-center text-muted-foreground">
              <p className="text-lg">Latest sermon video will appear here</p>
              <p className="text-sm mt-2">YouTube embed coming soon</p>
            </div>
          </div>
        </section>

        {/* Verse of the Day */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Verse of the Day</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                "For God so loved the world that he gave his one and only Son, 
                that whoever believes in him shall not perish but have eternal life."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— John 3:16 (NIV)</p>
            </CardContent>
          </Card>
        </section>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Welcome Block */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
              <CardDescription>Join our community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We are a community of believers dedicated to growing in faith, 
                serving others, and sharing the love of Christ.
              </p>
              <p className="text-sm text-muted-foreground">
                Whether you're new to faith or have been walking with God for years, 
                there's a place for you here.
              </p>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>What's happening</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Christmas Service</p>
                  <p className="text-xs text-muted-foreground">December 25, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">New Year Prayer Night</p>
                  <p className="text-xs text-muted-foreground">December 31, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Bible Study</p>
                  <p className="text-xs text-muted-foreground">Every Wednesday</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regular Weekly Events */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Join us regularly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Sunday Service</p>
                  <p className="text-xs text-muted-foreground">Sundays at 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Bible Study</p>
                  <p className="text-xs text-muted-foreground">Wednesdays at 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Youth Group</p>
                  <p className="text-xs text-muted-foreground">Fridays at 6:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-xs text-muted-foreground">123 Church Street</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to connect with you. Whether you have questions about faith, 
            want to get involved, or just want to say hello, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Visit Us
            </button>
            <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>WordStack - Modern church website platform</p>
          <p className="mt-2">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
