import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
export function AdminProtectedRoute({ children, isAdmin }) {
  const { user } = useAuth();
  return user && user.isAdmin ? children : <Navigate to="/Admindashboard" />;
}
export function UserProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
export function GuestRoute({ children }) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/dashboard" />;
}
export function AdminRoute({ children }) {
  const { user } = useAuth();
  return user && user.isAdmin ? children : <Navigate to="/Admindashboard" />;
}
export function UserRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
export function AuthenticatedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
