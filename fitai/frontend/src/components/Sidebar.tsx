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
