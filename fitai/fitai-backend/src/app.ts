// src/app.ts

import express from "express";
import cors from "cors";
import "express-async-errors";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import mealsRoutes from "./routes/meals";
import mealPlansRoutes from "./routes/mealPlans";
import workoutsRoutes from "./routes/workouts";
import progressRoutes from "./routes/progress";
import aiRoutes from "./routes/ai";

import { errorHandler } from "./middleware/errorHandler";

const app = express();

/* -------------------- Middleware -------------------- */

// Allow frontend to access backend API
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming JSON requests
app.use(express.json());

/* -------------------- API Routes -------------------- */

// Authentication (register/login)
app.use("/api/auth", authRoutes);

// User profile and password management
app.use("/api/user", userRoutes);

// Meals (CRUD and mark complete)
app.use("/api/meals", mealsRoutes);

// Meal plans (fetch and create)
app.use("/api/meal-plans", mealPlansRoutes);

// Workouts (fetch and create)
app.use("/api/workouts", workoutsRoutes);

// Progress tracking (weight, notes, etc.)
app.use("/api/progress", progressRoutes);

// AI chat (assistant)
app.use("/api/ai", aiRoutes);

/* -------------------- Error Handling -------------------- */

app.use(errorHandler);

/* -------------------- Default Route -------------------- */
app.get("/", (req, res) => {
  res.send("✅ FitAI Backend is running!");
});

export default app;
