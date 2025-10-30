import { AIDietAssistant } from "../AIDietAssistant";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Brain, TrendingUp, Apple, Flame } from "lucide-react";

export function AICoachPage() {
  const aiInsights = [
    {
      title: "Calorie Status",
      value: "1,850 / 2,800 kcal",
      status: "Below target",
      icon: Flame,
      suggestion: "Add a protein shake or snack to reach your goal",
    },
    {
      title: "Protein Progress",
      value: "95g / 140g",
      status: "68% complete",
      icon: Apple,
      suggestion: "Include lean chicken or fish in your next meal",
    },
    {
      title: "Weight Trend",
      value: "72kg → 78kg",
      status: "On track",
      icon: TrendingUp,
      suggestion: "Maintaining 0.4kg/week gain - perfect pace!",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2>AI Nutrition Coach</h2>
        <p className="text-gray-600">
          Get personalized nutrition advice based on your ectomorph body type and muscle gain goals
        </p>
      </div>

      {/* Current Stats for AI Context */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3>Today's Insights</h3>
            <p className="text-sm text-gray-600">AI-powered recommendations based on your current progress</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="p-4 bg-white rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-purple-600" />
                  <p className="text-sm text-gray-600">{insight.title}</p>
                </div>
                <p className="text-lg mb-1">{insight.value}</p>
                <Badge variant="secondary" className="mb-2 text-xs">
                  {insight.status}
                </Badge>
                <p className="text-xs text-gray-600">{insight.suggestion}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* AI Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AIDietAssistant />
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="mb-3">Quick Questions</h4>
            <div className="space-y-2">
              {[
                "What should I eat for breakfast?",
                "How much protein do I need?",
                "Best post-workout meals?",
                "Healthy snack ideas?",
                "Meal prep tips?",
              ].map((question, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 text-sm rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="mb-2">About Your AI Coach</h4>
            <p className="text-sm text-gray-700">
              This AI is trained on nutrition science and specialized for ectomorph body types focusing on healthy muscle gain. It has access to your current stats and progress to provide personalized advice.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
