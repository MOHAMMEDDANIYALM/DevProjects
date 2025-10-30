import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface QuickStatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function QuickStatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendUp,
}: QuickStatsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl mb-1">{value}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
          {trend && (
            <p
              className={`text-xs mt-2 ${
                trendUp ? "text-green-600" : "text-red-600"
              }`}
            >
              {trendUp ? "↑" : "↓"} {trend}
            </p>
          )}
        </div>
        
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </Card>
  );
}
