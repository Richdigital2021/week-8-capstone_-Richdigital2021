// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import Admindashboard from "@/pages/Admindashboard";
import ContactForm from "@/components/ContactForm";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import AddJob from "@/pages/AddJob";


function App() {
  return (
    <ThemeProvider>
    
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<AddJob />} />

        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <Admindashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
     
    </ThemeProvider>
  );
}

export default App;
