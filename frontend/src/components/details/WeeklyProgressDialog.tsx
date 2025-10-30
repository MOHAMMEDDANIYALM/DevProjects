import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, CheckCircle2, Target, Flame, Apple } from "lucide-react";
import { Progress } from "../ui/progress";

interface WeeklyProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WeeklyProgressDialog({ open, onOpenChange }: WeeklyProgressDialogProps) {
  const weeklyData = [
    {
      day: "Monday",
      date: "Oct 23",
      calories: { consumed: 2650, target: 2800, percentage: 95 },
      protein: { consumed: 138, target: 140, percentage: 99 },
      workouts: 1,
      completed: true,
    },
    {
      day: "Tuesday",
      date: "Oct 24",
      calories: { consumed: 2820, target: 2800, percentage: 101 },
      protein: { consumed: 145, target: 140, percentage: 104 },
      workouts: 1,
      completed: true,
    },
    {
      day: "Wednesday",
      date: "Oct 25",
      calories: { consumed: 2550, target: 2800, percentage: 91 },
      protein: { consumed: 132, target: 140, percentage: 94 },
      workouts: 0,
      completed: true,
    },
    {
      day: "Thursday",
      date: "Oct 26",
      calories: { consumed: 2780, target: 2800, percentage: 99 },
      protein: { consumed: 142, target: 140, percentage: 101 },
      workouts: 1,
      completed: true,
    },
    {
      day: "Friday",
      date: "Oct 27",
      calories: { consumed: 2900, target: 2800, percentage: 104 },
      protein: { consumed: 148, target: 140, percentage: 106 },
      workouts: 1,
      completed: true,
    },
    {
      day: "Saturday",
      date: "Oct 28",
      calories: { consumed: 2450, target: 2800, percentage: 88 },
      protein: { consumed: 125, target: 140, percentage: 89 },
      workouts: 0,
      completed: true,
    },
    {
      day: "Today",
      date: "Oct 29",
      calories: { consumed: 1850, target: 2800, percentage: 66 },
      protein: { consumed: 95, target: 140, percentage: 68 },
      workouts: 0,
      completed: false,
    },
  ];

  const weekStats = {
    avgCalories: 2571,
    avgProtein: 132,
    workoutsDone: 4,
    workoutsTarget: 5,
    daysOnTrack: 5,
    overallScore: 85,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Weekly Progress Overview
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Week Summary */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4>This Week's Performance</h4>
                <p className="text-sm text-gray-600">October 23 - October 29, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-3xl">{weekStats.overallScore}%</p>
                <p className="text-sm text-gray-600">Overall Score</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 rounded-lg bg-white">
                <Flame className="h-5 w-5 mx-auto mb-1 text-orange-500" />
                <p className="text-lg">{weekStats.avgCalories}</p>
                <p className="text-xs text-gray-600">Avg Calories</p>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-white">
                <Apple className="h-5 w-5 mx-auto mb-1 text-green-500" />
                <p className="text-lg">{weekStats.avgProtein}g</p>
                <p className="text-xs text-gray-600">Avg Protein</p>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-white">
                <Target className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                <p className="text-lg">{weekStats.workoutsDone}/{weekStats.workoutsTarget}</p>
                <p className="text-xs text-gray-600">Workouts</p>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-white">
                <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-purple-500" />
                <p className="text-lg">{weekStats.daysOnTrack}/7</p>
                <p className="text-xs text-gray-600">Days On Track</p>
              </div>
            </div>
          </Card>

          {/* Daily Breakdown */}
          <div>
            <h4 className="mb-4">Daily Breakdown</h4>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <Card 
                  key={index} 
                  className={`p-4 ${
                    !day.completed ? "border-blue-300 bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0">
                      <p className="text-sm">{day.day}</p>
                      <p className="text-xs text-gray-500">{day.date}</p>
                    </div>
                    
                    {day.completed && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                    
                    {!day.completed && (
                      <Badge variant="outline" className="text-xs border-blue-500 text-blue-600">
                        In Progress
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Calories */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Calories</span>
                        <span className="text-xs">
                          {day.calories.consumed}/{day.calories.target}
                        </span>
                      </div>
                      <Progress value={day.calories.percentage} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {day.calories.percentage}%
                      </p>
                    </div>

                    {/* Protein */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Protein</span>
                        <span className="text-xs">
                          {day.protein.consumed}g/{day.protein.target}g
                        </span>
                      </div>
                      <Progress value={day.protein.percentage} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {day.protein.percentage}%
                      </p>
                    </div>

                    {/* Workouts */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Workouts</span>
                        <span className="text-xs">{day.workouts}</span>
                      </div>
                      <div className="flex items-center h-2">
                        {day.workouts > 0 ? (
                          <Badge variant="secondary" className="text-xs h-5">
                            ✓ Completed
                          </Badge>
                        ) : (
                          <span className="text-xs text-gray-400">Rest day</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Insights & Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <h4 className="text-green-800 mb-2">🎉 Wins This Week</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hit protein goals 5 out of 7 days</li>
                <li>• Exceeded calorie target 3 times</li>
                <li>• Consistent workout schedule (4 sessions)</li>
                <li>• 85% overall adherence to plan</li>
              </ul>
            </Card>

            <Card className="p-4 bg-amber-50 border-amber-200">
              <h4 className="text-amber-800 mb-2">💡 Areas to Improve</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Complete the 5th workout (1 more to go)</li>
                <li>• Wednesday and Saturday were under calorie target</li>
                <li>• Consider meal prep to stay consistent on weekends</li>
              </ul>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
