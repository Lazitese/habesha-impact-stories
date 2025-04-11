
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("cms_authenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  if (isAuthenticated === null) {
    // Still checking authentication
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/cms" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
