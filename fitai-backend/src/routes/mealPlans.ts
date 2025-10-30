import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const plans = await prisma.mealPlan.findMany({ where: { userId: req.user.id }});
  res.json({ plans });
});

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  const body = req.body;
  const plan = await prisma.mealPlan.create({
    data: { ...body, userId: req.user.id }
  });
  res.json({ plan });
});

export default router;
