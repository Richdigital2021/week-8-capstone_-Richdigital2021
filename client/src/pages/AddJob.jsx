import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [formData, setFormData] = useState({ title: '', company: '', location: '', status: 'Pending' });
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if user exists and has a token
    if (!user || !user.token) {
      alert('You must be logged in to add a job.');
      navigate('/login'); // or wherever your login page is
      return;
    }
    
    try {
      await axios.post('/api/jobs', formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      navigate('/jobs');
    } catch (err) {
      console.error(err);
      alert('Failed to add job.');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="title" 
          placeholder="Job Title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded" 
        />
        <input 
          name="company" 
          placeholder="Company" 
          value={formData.company} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded" 
        />
        <input 
          name="location" 
          placeholder="Location" 
          value={formData.location} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded" 
        />
        <select 
          name="status" 
          value={formData.status} 
          onChange={handleChange} 
          className="w-full p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Interview">Interview</option>
          <option value="Declined">Declined</option>
        </select>
        <button 
          type="submit" 
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;