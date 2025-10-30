import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

async function main(){
  const pass = await bcrypt.hash("password", 10);
  const user = await prisma.user.upsert({
    where: { email: "demo@fitai.app" },
    update: {},
    create: {
      email: "demo@fitai.app", passwordHash: pass, name: "John Doe", bodyType: "ectomorph"
    }
  });

  // create meals for today (matches frontend MealPlansPage examples)
  const now = new Date();
  await prisma.meal.createMany({
    data: [
      {
        userId: user.id,
        name: "Protein Oatmeal Bowl",
        time: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8,0).toISOString(),
        category: "Breakfast",
        calories: 450,
        protein: 28,
        carbs: 52,
        fats: 12,
        completed: true
      },
      {
        userId: user.id,
        name: "Grilled Chicken Salad",
        time: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12,30).toISOString(),
        category: "Lunch",
        calories: 520,
        protein: 45,
        carbs: 38,
        fats: 18,
        completed: true
      }
    ]
  });

  console.log("Seed done");
}
main().catch(e => { console.error(e); process.exit(1); }).finally(()=>prisma.$disconnect());
