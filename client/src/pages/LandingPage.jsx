import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Applixtra</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <ModeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Struggling to Organize Sales or Appointments?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Applixtra helps businesses and professionals simplify booking, tracking, and managing their customers – all in one place.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Book a Demo</Button>
        </div>
      </section>

      {/* Problem - Agitation - Solution */}
      <section className="px-6 py-16 bg-muted" id="features">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Problem</h3>
              <p>Managing client bookings, payments, and communications is messy and time-consuming.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Agitation</h3>
              <p>Missed appointments. Confused schedules. Unhappy clients. Lost revenue.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
              <p>Applixtra centralizes everything: bookings, reminders, payments, and more. It just works.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Applixtra?</h2>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <span>Simple, intuitive booking dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <span>Send automatic reminders via SMS or Email</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <span>Track customer history, notes, and payments</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <span>Secure and reliable – built with modern tech</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Business?</h2>
        <p className="mb-6 text-lg">Join hundreds of happy users who’ve transformed their workflow with Applixtra.</p>
        <Button size="lg" variant="secondary">Start Free Trial</Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground py-6">
        &copy; {new Date().getFullYear()} Applixtra. All rights reserved.
      </footer>
    </div>
  );
}
