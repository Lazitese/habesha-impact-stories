
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate checking auth with a small delay to show loading state
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        // In a real application, this would be an API call to validate the token
        const auth = localStorage.getItem("cms_authenticated") === "true";
        
        // Small artificial delay to demonstrate loading state
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setIsAuthenticated(auth);
      } catch (error) {
        toast.error("Authentication error. Please login again.");
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 text-brand animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Verifying credentials...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/cms" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
