// src/server.ts

// ✅ Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

// ✅ Imports
import app from "./app";
import { prisma } from "./prismaClient";

// ✅ Port setup
const PORT = process.env.PORT || 4000;

// ✅ Start the server
async function startServer() {
  try {
    // Connect to Prisma (MongoDB)
    await prisma.$connect();
    console.log("✅ Connected to MongoDB through Prisma");

    // Start Express
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

// ✅ Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("\n👋 Server stopped gracefully");
  process.exit(0);
});

// Run it
startServer();
