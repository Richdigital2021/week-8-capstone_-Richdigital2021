import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

export default function Navbar(): React.JSX.Element {
  return (
    <header className="w-full border-b shadow-sm bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          JobTracker
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#testimonials" className="hover:text-primary">Testimonials</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
