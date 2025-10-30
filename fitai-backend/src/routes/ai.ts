import { Router } from "express";
import { prisma } from "../prismaClient";
import { requireAuth, AuthRequest } from "../middleware/auth";
import fetch from "node-fetch";

const router = Router();

// Simple chat: saves messages and returns simulated response (or proxies to OpenAI)
router.post("/chat", requireAuth, async (req: AuthRequest, res) => {
  const { message, useOpenAI } = req.body;
  // save user message
  await prisma.chatMessage.create({
    data: { userId: req.user.id, role: "user", content: message }
  });

  // Simple canned logic to match current UI's simulated responses (frontend has similar logic). 
  // You can swap this for a real OpenAI call by setting OPENAI_API_KEY in .env and useOpenAI=true
  if (useOpenAI && process.env.OPENAI_API_KEY) {
    // proxy to OpenAI (example)
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // replace as needed
        messages: [{ role: "user", content: message }]
      })
    });
    const data = await r.json();
    const assistant = data?.choices?.[0]?.message?.content ?? "Sorry, no answer.";
    await prisma.chatMessage.create({
      data: { userId: req.user.id, role: "assistant", content: assistant }
    });
    return res.json({ assistant });
  }

  // fallback simulated response (mirrors the UI's canned responses)
  let assistant = "Sorry, I don't understand.";
  const q = message.toLowerCase();
  if (q.includes("progress") || q.includes("doing")) {
    assistant = `Looking at your current stats:
• Calories: 1,850/2,800
• Protein: 95g/140g
• Weight: 72kg (goal: 78kg)
You're doing well!`;
  } else if (q.includes("meal") || q.includes("what to eat")) {
    assistant = `Dinner: 200g salmon, 1 cup brown rice, steamed broccoli — ~680 cal, 48g protein. Or a protein shake + almonds for 270 cal and 30g protein.`;
  } else {
    assistant = `For ectomorph muscle gain: frequent meals, calorie surplus, protein 1.6-2.2g/kg.`;
  }

  await prisma.chatMessage.create({
    data: { userId: req.user.id, role: "assistant", content: assistant }
  });

  res.json({ assistant });
});

export default router;
