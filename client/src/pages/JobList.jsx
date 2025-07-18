import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/jobs', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setJobs(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch jobs.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`/api/jobs/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        fetchJobs(); // refresh list
      } catch (err) {
        console.error(err);
        alert('Delete failed.');
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">My Job Applications</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="text-center">
                <td className="p-2 border">{job.title}</td>
                <td className="p-2 border">{job.company}</td>
                <td className="p-2 border">{job.location}</td>
                <td className="p-2 border">{job.status}</td>
                <td className="p-2 border space-x-2">
                  <Link to={`/edit/${job._id}`} className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</Link>
                  <button onClick={() => handleDelete(job._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobList;
