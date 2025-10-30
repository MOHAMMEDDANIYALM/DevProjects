import { Card } from "./ui/card";
import { Dumbbell, Footprints, Zap, Trophy } from "lucide-react";

export function ActivitySummary() {
  const activities = [
    {
      icon: Dumbbell,
      label: "Workouts This Week",
      value: "4",
      target: "5",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Footprints,
      label: "Steps Today",
      value: "8,234",
      target: "10,000",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Zap,
      label: "Active Calories",
      value: "420",
      target: "500",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Trophy,
      label: "Current Streak",
      value: "12 days",
      target: "",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-4">Activity Summary</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          
          return (
            <div
              key={index}
              className="p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div
                className={`h-10 w-10 rounded-full ${activity.color} flex items-center justify-center mb-3`}
              >
                <Icon className="h-5 w-5" />
              </div>
              
              <p className="text-sm text-gray-500 mb-1">{activity.label}</p>
              <p className="text-xl mb-1">{activity.value}</p>
              {activity.target && (
                <p className="text-xs text-gray-500">of {activity.target}</p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
