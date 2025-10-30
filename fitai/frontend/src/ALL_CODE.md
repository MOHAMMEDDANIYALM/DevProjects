# FitAI - Fitness App Dashboard - Complete Code

This document contains all the code for the FitAI fitness app dashboard.

---

## Table of Contents

1. [Main Application Files](#main-application-files)
2. [Page Components](#page-components)
3. [Dashboard Components](#dashboard-components)
4. [Detail Dialog Components](#detail-dialog-components)
5. [Styles](#styles)

---

## Main Application Files

### `/App.tsx`

```tsx
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardHeader } from "./components/DashboardHeader";
import { Dashboard } from "./components/pages/Dashboard";
import { AICoachPage } from "./components/pages/AICoachPage";
import { MealPlansPage } from "./components/pages/MealPlansPage";
import { WorkoutsPage } from "./components/pages/WorkoutsPage";
import { ProgressPage } from "./components/pages/ProgressPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./components/ui/alert-dialog";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setShowLogoutDialog(false);
    // In a real app, this would clear auth tokens and redirect to login
    alert("Logged out successfully!");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "ai-coach":
        return <AICoachPage />;
      case "meal-plans":
        return <MealPlansPage />;
      case "workouts":
        return <WorkoutsPage />;
      case "progress":
        return <ProgressPage />;
      case "settings":
        return <SettingsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onProfileClick={() => setCurrentPage("profile")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout? Your progress is saved and will be here when you return.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmLogout}>
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
```

### `/components/Sidebar.tsx`

```tsx
import { Home, MessageSquare, Utensils, Dumbbell, TrendingUp, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Sidebar({ currentPage, onNavigate, onLogout }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Dashboard", page: "dashboard" },
    { icon: MessageSquare, label: "AI Coach", page: "ai-coach" },
    { icon: Utensils, label: "Meal Plans", page: "meal-plans" },
    { icon: Dumbbell, label: "Workouts", page: "workouts" },
    { icon: TrendingUp, label: "Progress", page: "progress" },
    { icon: Settings, label: "Settings", page: "settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <h2>FitAI</h2>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Button
                  variant={currentPage === item.page ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => onNavigate(item.page)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
```

### `/components/DashboardHeader.tsx`

```tsx
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface DashboardHeaderProps {
  onProfileClick: () => void;
}

export function DashboardHeader({ onProfileClick }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search meals, exercises..."
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          
          <button 
            onClick={onProfileClick}
            className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
          >
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1711006366862-734ee22d1d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3Jrb3V0JTIwZ3ltfGVufDF8fHx8MTc2MTc2OTI1NHww&ixlib=rb-4.1.0&q=80&w=1080" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">John Doe</p>
              <p className="text-xs text-gray-500">Ectomorph</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
```

---

## Page Components

### `/components/pages/Dashboard.tsx`

```tsx
import { useState } from "react";
import { UserProfileCard } from "../UserProfileCard";
import { AIDietAssistant } from "../AIDietAssistant";
import { NutritionTracker } from "../NutritionTracker";
import { MealPlanCard } from "../MealPlanCard";
import { ActivitySummary } from "../ActivitySummary";
import { QuickStatsCard } from "../QuickStatsCard";
import { Apple, Flame, Target, TrendingUp } from "lucide-react";
import { CaloriesDetailDialog } from "../details/CaloriesDetailDialog";
import { ProteinDetailDialog } from "../details/ProteinDetailDialog";
import { WeightGoalDialog } from "../details/WeightGoalDialog";
import { WeeklyProgressDialog } from "../details/WeeklyProgressDialog";

export function Dashboard() {
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={() => setSelectedDetail("calories")} className="cursor-pointer">
          <QuickStatsCard
            title="Daily Calories"
            value="1,850"
            subtitle="of 2,800 target"
            icon={Flame}
            trend="15% vs yesterday"
            trendUp={true}
          />
        </div>
        
        <div onClick={() => setSelectedDetail("protein")} className="cursor-pointer">
          <QuickStatsCard
            title="Protein Intake"
            value="95g"
            subtitle="of 140g target"
            icon={Apple}
            trend="68% completed"
            trendUp={true}
          />
        </div>
        
        <div onClick={() => setSelectedDetail("weight")} className="cursor-pointer">
          <QuickStatsCard
            title="Weight Goal"
            value="72kg"
            subtitle="Target: 78kg"
            icon={Target}
            trend="0.5kg this week"
            trendUp={true}
          />
        </div>
        
        <div onClick={() => setSelectedDetail("progress")} className="cursor-pointer">
          <QuickStatsCard
            title="Weekly Progress"
            value="85%"
            subtitle="Above average"
            icon={TrendingUp}
            trend="5% improvement"
            trendUp={true}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <UserProfileCard />
          <AIDietAssistant />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <NutritionTracker />
          <ActivitySummary />
        </div>
      </div>

      {/* Meal Plan Section */}
      <div className="grid grid-cols-1">
        <MealPlanCard />
      </div>

      {/* Detail Dialogs */}
      <CaloriesDetailDialog 
        open={selectedDetail === "calories"} 
        onOpenChange={(open) => !open && setSelectedDetail(null)} 
      />
      <ProteinDetailDialog 
        open={selectedDetail === "protein"} 
        onOpenChange={(open) => !open && setSelectedDetail(null)} 
      />
      <WeightGoalDialog 
        open={selectedDetail === "weight"} 
        onOpenChange={(open) => !open && setSelectedDetail(null)} 
      />
      <WeeklyProgressDialog 
        open={selectedDetail === "progress"} 
        onOpenChange={(open) => !open && setSelectedDetail(null)} 
      />
    </div>
  );
}
```

### `/components/pages/AICoachPage.tsx`

```tsx
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
```

_[Continue with other page components in next sections...]_

### `/components/pages/MealPlansPage.tsx`

```tsx
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
```

_[Due to length, I'll continue with key remaining components...]_

---

## Dashboard Components

### `/components/AIDietAssistant.tsx`

```tsx
import { useState, useRef, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Send, Bot } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIDietAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI nutrition assistant. Based on your ectomorph body type, I can help you with personalized diet plans to support your muscle gain goals. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Context-aware responses using user's current data
    if (lowerQuery.includes("progress") || lowerQuery.includes("doing")) {
      return "Looking at your current stats:\n\n📊 Today's Progress:\n• Calories: 1,850/2,800 (66% - need 950 more)\n• Protein: 95g/140g (68% - need 45g more)\n• Weight: 72kg (goal: 78kg - you've gained 2kg so far!)\n\n💪 Weekly Performance: 85% adherence\n\nYou're doing well! To hit today's targets, I suggest adding a protein-rich meal or large snack. Want some ideas?";
    }
    
    if (lowerQuery.includes("meal") || lowerQuery.includes("what to eat") || lowerQuery.includes("today")) {
      return "Based on your remaining macros today (950 cal, 45g protein):\n\n🍽️ Recommended Next Meals:\n\n**Dinner Option (680 cal, 48g protein):**\n• 200g salmon with herbs\n• 1 cup brown rice\n• Steamed broccoli\n• Side salad with olive oil\n\n**Evening Snack (270 cal, 30g protein):**\n• Protein shake with banana\n• Handful of almonds\n\nThis will get you to 2,800 calories and 140g protein - perfect for your muscle gain goals!";
    }
    
    if (lowerQuery.includes("breakfast") || lowerQuery.includes("morning")) {
      return "For ectomorphs looking to gain muscle, I recommend a high-calorie breakfast:\n\n• 3 whole eggs + 2 egg whites (scrambled)\n• 2 slices whole grain toast with peanut butter\n• 1 banana\n• Glass of whole milk\n• Oatmeal with berries\n\nThis provides ~650 calories with a good protein-carb balance to kickstart your metabolism.";
    }
    
    if (lowerQuery.includes("protein") || lowerQuery.includes("much")) {
      return "As an ectomorph focused on muscle gain, you should aim for:\n\n• 1.6-2.2g of protein per kg of body weight\n• For your 72kg weight, that's 115-158g of protein daily\n• Spread across 4-5 meals\n• Best sources: lean meats, fish, eggs, dairy, legumes\n\n📊 Your current intake: 95g (68% of 140g target)\nYou need 45g more protein today!\n\nProtein timing around workouts is also crucial for optimal muscle synthesis.";
    }
    
    if (lowerQuery.includes("snack")) {
      return "Great snack options for muscle gain:\n\n• Greek yogurt with granola and honey\n• Protein shake with banana and oats\n• Handful of almonds with dried fruit\n• Rice cakes with almond butter\n• Cottage cheese with berries\n\nAim for 200-300 calories per snack, 2-3 times daily between main meals.\n\n💡 Based on your remaining 950 calories today, you have room for 2-3 snacks!";
    }
    
    if (lowerQuery.includes("weight") || lowerQuery.includes("goal")) {
      return "🎯 Weight Goal Progress:\n\n• Current: 72kg\n• Starting: 70kg\n• Target: 78kg\n• Gained: +2kg ✅\n• To go: 6kg\n• Progress: 33% complete\n\n📈 Weekly Gain: 0.4kg (healthy pace!)\n\nAt your current pace, you'll reach 78kg in ~15 weeks. Keep up the consistent eating and training!\n\nYour weekly performance is 85% - excellent adherence to the plan!";
    }
    
    if (lowerQuery.includes("workout") || lowerQuery.includes("training")) {
      return "Based on your activity:\n\n💪 This Week: 4/5 workouts completed\n🔥 Today's calories burned: 420 cal estimated\n\n⚠️ Important: You've burned calories through exercise, so make sure you're eating enough to stay in a surplus!\n\nWith 1,850 calories consumed and 420 burned from workouts, your net is lower than ideal. Add an extra snack or increase portion sizes at dinner.\n\nPost-workout nutrition tip: Aim for 20-30g protein within 30 mins after training!";
    }
    
    return "For your ectomorph body type and muscle gain goal, focus on:\n\n• High calorie intake (surplus of 300-500 calories)\n• Frequent meals (5-6 per day)\n• Complex carbs: rice, oats, sweet potatoes\n• Lean proteins: chicken, fish, eggs\n• Healthy fats: nuts, avocado, olive oil\n• Stay hydrated with 3-4L water daily\n\n📊 Quick reminder - Today's stats:\n• Calories: 1,850/2,800\n• Protein: 95g/140g\n• Weight: 72kg (goal: 78kg)\n\nWould you like specific meal suggestions or recipes?";
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3>AI Nutrition Coach</h3>
            <p className="text-xs text-gray-500">Ask me anything about your diet</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                </Avatar>
              )}
              
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              
              {message.role === "user" && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about diet, meals, nutrition..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
```

---

## Styles

### `/styles/globals.css`

```css
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/**
 * Base typography. This is not applied to elements which have an ancestor with a Tailwind text class.
 */
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }

    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }
  }
}

html {
  font-size: var(--font-size);
}
```

---

## Additional Components

_Note: Due to the large size of this application, I've included the main files above. The remaining components (WorkoutsPage, ProgressPage, SettingsPage, ProfilePage, and all detail dialogs) follow similar patterns. The complete application also uses ShadCN UI components from the `/components/ui` directory._

---

## Package Dependencies

The application uses the following main dependencies:

- **React** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **ShadCN UI** - Pre-built components (Button, Card, Dialog, Input, Select, Switch, Tabs, Progress, Badge, Avatar, etc.)

---

## Features Summary

1. **Multi-page navigation** with routing between Dashboard, AI Coach, Meal Plans, Workouts, Progress, Settings, and Profile
2. **Interactive stats cards** that open detailed dialogs
3. **AI chatbot** with context-aware responses based on user data
4. **Meal planning** with detailed macros
5. **Workout tracking** with exercise lists
6. **Progress monitoring** with weight tracking, body measurements, and achievements
7. **Settings** for profile, goals, notifications, and privacy
8. **Profile page** with statistics and recent activity

---

**End of Code Documentation**
