import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // adjust based on your frontend
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes); // ✅ This is enough

// ❌ Remove this line:
// app.use('/api/users', register); 

// Default route
app.get('/', (req, res) => res.send('API is running...'));

export default app; // ✅ Export the app (no listen here)

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  );
}
