import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  role: String,
  dateApplied: Date,
  description: String,
  status: { type: String, enum: ['Applied', 'Interviewing', 'Offered', 'Rejected'], default: 'Applied' },
  interviewDate: Date,
  notes: String
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);
