import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { prisma } from "../prismaClient";

export interface AuthRequest extends Request {
  user?: any;
}

export async function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "Missing auth" });
    const token = auth.split(" ")[1];
    const payload: any = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return res.status(401).json({ message: "Invalid token" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", error: err });
  }
}
