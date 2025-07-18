import { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const token = localStorage.getItem('token');

  const fetchJobs = async () => {
    const res = await axios.get('http://localhost:5000/api/jobs', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setJobs(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>📋 Job Applications</h2>
      <JobForm fetchJobs={fetchJobs} editingJob={editingJob} setEditingJob={setEditingJob} />
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <strong>{job.companyName}</strong> - {job.role} - {job.status}
            <button onClick={() => setEditingJob(job)}>Edit</button>
            <button onClick={() => handleDelete(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
