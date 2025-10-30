import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TrendingUp, TrendingDown, Award, Target, Calendar } from "lucide-react";
import { Progress } from "../ui/progress";

export function ProgressPage() {
  const weightProgress = [
    { date: "Oct 1", weight: 70.0 },
    { date: "Oct 8", weight: 70.5 },
    { date: "Oct 15", weight: 71.2 },
    { date: "Oct 22", weight: 71.8 },
    { date: "Oct 29", weight: 72.0 },
  ];

  const bodyMeasurements = [
    { part: "Chest", current: 98, previous: 96, unit: "cm", change: 2 },
    { part: "Arms", current: 36, previous: 35, unit: "cm", change: 1 },
    { part: "Waist", current: 78, previous: 78, unit: "cm", change: 0 },
    { part: "Thighs", current: 58, previous: 56, unit: "cm", change: 2 },
    { part: "Shoulders", current: 112, previous: 110, unit: "cm", change: 2 },
  ];

  const achievements = [
    {
      title: "30 Day Streak",
      description: "Logged meals for 30 consecutive days",
      icon: "🔥",
      date: "Oct 25, 2025",
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Protein Goal Master",
      description: "Hit protein target 20 days in a row",
      icon: "💪",
      date: "Oct 20, 2025",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "2kg Gained",
      description: "Gained 2kg of lean muscle mass",
      icon: "🎯",
      date: "Oct 15, 2025",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Workout Warrior",
      description: "Completed 20 workouts this month",
      icon: "🏆",
      date: "Oct 10, 2025",
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const weeklyStats = [
    { metric: "Avg Calories", value: "2,571", target: "2,800", percentage: 92 },
    { metric: "Avg Protein", value: "132g", target: "140g", percentage: 94 },
    { metric: "Workouts", value: "4", target: "5", percentage: 80 },
    { metric: "Sleep Hours", value: "7.2", target: "8", percentage: 90 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h2>Progress Tracking</h2>
        <p className="text-gray-600">Monitor your fitness journey and celebrate wins</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="body">Body Measurements</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="stats">Weekly Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Weight Progress */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Weight Progress</h3>
              <Badge variant="secondary">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.0 kg gained
              </Badge>
            </div>

            <div className="space-y-4">
              {weightProgress.map((entry, index) => {
                const isLatest = index === weightProgress.length - 1;
                const change = index > 0 ? entry.weight - weightProgress[index - 1].weight : 0;
                
                return (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${isLatest ? "bg-blue-50 border border-blue-200" : "bg-gray-50"}`}>
                    <div className="flex items-center gap-4">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm">{entry.date}</p>
                        {isLatest && <Badge variant="outline" className="mt-1 text-xs">Latest</Badge>}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg">{entry.weight} kg</p>
                      {change > 0 && (
                        <p className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +{change.toFixed(1)} kg
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Progress to Goal</p>
                <p className="text-sm">72 kg / 78 kg</p>
              </div>
              <Progress value={33} className="h-3" />
              <p className="text-xs text-gray-600 mt-2">33% complete • 6 kg to go</p>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl mb-1">2.0 kg</p>
              <p className="text-xs text-gray-600">Total Gained</p>
            </Card>

            <Card className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl mb-1">4</p>
              <p className="text-xs text-gray-600">Achievements</p>
            </Card>

            <Card className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-2xl mb-1">85%</p>
              <p className="text-xs text-gray-600">Weekly Adherence</p>
            </Card>

            <Card className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl mb-1">42</p>
              <p className="text-xs text-gray-600">Days Active</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="body" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-6">Body Measurements</h3>
            <div className="space-y-4">
              {bodyMeasurements.map((measurement, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm">{measurement.part}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-lg">{measurement.current} {measurement.unit}</p>
                      {measurement.change > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +{measurement.change}
                        </Badge>
                      )}
                      {measurement.change === 0 && (
                        <Badge variant="outline" className="text-xs">
                          No change
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>Previous: {measurement.previous} {measurement.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="mb-2">Measurement Tips</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Take measurements at the same time each week (e.g., Sunday morning)</li>
              <li>• Measure on an empty stomach for consistency</li>
              <li>• Use the same measuring tape each time</li>
              <li>• Progress photos complement measurements well</li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`p-6 ${achievement.color}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    <p className="text-xs text-gray-500">Unlocked: {achievement.date}</p>
                  </div>
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <h4 className="mb-4">Next Achievements</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="text-sm">60 Day Streak</p>
                  <p className="text-xs text-gray-600">18 more days to go</p>
                </div>
                <Progress value={70} className="w-24 h-2" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="text-sm">5kg Muscle Gain</p>
                  <p className="text-xs text-gray-600">3kg more to go</p>
                </div>
                <Progress value={40} className="w-24 h-2" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-6">This Week's Performance</h3>
            <div className="space-y-6">
              {weeklyStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm">{stat.metric}</p>
                    <p className="text-sm">{stat.value} / {stat.target}</p>
                  </div>
                  <Progress value={stat.percentage} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">{stat.percentage}% of target</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <h4 className="text-green-800 mb-2">🎉 This Week's Wins</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Exceeded protein goal 5 days</li>
                <li>• Completed 4/5 planned workouts</li>
                <li>• Gained 0.5kg this week</li>
                <li>• Maintained consistent sleep</li>
              </ul>
            </Card>

            <Card className="p-4 bg-amber-50 border-amber-200">
              <h4 className="text-amber-800 mb-2">💡 Focus Areas</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Increase daily calories by 200-300</li>
                <li>• Complete that 5th workout</li>
                <li>• Add more complex carbs</li>
                <li>• Stay hydrated (3-4L daily)</li>
              </ul>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
