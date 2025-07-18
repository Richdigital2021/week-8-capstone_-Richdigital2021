import { useState, useEffect } from 'react';
import axios from 'axios';

const JobForm = ({ fetchJobs, editingJob, setEditingJob }) => {
  const token = localStorage.getItem('token');
  const [form, setForm] = useState({
    companyName: '',
    role: '',
    dateApplied: '',
    status: 'Applied',
    description: '',
    interviewDate: ''
  });

  useEffect(() => {
    if (editingJob) {
      setForm({
        companyName: editingJob.companyName,
        role: editingJob.role,
        dateApplied: editingJob.dateApplied?.split('T')[0] || '',
        status: editingJob.status,
        description: editingJob.description,
        interviewDate: editingJob.interviewDate?.split('T')[0] || '',
      });
    }
  }, [editingJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingJob) {
      await axios.put(`http://localhost:5000/api/jobs/${editingJob._id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEditingJob(null);
    } else {
      await axios.post('http://localhost:5000/api/jobs', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setForm({ companyName: '', role: '', dateApplied: '', status: 'Applied', description: '', interviewDate: '' });
    fetchJobs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Company Name" value={form.companyName} onChange={e => setForm({ ...form, companyName: e.target.value })} />
      <input placeholder="Role" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
      <input type="date" value={form.dateApplied} onChange={e => setForm({ ...form, dateApplied: e.target.value })} />
      <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input placeholder="Job Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="date" placeholder="Interview Date" value={form.interviewDate} onChange={e => setForm({ ...form, interviewDate: e.target.value })} />
      <button type="submit">{editingJob ? 'Update Job' : 'Add Job'}</button>
    </form>
  );
};

export default JobForm;
