import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <div className="p-4 border rounded mb-4 bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p>{job.company}</p>
      <p>Status: {job.status}</p>
      <Link to={`/edit/${job._id}`} className="text-blue-500 underline">
        Edit
      </Link>
    </div>
  );
}
