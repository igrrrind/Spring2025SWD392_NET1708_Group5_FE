import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  MessageSquare,
  BookOpen,
  UserCircle,
  Settings,
  EyeOff,
  Facebook, Youtube 
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
  { path: "/dashboard/my-classes", label: "My classes", icon: BookOpen },
  { path: "/dashboard/my-children", label: "My Children"},
  { path: "/dashboard/calendar", label: "Calendar" },
  { path: "/dashboard/services", label: "Services" },
  { path: "/dashboard/teachers", label: "Teaching Staffs" },
  { path: "/dashboard/payout", label: "Teacher Payout" },
  { path: "/dashboard/insights", label: "Insights" },
  { path: "/dashboard/profile", label: "My profile", icon: UserCircle },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

const profileDropdownItems: MenuItem[] = [
  { path: "/dashboard/messages", label: "Messages" },
  { path: "/dashboard/my-classes", label: "Classes" },
  { path: "/dashboard/my-children", label: "My Children" },
  { path: "/dashboard/calendar", label: "Calendar" },
  { path: "/dashboard/services", label: "Services" },
  { path: "/dashboard/teachers", label: "Teaching Staffs" },
  { path: "/dashboard/payout", label: "Teacher Payout" },
  { path: "/dashboard/insights", label: "Insights" },
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
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                Log in
              </Link>
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
            <div className="flex h-14 items-center space-x-2 overflow-x-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                // const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2  py-1 text-sm font-medium whitespace-nowrap",
                      isActive
                        ? "border-b-2 border-primary"
                        : "border-b-2 border-transparent text-muted-foreground hover:text-primary"
                    )}
                  >
                    {/* {/* <Icon className="h-4 w-4" /> */}
                    <div className="hover:bg-gray-100 py-3 px-2 rounded-xl transition">{item.label}</div>
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
      <main className="min-h-screen">
        <Outlet />{" "}
      </main>
      {/* Footer */}
      <Footer/>
      
      
    </div>
  );
}





function Footer() {
  return (
    <footer className="px-12 mt-20 bg-gradient-to-b from-white to-primary">
      <div className="container py-8 px-8 rounded-3xl rounded-b-none text-white  mx-auto bg-primary-dark">
        {/* Footer Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Tutorly</h1>
          <p className="text-sm">
            Find tutors for any subject out there.
            <br />
            With Tutorly, every subject is possible.
          </p>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Tutorly</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-purple-400">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="hover:text-purple-400">Find Tutors</Link></li>
              <li><Link to="/earn-money" className="hover:text-purple-400">Earn with Tutorly</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400">Tutorly Blog</Link></li>
              <li><Link to="/join-us" className="hover:text-purple-400">Become a Tutor</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Hotline: <a href="tel:0938562745" className="hover:text-purple-400">0938 562 745</a> (Quang Dao)</li>
              <li>Email: <a href="mailto:tutorly@gmail.com" className="hover:text-purple-400">tutorly@gmail.com</a></li>
            </ul>       
          </div>

          {/* Social Media Icons */}
          <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-purple-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-purple-400">
                  <Youtube className="h-6 w-6" />
                </a>
                {/* <a href="#" className="hover:text-purple-400">
                  <Spotify className="h-6 w-6" />
                </a> */}
              </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-4 mt-8 text-center text-sm text-white/70">
          <p>© 2025 Tutorly. All rights reserved.</p>
          <p>A team project by group 5</p>
        </div>
      </div>
    </footer>
  );
}




