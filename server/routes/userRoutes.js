// server/routes/userRoutes.js
import express from 'express';
import {
  registerUser,
  loginUser,
  getMe
} from '../controllers/userController.js';
import { requireAuth, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/me', requireAuth, getMe);

export default router;
