// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import AdminDashboard from "@/pages/AdminDashboard";
// import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
//import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
    
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
     
    </ThemeProvider>
  );
}

export default App;
