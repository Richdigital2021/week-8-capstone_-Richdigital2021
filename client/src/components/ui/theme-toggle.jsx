import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
    >
      {darkMode ? <Sun className="text-white" /> : <Moon />}
    </button>
  );
}