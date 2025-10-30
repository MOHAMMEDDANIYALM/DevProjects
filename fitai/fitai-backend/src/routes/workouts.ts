import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";
const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const workouts = await prisma.workout.findMany({ where: { userId: req.user.id }});
  res.json({ workouts });
});

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  const workout = await prisma.workout.create({ data: { ...req.body, userId: req.user.id }});
  res.json({ workout });
});

export default router;
