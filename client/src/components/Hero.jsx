// src/components/Hero.jsx
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Take Control of Your Job Search</h1>
        <p className="text-lg mb-8 text-gray-600">Track applications, set reminders, and stay organized—effortlessly.</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Get Started Free</Button>
          <Button variant="outline" size="lg">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
}
