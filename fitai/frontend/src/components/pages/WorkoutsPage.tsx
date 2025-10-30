import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Dumbbell, Clock, Flame, CheckCircle2, Play, Plus } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WorkoutsPage() {
  const todayWorkout = {
    name: "Upper Body Strength",
    duration: 60,
    exercises: 8,
    estimatedCalories: 420,
    difficulty: "Intermediate",
    completed: false,
  };

  const exercises = [
    { name: "Bench Press", sets: 4, reps: "8-10", weight: "60kg", rest: "90s", completed: false },
    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", weight: "22kg", rest: "60s", completed: false },
    { name: "Barbell Rows", sets: 4, reps: "8-10", weight: "50kg", rest: "90s", completed: false },
    { name: "Lat Pulldown", sets: 3, reps: "10-12", weight: "45kg", rest: "60s", completed: false },
    { name: "Shoulder Press", sets: 4, reps: "8-10", weight: "18kg", rest: "90s", completed: false },
    { name: "Lateral Raises", sets: 3, reps: "12-15", weight: "8kg", rest: "45s", completed: false },
    { name: "Bicep Curls", sets: 3, reps: "10-12", weight: "12kg", rest: "45s", completed: false },
    { name: "Tricep Dips", sets: 3, reps: "10-12", weight: "Body", rest: "45s", completed: false },
  ];

  const weekSchedule = [
    { day: "Monday", workout: "Upper Body Strength", status: "completed", duration: 65 },
    { day: "Tuesday", workout: "Lower Body Power", status: "completed", duration: 70 },
    { day: "Wednesday", workout: "Rest Day", status: "rest", duration: 0 },
    { day: "Thursday", workout: "Push Day", status: "completed", duration: 60 },
    { day: "Friday", workout: "Pull Day", status: "completed", duration: 62 },
    { day: "Saturday", workout: "Rest Day", status: "rest", duration: 0 },
    { day: "Sunday", workout: "Upper Body Strength", status: "active", duration: 60 },
  ];

  const workoutHistory = [
    {
      date: "Oct 27",
      name: "Pull Day",
      duration: 62,
      calories: 435,
      exercises: 7,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NjE2NzgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      date: "Oct 26",
      name: "Push Day",
      duration: 60,
      calories: 410,
      exercises: 8,
      image: "https://images.unsplash.com/photo-1584827387179-355517d8a5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXhlcmNpc2UlMjBneW18ZW58MXx8fHwxNzYxNjkwNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      date: "Oct 24",
      name: "Lower Body Power",
      duration: 70,
      calories: 480,
      exercises: 6,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NjE2NzgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Workouts</h2>
          <p className="text-gray-600">Build muscle with progressive overload</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Workout
        </Button>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today's Workout</TabsTrigger>
          <TabsTrigger value="schedule">This Week</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6">
          {/* Workout Overview */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="mb-2">{todayWorkout.name}</h3>
                <Badge variant="secondary">{todayWorkout.difficulty}</Badge>
              </div>
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Start Workout
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-lg">{todayWorkout.duration} min</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Exercises</p>
                  <p className="text-lg">{todayWorkout.exercises}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Flame className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Est. Calories</p>
                  <p className="text-lg">{todayWorkout.estimatedCalories}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Exercise List */}
          <div>
            <h4 className="mb-4">Exercise List</h4>
            <div className="space-y-3">
              {exercises.map((exercise, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {exercise.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <span className="text-sm">{index + 1}</span>
                        )}
                      </div>
                      
                      <div>
                        <p className="text-sm mb-1">{exercise.name}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span>{exercise.sets} sets</span>
                          <span>{exercise.reps} reps</span>
                          <span>{exercise.weight}</span>
                          <span>Rest: {exercise.rest}</span>
                        </div>
                      </div>
                    </div>

                    {!exercise.completed && (
                      <Button variant="outline" size="sm">
                        Complete Set
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          {weekSchedule.map((day, index) => (
            <Card 
              key={index} 
              className={`p-4 ${
                day.status === "active" ? "border-blue-500 bg-blue-50" : ""
              } ${day.status === "rest" ? "opacity-60" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[80px]">
                    <p className="text-sm">{day.day}</p>
                    {day.status === "active" && <Badge variant="outline" className="mt-1 text-xs">Today</Badge>}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {day.status === "completed" && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                    {day.status === "rest" && (
                      <div className="h-5 w-5 rounded-full bg-gray-300" />
                    )}
                    <div>
                      <p className="text-sm">{day.workout}</p>
                      {day.duration > 0 && (
                        <p className="text-xs text-gray-500">{day.duration} minutes</p>
                      )}
                    </div>
                  </div>
                </div>

                {day.status === "active" && (
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="grid gap-4">
            {workoutHistory.map((workout, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <ImageWithFallback
                    src={workout.image}
                    alt={workout.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm mb-1">{workout.name}</p>
                        <p className="text-xs text-gray-500">{workout.date}</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {workout.duration} min
                      </div>
                      <div className="flex items-center gap-1">
                        <Dumbbell className="h-4 w-4" />
                        {workout.exercises} exercises
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4" />
                        {workout.calories} cal
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
