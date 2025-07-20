import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useDarkMode from '@/hooks/useDarkMode';

export default function LandingNavbar() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          JobTracker
        </NavLink>

        <div className="hidden md:flex space-x-6">
          {['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-800 dark:text-gray-200 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="text-xl"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
          <NavLink to="/login">
            <Button variant="ghost">Sign In</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button>Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
