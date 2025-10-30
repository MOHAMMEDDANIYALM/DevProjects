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
