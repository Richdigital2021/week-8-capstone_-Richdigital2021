// src/components/AppLinks.jsx
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

function AppLinks() {
  return (
    <div className="flex gap-6 items-center mt-8">
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-600 hover:text-green-800 text-xl"
      >
        <FaGooglePlay size={30} />
        <span>Google Play</span>
      </a>

      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-black hover:text-gray-700 text-xl"
      >
        <FaAppStoreIos size={30} />
        <span>App Store</span>
      </a>
    </div>
  );
}

export default AppLinks;
