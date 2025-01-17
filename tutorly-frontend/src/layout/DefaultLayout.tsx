import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  MessageSquare,
  BookOpen,
  School,
  Calendar,
  LineChart,
  Library,
  UserCircle,
  Settings,
  Users,
  EyeOff,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuItem } from "@/types/components";
import CustomDropdownMenu from "@/components/shared/CustomDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { path: "/dashboard", label: "Home", icon: Home },
  { path: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { path: "/dashboard/lessons", label: "My lessons", icon: BookOpen },
  { path: "/dashboard/classroom", label: "Classroom", icon: School },
  { path: "/dashboard/calendar", label: "Calendar", icon: Calendar },
  { path: "/dashboard/insights", label: "Insights", icon: LineChart },
  { path: "/dashboard/academy", label: "Academy", icon: Library },
  { path: "/dashboard/profile", label: "My profile", icon: UserCircle },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
  { path: "/dashboard/community", label: "Community", icon: Users },
];

const profileDropdownItems: MenuItem[] = [
  { path: "/dashboard/messages", label: "Messages" },
  { path: "/dashboard/lessons", label: "My lessons" },
  { path: "/dashboard/classroom", label: "Classroom" },
  { path: "/dashboard/calendar", label: "Calendar" },
  { path: "/dashboard/insights", label: "Insights" },
  { path: "/dashboard/refer-earn", label: "Refer & earn" },
  { path: "/dashboard/profile", label: "My profile" },
  { path: "/dashboard/settings", label: "Settings" },
  { path: "/dashboard/help", label: "Help" },
  { path: "/logout", label: "Log out" },
];

export default function Layout() {
  const location = useLocation();
  // Determine if the current path matches "/dashboard" or its subpaths
  const showDashboardNav = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Main Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="font-semibold text-xl">
                Tutorly
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/explore" className="text-sm hover:text-primary">
                  Find tutors
                </Link>
                <Link to="/corporate" className="text-sm hover:text-primary">
                  Corporate language training
                </Link>
                <Link to="/provider" className="text-sm hover:text-primary">
                  Become a tutor
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">English, USD</span>
              </div>
              {/* <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                Log in
              </Link> */}
              <CustomDropdownMenu
                menuItems={profileDropdownItems}
                trigger={
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
              />
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Navigation */}
      {showDashboardNav && (
        <nav className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex h-14 items-center space-x-6 overflow-x-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                // const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 py-4 text-sm font-medium whitespace-nowrap",
                      isActive
                        ? "border-b-2 border-pink-500"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {/* {/* <Icon className="h-4 w-4" /> */}
                    {item.label}
                  </Link>
                );
              })}

              <div className="ml-auto flex items-center pl-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <EyeOff className="h-4 w-4" />
                      Profile is hidden
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Show profile</DropdownMenuItem>
                    <DropdownMenuItem>
                      Edit visibility settings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main>
        <Outlet />{" "}
      </main>
    </div>
  );
}
