import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/admin/users", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, [user, navigate]);

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md shadow">
          <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
          <ul className="space-y-2">
            {users.map((u) => (
              <li
                key={u._id}
                className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm flex justify-between"
              >
                <span>{u.name} ({u.email})</span>
                <span className="text-xs text-gray-400">{u.isAdmin ? "Admin" : "User"}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={logout}
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
