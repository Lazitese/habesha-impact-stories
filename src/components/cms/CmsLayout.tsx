
import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutGrid, FileText, Image, Users, 
  BookOpen, Settings, LogOut, Menu, X,
  Bell, Search, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const CmsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications, setNotifications] = useState<number>(3);

  const handleLogout = () => {
    localStorage.removeItem("cms_authenticated");
    toast.success("Logged out successfully");
    navigate("/cms");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar on mobile when navigating
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-10 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <motion.div 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 
                    fixed h-full z-20 md:relative`}
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 80 }}
      >
        <div className="p-5 flex justify-between items-center border-b border-gray-800">
          <h2 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>
            <span className="text-brand">Impact</span> CMS
          </h2>
          <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-gray-800">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-5">
          <div className="px-4 mb-4 pb-4 border-b border-gray-800">
            <p className={`text-xs uppercase text-gray-500 mb-2 ${!sidebarOpen && 'hidden'}`}>
              Main
            </p>
            <ul className="space-y-2">
              <NavItem 
                to="/cms/dashboard" 
                icon={<LayoutGrid size={20} />} 
                label="Dashboard" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/dashboard"}
              />
              <NavItem 
                to="/cms/projects" 
                icon={<BookOpen size={20} />} 
                label="Projects" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/projects"}
              />
              <NavItem 
                to="/cms/cases" 
                icon={<FileText size={20} />} 
                label="Case Studies" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/cases"}
              />
            </ul>
          </div>
          
          <div className="px-4 mb-4 pb-4 border-b border-gray-800">
            <p className={`text-xs uppercase text-gray-500 mb-2 ${!sidebarOpen && 'hidden'}`}>
              Content
            </p>
            <ul className="space-y-2">
              <NavItem 
                to="/cms/gallery" 
                icon={<Image size={20} />} 
                label="Gallery" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/gallery"}
              />
              <NavItem 
                to="/cms/board" 
                icon={<Users size={20} />} 
                label="Board Members" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/board"}
              />
            </ul>
          </div>
          
          <div className="px-4">
            <p className={`text-xs uppercase text-gray-500 mb-2 ${!sidebarOpen && 'hidden'}`}>
              System
            </p>
            <ul className="space-y-2">
              <NavItem 
                to="/cms/settings" 
                icon={<Settings size={20} />} 
                label="Settings" 
                isOpen={sidebarOpen}
                isActive={location.pathname === "/cms/settings"}
              />
            </ul>
          </div>
          
          <div className="absolute bottom-5 w-full px-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-300 hover:text-red-100 hover:bg-red-800/30"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              {sidebarOpen && <span>Logout</span>}
            </Button>
          </div>
        </nav>
      </motion.div>
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Top navbar */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu size={20} />
            </Button>
          </div>
          <div className="flex-1 md:flex-none">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={20} />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="flex items-center justify-between p-2 border-b">
                  <span className="font-medium">Notifications</span>
                  <Button variant="ghost" size="sm" onClick={() => setNotifications(0)}>
                    Mark all read
                  </Button>
                </div>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span>New comment on "Clean Water Project"</span>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span>New donation received</span>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span>Website traffic report ready</span>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-gray-200">
                  <User size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isOpen, isActive }: NavItemProps) => (
  <li>
    <Link 
      to={to} 
      className={`flex items-center p-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-brand text-white' 
          : 'hover:bg-gray-800 text-gray-300 hover:text-white'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {isOpen && <span>{label}</span>}
    </Link>
  </li>
);

export default CmsLayout;
