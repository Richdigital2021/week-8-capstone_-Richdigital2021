import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar'; // ✅ adjust path if necessary

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, role } = form;

    if (!name || !email || !password || !role) {
      toast.error('All fields are required!');
      return;
    }

    try {

      const res = await axios.post("/api/users/signup", form);


      toast.success('Signup successful!');
      console.log(res.data);

      // Navigate based on role
      if (res.data.role === 'admin') {
        navigate('/Admindashboard');
      } else {
        navigate('/Dashboard');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div>
      <Navbar /> {/* ✅ Navbar added */}

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded"
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded"
        >
          <option value="user">Regular User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
