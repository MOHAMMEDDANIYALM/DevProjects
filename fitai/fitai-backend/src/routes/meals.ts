import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

// get today's meals for the authenticated user
router.get("/today", requireAuth, async (req: AuthRequest, res) => {
  const userId = req.user.id;
  const start = new Date();
  start.setHours(0,0,0,0);
  const end = new Date();
  end.setHours(23,59,59,999);

  const meals = await prisma.meal.findMany({
    where: { userId, time: { gte: start, lte: end }},
    orderBy: { time: "asc" }
  });
  res.json({ meals });
});

// create meal
router.post("/", requireAuth, async (req: AuthRequest, res) => {
  const data = req.body;
  const meal = await prisma.meal.create({
    data: { ...data, userId: req.user.id, time: new Date(data.time) }
  });
  res.json({ meal });
});

// mark as eaten
router.patch("/:id/complete", requireAuth, async (req: AuthRequest, res) => {
  const {id} = req.params;
  const meal = await prisma.meal.update({ where: { id }, data: { completed: true }});
  res.json({ meal });
});

export default router;
