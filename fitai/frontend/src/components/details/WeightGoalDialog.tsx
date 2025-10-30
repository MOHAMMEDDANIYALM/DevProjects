import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { Target, TrendingUp, Calendar } from "lucide-react";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface WeightGoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WeightGoalDialog({ open, onOpenChange }: WeightGoalDialogProps) {
  const currentWeight = 72;
  const targetWeight = 78;
  const startWeight = 70;
  const progress = ((currentWeight - startWeight) / (targetWeight - startWeight)) * 100;

  const weeklyProgress = [
    { week: "Week 1", weight: 70.0, change: 0 },
    { week: "Week 2", weight: 70.3, change: 0.3 },
    { week: "Week 3", weight: 70.8, change: 0.5 },
    { week: "Week 4", weight: 71.2, change: 0.4 },
    { week: "Week 5", weight: 71.6, change: 0.4 },
    { week: "Week 6", weight: 72.0, change: 0.4 },
  ];

  const milestones = [
    { weight: 72, date: "October 29, 2025", status: "completed", label: "Current" },
    { weight: 74, date: "December 2025", status: "upcoming", label: "Milestone 1" },
    { weight: 76, date: "February 2026", status: "upcoming", label: "Milestone 2" },
    { weight: 78, date: "April 2026", status: "upcoming", label: "Goal" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Weight Goal Progress
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="progress" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Data</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            {/* Overview */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Starting</p>
                  <p className="text-2xl">{startWeight} kg</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Current</p>
                  <p className="text-3xl">{currentWeight} kg</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Target</p>
                  <p className="text-2xl">{targetWeight} kg</p>
                </div>
              </div>
              
              <Progress value={progress} className="h-3 mb-2" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{progress.toFixed(0)}% Complete</span>
                <span className="text-gray-600">{(targetWeight - currentWeight).toFixed(1)} kg to go</span>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Gained</p>
                    <p className="text-2xl">{(currentWeight - startWeight).toFixed(1)} kg</p>
                    <p className="text-xs text-gray-500">in 6 weeks</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg Weekly Gain</p>
                    <p className="text-2xl">0.4 kg</p>
                    <p className="text-xs text-gray-500">healthy pace</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Projected Timeline */}
            <Card className="p-4 bg-amber-50 border-amber-200">
              <h4 className="mb-2">Projected Timeline</h4>
              <p className="text-sm text-gray-700">
                At your current pace of 0.4 kg/week, you'll reach your goal of 78 kg in approximately <span className="text-amber-700">15 more weeks</span> (around mid-February 2026).
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            <Card className="p-6">
              <h4 className="mb-4">Weekly Weight History</h4>
              <div className="space-y-3">
                {weeklyProgress.map((week, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="text-sm">{week.week}</p>
                      <p className="text-xs text-gray-500">
                        {week.change > 0 ? `+${week.change} kg` : "Starting point"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg">{week.weight} kg</p>
                      {week.change > 0 && (
                        <p className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {week.change} kg gain
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <h4 className="mb-2">Insights</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Most consistent gain in weeks 3-6</li>
                <li>• Maintaining healthy 0.3-0.5 kg per week</li>
                <li>• Stay consistent with current nutrition plan</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-4">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <Card 
                  key={index} 
                  className={`p-4 ${
                    milestone.status === "completed" 
                      ? "bg-green-50 border-green-200" 
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      milestone.status === "completed"
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}>
                      {milestone.status === "completed" ? "✓" : milestone.weight}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p>{milestone.label}</p>
                        <p className="text-sm text-gray-600">{milestone.weight} kg</p>
                      </div>
                      <p className="text-xs text-gray-500">{milestone.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4 bg-purple-50 border-purple-200">
              <h4 className="mb-2">Next Milestone Strategies</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Maintain caloric surplus of 300-500 kcal daily</li>
                <li>• Focus on progressive overload in strength training</li>
                <li>• Ensure 7-8 hours sleep for recovery</li>
                <li>• Track weekly progress photos</li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
