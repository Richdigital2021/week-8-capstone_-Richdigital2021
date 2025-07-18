// server/routes/adminRoutes.js
import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { requireAuth, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", requireAuth, admin, getAllUsers);

export default router;
