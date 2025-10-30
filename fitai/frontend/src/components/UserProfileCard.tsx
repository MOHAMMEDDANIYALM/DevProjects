import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { User, TrendingUp, Target } from "lucide-react";

export function UserProfileCard() {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://images.unsplash.com/photo-1711006366862-734ee22d1d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3Jrb3V0JTIwZ3ltfGVufDF8fHx8MTc2MTc2OTI1NHww&ixlib=rb-4.1.0&q=80&w=1080" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3>John Doe</h3>
            <Badge variant="secondary">Ectomorph</Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <User className="h-4 w-4" />
                <span>Age</span>
              </div>
              <p className="text-sm">28 years</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <TrendingUp className="h-4 w-4" />
                <span>Weight</span>
              </div>
              <p className="text-sm">72 kg</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Target className="h-4 w-4" />
                <span>Goal</span>
              </div>
              <p className="text-sm">Gain Muscle</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
