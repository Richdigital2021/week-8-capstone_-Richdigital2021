import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

import React from "react";

export default function Navbar(): React.JSX.Element {
  return (
    <>
    <header className="w-full border-b shadow-sm bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
         JobTracker
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="#home" className="hover:text-primary">Home</Link>
          <Link to="#features" className="hover:text-primary">Features</Link>
          <Link to="#pricing" className="hover:text-primary">Pricing</Link>
          <Link to="#testimonials" className="hover:text-primary">Testimonials</Link>
          <Link to="#contact" className="hover:text-primary">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
    </>
  )
}
