import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Flame, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  protein: number;
  image: string;
  completed: boolean;
}

export function MealPlanCard() {
  const meals: Meal[] = [
    {
      id: "1",
      name: "Protein Oatmeal Bowl",
      time: "8:00 AM",
      calories: 450,
      protein: 28,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: true,
    },
    {
      id: "2",
      name: "Grilled Chicken Salad",
      time: "12:30 PM",
      calories: 520,
      protein: 45,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: true,
    },
    {
      id: "3",
      name: "Protein Shake & Almonds",
      time: "3:30 PM",
      calories: 320,
      protein: 30,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
    },
    {
      id: "4",
      name: "Salmon with Brown Rice",
      time: "7:00 PM",
      calories: 680,
      protein: 48,
      image: "https://images.unsplash.com/photo-1662993924949-2b2d68c08cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYxNzY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3>Today's Meal Plan</h3>
        <Button variant="ghost" size="sm">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
              meal.completed ? "bg-gray-50 opacity-75" : "bg-white hover:bg-gray-50"
            }`}
          >
            <ImageWithFallback
              src={meal.image}
              alt={meal.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm truncate">{meal.name}</p>
                {meal.completed && (
                  <Badge variant="secondary" className="text-xs">
                    Completed
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{meal.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3" />
                  <span>{meal.calories} cal</span>
                </div>
                <span>Protein: {meal.protein}g</span>
              </div>
            </div>
            
            {!meal.completed && (
              <Button size="sm" variant="outline">
                Log
              </Button>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
