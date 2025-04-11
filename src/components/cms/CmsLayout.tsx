
import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { 
  LayoutGrid, FileText, Image, Users, 
  BookOpen, Settings, LogOut, Menu, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CmsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("cms_authenticated");
    toast.success("Logged out successfully");
    navigate("/cms");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 ease-in-out 
                    fixed h-full z-10 md:relative`}
      >
        <div className="p-5 flex justify-between items-center">
          <h2 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>CMS</h2>
          <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-gray-700">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-5">
          <ul className="space-y-2 px-4">
            <NavItem to="/cms/dashboard" icon={<LayoutGrid size={20} />} label="Dashboard" isOpen={sidebarOpen} />
            <NavItem to="/cms/projects" icon={<BookOpen size={20} />} label="Projects" isOpen={sidebarOpen} />
            <NavItem to="/cms/cases" icon={<FileText size={20} />} label="Case Studies" isOpen={sidebarOpen} />
            <NavItem to="/cms/gallery" icon={<Image size={20} />} label="Gallery" isOpen={sidebarOpen} />
            <NavItem to="/cms/board" icon={<Users size={20} />} label="Board Members" isOpen={sidebarOpen} />
            <NavItem to="/cms/settings" icon={<Settings size={20} />} label="Settings" isOpen={sidebarOpen} />
          </ul>
          
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
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} transition-all duration-300`}>
        <main className="p-6">
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
}

const NavItem = ({ to, icon, label, isOpen }: NavItemProps) => (
  <li>
    <Link 
      to={to} 
      className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <span className="mr-3">{icon}</span>
      {isOpen && <span>{label}</span>}
    </Link>
  </li>
);

export default CmsLayout;
