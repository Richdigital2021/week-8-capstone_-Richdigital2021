import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale);

const JobStatsChart = ({ jobs }) => {
  const statusCount = {
    Applied: 0,
    Interviewing: 0,
    Offer: 0,
    Rejected: 0
  };

  jobs.forEach(job => statusCount[job.status]++);

  const data = {
    labels: Object.keys(statusCount),
    datasets: [{
      label: 'Applications by Status',
      data: Object.values(statusCount),
      backgroundColor: ['#60a5fa', '#facc15', '#34d399', '#f87171']
    }]
  };

  return <Bar data={data} />;
};

export default JobStatsChart;
