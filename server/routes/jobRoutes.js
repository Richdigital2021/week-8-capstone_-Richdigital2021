import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {
  createJob, getJobs, updateJob, deleteJob
} from '../controllers/jobController.js';

const router = express.Router();

router.use(requireAuth);
router.post('/', createJob);
router.get('/', getJobs);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
