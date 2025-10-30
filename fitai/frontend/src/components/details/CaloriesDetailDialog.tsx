import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Flame, Coffee, Sun, Sunset, Moon } from "lucide-react";

interface CaloriesDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CaloriesDetailDialog({ open, onOpenChange }: CaloriesDetailDialogProps) {
  const mealBreakdown = [
    { name: "Breakfast", icon: Coffee, calories: 450, target: 600, time: "8:00 AM" },
    { name: "Lunch", icon: Sun, calories: 520, target: 700, time: "12:30 PM" },
    { name: "Snack", icon: Sunset, calories: 320, target: 400, time: "3:30 PM" },
    { name: "Dinner", icon: Moon, calories: 560, target: 800, time: "7:00 PM" },
  ];

  const totalCalories = mealBreakdown.reduce((sum, meal) => sum + meal.calories, 0);
  const totalTarget = mealBreakdown.reduce((sum, meal) => sum + meal.target, 0);
  const remaining = totalTarget - totalCalories;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Daily Calorie Breakdown
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Summary */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Total Consumed</p>
                <p className="text-3xl">{totalCalories} kcal</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Daily Target</p>
                <p className="text-3xl">{totalTarget} kcal</p>
              </div>
            </div>
            <Progress value={(totalCalories / totalTarget) * 100} className="h-3" />
            <p className="text-sm text-gray-600 mt-2">
              {remaining > 0 ? `${remaining} kcal remaining` : "Daily goal reached!"}
            </p>
          </Card>

          {/* Meal Breakdown */}
          <div className="space-y-4">
            <h4>Meal by Meal Breakdown</h4>
            {mealBreakdown.map((meal, index) => {
              const Icon = meal.icon;
              const percentage = (meal.calories / meal.target) * 100;
              
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p>{meal.name}</p>
                        <p className="text-sm text-gray-500">{meal.time}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>{meal.calories} / {meal.target} kcal</span>
                        <span className="text-gray-500">{percentage.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </Card>
              );
            })}
          </div>

          {/* Daily Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <p className="text-sm text-gray-600">Average</p>
              <p className="text-xl">1,920</p>
              <p className="text-xs text-gray-500">kcal/day</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-gray-600">Highest</p>
              <p className="text-xl">2,450</p>
              <p className="text-xs text-gray-500">this week</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm text-gray-600">Lowest</p>
              <p className="text-xl">1,650</p>
              <p className="text-xs text-gray-500">this week</p>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
