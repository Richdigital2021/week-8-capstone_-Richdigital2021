import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {
  addJob, getJobs, updateJob, deleteJob
} from '../controllers/jobController.js';

const router = express.Router();

router.use(requireAuth);
router.post('/',  addJob);
router.get('/', getJobs);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;

