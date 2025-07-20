// server/routes/userRoutes.js
import express from 'express';
import {
  registerUser,
  authUser,
  getMe
} from '../controllers/userController.js';
import { requireAuth, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/signup', registerUser);
router.post('/login', authUser);

// Protected route
router.get('/me', requireAuth, getMe);

export default router;
