import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const EditJob = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [formData, setFormData] = useState({ title: '', company: '', location: '', status: 'Pending' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`/api/jobs/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setFormData(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load job details.');
      }
    };
    fetchJob();
  }, [id, user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/jobs/${id}`, formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      navigate('/jobs');
    } catch (err) {
      console.error(err);
      alert('Failed to update job.');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="Pending">Pending</option>
          <option value="Interview">Interview</option>
          <option value="Declined">Declined</option>
        </select>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
      </form>
    </div>
  );
};

export default EditJob;
