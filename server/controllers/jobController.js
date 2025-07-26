import Job from '../models/Job.js';

export const addJob = async (req, res) => {
  try {
    const job = await Job.add({ ...req.body, userId: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    await Job.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
