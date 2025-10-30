import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface NutritionData {
  label: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

export function NutritionTracker() {
  const nutritionData: NutritionData[] = [
    { label: "Calories", current: 1850, target: 2800, unit: "kcal", color: "bg-blue-500" },
    { label: "Protein", current: 95, target: 140, unit: "g", color: "bg-green-500" },
    { label: "Carbs", current: 185, target: 350, unit: "g", color: "bg-orange-500" },
    { label: "Fats", current: 52, target: 75, unit: "g", color: "bg-purple-500" },
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-4">Today's Nutrition</h3>
      
      <div className="space-y-6">
        {nutritionData.map((item) => {
          const percentage = (item.current / item.target) * 100;
          
          return (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{item.label}</span>
                <span className="text-sm">
                  {item.current} / {item.target} {item.unit}
                </span>
              </div>
              
              <div className="relative">
                <Progress value={percentage} className="h-2" />
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full ${item.color} transition-all`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">
                  {percentage.toFixed(0)}% of daily goal
                </span>
                <span className="text-xs text-gray-500">
                  {item.target - item.current > 0 ? `${item.target - item.current}${item.unit} left` : "Goal reached!"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
