import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { User, Mail, Calendar, Target, TrendingUp, Award, Edit } from "lucide-react";

export function ProfilePage() {
  const stats = [
    { label: "Days Active", value: "42", icon: Calendar },
    { label: "Total Workouts", value: "24", icon: TrendingUp },
    { label: "Weight Gained", value: "2.0 kg", icon: Target },
    { label: "Achievements", value: "4", icon: Award },
  ];

  const recentActivity = [
    { type: "workout", title: "Completed Pull Day workout", time: "2 hours ago" },
    { type: "meal", title: "Logged lunch - Grilled Chicken Salad", time: "4 hours ago" },
    { type: "achievement", title: "Unlocked '30 Day Streak' achievement", time: "4 days ago" },
    { type: "weight", title: "Updated weight to 72 kg", time: "1 week ago" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1711006366862-734ee22d1d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3Jrb3V0JTIwZ3ltfGVufDF8fHx8MTc2MTc2OTI1NHww&ixlib=rb-4.1.0&q=80&w=1080" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="mb-2">John Doe</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Ectomorph</Badge>
                  <Badge variant="outline">Muscle Gain Journey</Badge>
                </div>
              </div>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-600">Age</p>
                  <p className="text-sm">28 years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="text-sm">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-600">Member Since</p>
                  <p className="text-sm">Sept 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-600">Goal</p>
                  <p className="text-sm">Gain Muscle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Body Stats */}
        <Card className="p-6">
          <h3 className="mb-4">Body Statistics</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Current Weight</p>
                <p className="text-lg">72 kg</p>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Starting: 70 kg</span>
                <span className="text-green-600">+2.0 kg</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Height</p>
                <p className="text-lg">178 cm</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">BMI</p>
                <p className="text-lg">22.7</p>
              </div>
              <p className="text-xs text-gray-500">Normal weight</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Body Fat %</p>
                <p className="text-lg">~15%</p>
              </div>
              <p className="text-xs text-gray-500">Estimated</p>
            </div>
          </div>
        </Card>

        {/* Goal Progress */}
        <Card className="p-6">
          <h3 className="mb-4">Goal Progress</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Weight Goal</p>
                <p className="text-sm">72 kg / 78 kg</p>
              </div>
              <Progress value={33} className="h-3 mb-1" />
              <p className="text-xs text-gray-500">33% complete • 6 kg to go</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">This Week's Workouts</p>
                <p className="text-sm">4 / 5</p>
              </div>
              <Progress value={80} className="h-3 mb-1" />
              <p className="text-xs text-gray-500">1 more to complete weekly goal</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Protein Consistency</p>
                <p className="text-sm">20 / 30 days</p>
              </div>
              <Progress value={67} className="h-3 mb-1" />
              <p className="text-xs text-gray-500">Hit protein goal 20 days this month</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800 mb-1">🎯 On Track!</p>
              <p className="text-xs text-gray-600">
                You're making excellent progress. Keep up the consistent effort!
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                activity.type === "workout" ? "bg-purple-100" :
                activity.type === "meal" ? "bg-green-100" :
                activity.type === "achievement" ? "bg-yellow-100" :
                "bg-blue-100"
              }`}>
                {activity.type === "workout" && "💪"}
                {activity.type === "meal" && "🍽️"}
                {activity.type === "achievement" && "🏆"}
                {activity.type === "weight" && "⚖️"}
              </div>
              <div className="flex-1">
                <p className="text-sm">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
