import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import { JobProvider } from './hooks/JobContext';

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found. Make sure index.html contains a div with id='root'.");
}


  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>

        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <JobProvider>
            <App />
          </JobProvider>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
