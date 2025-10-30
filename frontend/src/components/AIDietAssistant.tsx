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
