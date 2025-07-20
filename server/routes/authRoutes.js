import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/register', signup); // ✅ this is fine
router.post('/authenticate', login); // ✅ this is fine
export default router;
