// ✅ FIX dotenv import
import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { prisma } from "./prismaClient";

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
