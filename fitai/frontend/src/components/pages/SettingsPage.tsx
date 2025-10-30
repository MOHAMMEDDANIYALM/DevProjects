import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Bell, User, Target, Lock, Smartphone } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2>Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-gray-600" />
              <h3>Personal Information</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" defaultValue="28" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="male">
                    <SelectTrigger id="gender">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input id="height" type="number" defaultValue="178" />
                </div>
                <div>
                  <Label htmlFor="weight">Current Weight (kg)</Label>
                  <Input id="weight" type="number" defaultValue="72" />
                </div>
                <div>
                  <Label htmlFor="bodyType">Body Type</Label>
                  <Select defaultValue="ectomorph">
                    <SelectTrigger id="bodyType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ectomorph">Ectomorph</SelectItem>
                      <SelectItem value="mesomorph">Mesomorph</SelectItem>
                      <SelectItem value="endomorph">Endomorph</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-5 w-5 text-gray-600" />
              <h3>Fitness Goals</h3>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="goal">Primary Goal</Label>
                <Select defaultValue="muscle">
                  <SelectTrigger id="goal">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="muscle">Gain Muscle</SelectItem>
                    <SelectItem value="lose">Lose Weight</SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="tone">Get Toned</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                <Input id="targetWeight" type="number" defaultValue="78" />
              </div>

              <div>
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select defaultValue="moderate">
                  <SelectTrigger id="activityLevel">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                    <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                    <SelectItem value="very">Very Active (2x per day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Daily Targets</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="calories">Daily Calories</Label>
                    <Input id="calories" type="number" defaultValue="2800" />
                  </div>
                  <div>
                    <Label htmlFor="protein">Protein (g)</Label>
                    <Input id="protein" type="number" defaultValue="140" />
                  </div>
                  <div>
                    <Label htmlFor="carbs">Carbs (g)</Label>
                    <Input id="carbs" type="number" defaultValue="350" />
                  </div>
                  <div>
                    <Label htmlFor="fats">Fats (g)</Label>
                    <Input id="fats" type="number" defaultValue="75" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="workouts">Weekly Workout Goal</Label>
                <Input id="workouts" type="number" defaultValue="5" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Reset to Recommended</Button>
                <Button>Save Goals</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-5 w-5 text-gray-600" />
              <h3>Notification Preferences</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Meal Reminders</p>
                  <p className="text-xs text-gray-500">Get notified when it's time to eat</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Workout Reminders</p>
                  <p className="text-xs text-gray-500">Remind me of scheduled workouts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Progress Updates</p>
                  <p className="text-xs text-gray-500">Weekly progress summaries</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">AI Coach Messages</p>
                  <p className="text-xs text-gray-500">Tips and suggestions from your AI coach</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Achievement Notifications</p>
                  <p className="text-xs text-gray-500">Celebrate when you unlock achievements</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive updates via email</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="h-5 w-5 text-gray-600" />
              <h3>Quiet Hours</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quietStart">Start Time</Label>
                <Input id="quietStart" type="time" defaultValue="22:00" />
              </div>
              <div>
                <Label htmlFor="quietEnd">End Time</Label>
                <Input id="quietEnd" type="time" defaultValue="07:00" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No notifications will be sent during quiet hours
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-5 w-5 text-gray-600" />
              <h3>Privacy & Security</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4">Password</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Data & Privacy</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Make Profile Public</p>
                      <p className="text-xs text-gray-500">Let others see your progress</p>
                    </div>
                    <Switch />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Share Data for Improvements</p>
                      <p className="text-xs text-gray-500">Help us improve AI recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Account Actions</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full">
                    Clear Cache
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
