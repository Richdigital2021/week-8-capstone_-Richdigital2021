// server/routes/adminRoutes.js
import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { requireAuth, admin } from "../middleware/authMiddleware.js";
import { registerUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/users", requireAuth, admin, getAllUsers);
router.post("/register", registerUser); // Endpoint to register a new user
export default router;

