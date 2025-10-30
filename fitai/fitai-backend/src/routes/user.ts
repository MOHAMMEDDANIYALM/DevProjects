import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";
import bcrypt from "bcryptjs";

const router = Router();

/**
 * GET /api/user/profile
 * Returns the logged-in user's profile.
 */
router.get("/profile", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: {
      id: true,
      email: true,
      name: true,
      bodyType: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  res.json({ user });
});

/**
 * PUT /api/user/profile
 * Updates user info (name, bodyType, etc.)
 */
router.put("/profile", requireAuth, async (req: AuthRequest, res) => {
  const { name, bodyType } = req.body;
  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: { name, bodyType },
    select: { id: true, email: true, name: true, bodyType: true },
  });
  res.json({ user });
});

/**
 * PUT /api/user/password
 * Changes the user's password
 */
router.put("/password", requireAuth, async (req: AuthRequest, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!valid) return res.status(400).json({ message: "Current password incorrect" });

  const hash = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: req.user.id },
    data: { passwordHash: hash },
  });

  res.json({ message: "Password updated successfully" });
});

export default router;
