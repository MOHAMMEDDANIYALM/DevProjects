import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardHeader } from "./components/DashboardHeader";
import { Dashboard } from "./components/pages/Dashboard";
import { AICoachPage } from "./components/pages/AICoachPage";
import { MealPlansPage } from "./components/pages/MealPlansPage";
import { WorkoutsPage } from "./components/pages/WorkoutsPage";
import { ProgressPage } from "./components/pages/ProgressPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // ✅ Auth check that waits before showing anything
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "null" && token !== "undefined" && token.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    }

    setCheckingAuth(false); // finished checking auth
  }, []);

  // 🧠 Clean logout
  const handleLogout = () => setShowLogoutDialog(true);

  const confirmLogout = () => {
    localStorage.clear();
    setShowLogoutDialog(false);
    setIsLoggedIn(false);
    setShowRegister(false);
  };

  // 🧠 Dashboard Page Switch
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

  // ⏳ Show loading screen while checking token
  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-700 text-lg">
        Loading...
      </div>
    );
  }

  // 🔐 Not logged in → show login or register page
  if (!isLoggedIn) {
    return showRegister ? (
      <Register
        onRegisterSuccess={() => setIsLoggedIn(true)}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login
        onLoginSuccess={() => setIsLoggedIn(true)}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  // ✅ Logged in → show dashboard
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onProfileClick={() => setCurrentPage("profile")} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout? Your progress is saved.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
