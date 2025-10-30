import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";
const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const notes = await prisma.progressNote.findMany({ where: { userId: req.user.id }, orderBy: { createdAt: "desc" }});
  res.json({ notes });
});

router.post("/weight", requireAuth, async (req: AuthRequest, res) => {
  const { kg, date } = req.body;
  const weight = await prisma.weight.create({
    data: { kg: Number(kg), userId: req.user.id, date: date ? new Date(date) : new Date() }
  });
  res.json({ weight });
});

export default router;
