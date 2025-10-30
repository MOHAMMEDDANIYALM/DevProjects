import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Apple, Beef, Fish, Egg, Milk } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProteinDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProteinDetailDialog({ open, onOpenChange }: ProteinDetailDialogProps) {
  const proteinSources = [
    {
      name: "Chicken Breast",
      protein: 31,
      per: "100g",
      calories: 165,
      icon: Beef,
      rating: 5,
      benefits: "Lean protein, low fat",
    },
    {
      name: "Salmon",
      protein: 25,
      per: "100g",
      calories: 208,
      icon: Fish,
      rating: 5,
      benefits: "Omega-3, vitamin D",
    },
    {
      name: "Eggs",
      protein: 13,
      per: "2 large",
      calories: 155,
      icon: Egg,
      rating: 5,
      benefits: "Complete protein, versatile",
    },
    {
      name: "Greek Yogurt",
      protein: 10,
      per: "100g",
      calories: 59,
      icon: Milk,
      rating: 4,
      benefits: "Probiotics, calcium",
    },
    {
      name: "Lean Beef",
      protein: 26,
      per: "100g",
      calories: 250,
      icon: Beef,
      rating: 4,
      benefits: "Iron, B12, zinc",
    },
    {
      name: "Tuna",
      protein: 30,
      per: "100g",
      calories: 132,
      icon: Fish,
      rating: 5,
      benefits: "Low fat, convenient",
    },
  ];

  const todayIntake = [
    { source: "Scrambled Eggs", amount: "3 eggs", protein: 19, time: "Breakfast" },
    { source: "Grilled Chicken", amount: "150g", protein: 46, time: "Lunch" },
    { source: "Protein Shake", amount: "1 scoop", protein: 30, time: "Snack" },
  ];

  const totalProtein = todayIntake.reduce((sum, item) => sum + item.protein, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Apple className="h-5 w-5 text-green-500" />
            Protein Intake & Best Sources
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Today's Intake */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
            <h4 className="mb-4">Today's Protein Intake</h4>
            <div className="space-y-3 mb-4">
              {todayIntake.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">{item.source}</p>
                    <p className="text-xs text-gray-500">{item.time} • {item.amount}</p>
                  </div>
                  <p className="text-sm">{item.protein}g</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t flex items-center justify-between">
              <p>Total Protein</p>
              <p className="text-2xl">{totalProtein}g / 140g</p>
            </div>
          </Card>

          {/* Best Protein Sources */}
          <div>
            <h4 className="mb-4">Top Protein Sources for Ectomorphs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proteinSources.map((source, index) => {
                const Icon = source.icon;
                
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p>{source.name}</p>
                          <Badge variant="secondary">
                            {"⭐".repeat(source.rating)}
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="text-green-600">{source.protein}g protein</span>
                          {" • "}
                          <span>{source.calories} cal</span>
                          {" • "}
                          <span className="text-xs">{source.per}</span>
                        </div>
                        
                        <p className="text-xs text-gray-500">{source.benefits}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="mb-2">AI Recommendations</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Aim for 1.6-2.2g protein per kg body weight (115-158g daily)</li>
              <li>• Distribute protein evenly across 4-5 meals for optimal absorption</li>
              <li>• Include 20-30g protein within 30 minutes post-workout</li>
              <li>• Combine animal and plant proteins for complete amino acid profile</li>
            </ul>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
