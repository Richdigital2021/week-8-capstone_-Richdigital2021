// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 mt-10 text-sm text-gray-600 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} JobTrackr. All rights reserved.</p>
    </footer>
  );
}
