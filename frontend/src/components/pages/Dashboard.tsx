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
