import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Clock, Flame, ChevronRight, Plus } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function MealPlansPage() {
  const todayMeals = [
    {
      id: "1",
      name: "Protein Oatmeal Bowl",
      time: "8:00 AM",
      category: "Breakfast",
      calories: 450,
      protein: 28,
      carbs: 52,
      fats: 12,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: true,
      ingredients: ["1 cup oats", "1 scoop protein powder", "1 banana", "2 tbsp almond butter", "Cinnamon"],
    },
    {
      id: "2",
      name: "Grilled Chicken Salad",
      time: "12:30 PM",
      category: "Lunch",
      calories: 520,
      protein: 45,
      carbs: 38,
      fats: 18,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: true,
      ingredients: ["150g chicken breast", "Mixed greens", "Cherry tomatoes", "Quinoa", "Olive oil dressing"],
    },
    {
      id: "3",
      name: "Protein Shake & Almonds",
      time: "3:30 PM",
      category: "Snack",
      calories: 320,
      protein: 30,
      carbs: 22,
      fats: 14,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
      ingredients: ["1 scoop whey protein", "1 banana", "1 cup milk", "30g almonds"],
    },
    {
      id: "4",
      name: "Salmon with Brown Rice",
      time: "7:00 PM",
      category: "Dinner",
      calories: 680,
      protein: 48,
      carbs: 65,
      fats: 22,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
      ingredients: ["200g salmon fillet", "1 cup brown rice", "Steamed broccoli", "Lemon", "Herbs"],
    },
  ];

  const weeklyPlans = [
    { day: "Monday", calories: 2650, protein: 138, status: "completed" },
    { day: "Tuesday", calories: 2820, protein: 145, status: "completed" },
    { day: "Wednesday", calories: 2550, protein: 132, status: "completed" },
    { day: "Thursday", calories: 2780, protein: 142, status: "completed" },
    { day: "Friday", calories: 2900, protein: 148, status: "completed" },
    { day: "Saturday", calories: 2450, protein: 125, status: "completed" },
    { day: "Sunday", calories: 2800, protein: 140, status: "active" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Meal Plans</h2>
          <p className="text-gray-600">Optimized for ectomorph muscle gain</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Custom Plan
        </Button>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today's Meals</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="saved">Saved Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Total Calories</p>
                <p className="text-2xl">1,970 / 2,800</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Protein</p>
                <p className="text-2xl">103g / 140g</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Carbs</p>
                <p className="text-2xl">112g / 350g</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fats</p>
                <p className="text-2xl">52g / 75g</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4">
            {todayMeals.map((meal) => (
              <Card key={meal.id} className={`p-6 ${meal.completed ? "opacity-75" : ""}`}>
                <div className="flex gap-6">
                  <ImageWithFallback
                    src={meal.image}
                    alt={meal.name}
                    className="h-32 w-32 rounded-lg object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3>{meal.name}</h3>
                          {meal.completed && <Badge variant="secondary">Completed</Badge>}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {meal.time}
                          </div>
                          <Badge variant="outline">{meal.category}</Badge>
                        </div>
                      </div>
                      {!meal.completed && (
                        <Button size="sm">Mark as Eaten</Button>
                      )}
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-3">
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <Flame className="h-4 w-4 mx-auto mb-1 text-orange-500" />
                        <p className="text-sm">{meal.calories}</p>
                        <p className="text-xs text-gray-500">calories</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm">{meal.protein}g</p>
                        <p className="text-xs text-gray-500">protein</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm">{meal.carbs}g</p>
                        <p className="text-xs text-gray-500">carbs</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm">{meal.fats}g</p>
                        <p className="text-xs text-gray-500">fats</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Ingredients:</p>
                      <p className="text-sm text-gray-700">{meal.ingredients.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          {weeklyPlans.map((plan, index) => (
            <Card key={index} className={`p-4 ${plan.status === "active" ? "border-blue-500 bg-blue-50" : ""}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[80px]">
                    <p className="text-sm">{plan.day}</p>
                    {plan.status === "active" && <Badge variant="outline" className="mt-1 text-xs">Today</Badge>}
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Calories</p>
                      <p className="text-lg">{plan.calories} kcal</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Protein</p>
                      <p className="text-lg">{plan.protein}g</p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Muscle Gain - High Calorie", "Lean Bulk - Moderate", "Rest Day - Maintenance"].map((plan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h4 className="mb-2">{plan}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Optimized meal plan for your ectomorph body type
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm">
                    <span>2,800 cal</span>
                    <span>140g protein</span>
                  </div>
                  <Button variant="outline" size="sm">Use Plan</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
