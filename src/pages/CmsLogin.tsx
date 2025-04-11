
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Lock, User } from "lucide-react";

const CmsLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    
    setIsLoading(true);
    
    // Simple demo authentication - in a real app, this would connect to a backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      if (username === "admin" && password === "admin") {
        toast.success("Login successful! Welcome back.");
        localStorage.setItem("cms_authenticated", "true");
        navigate("/cms/dashboard");
      } else {
        toast.error("Invalid credentials. Try admin/admin for demo");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="text-brand">Impact</span> CMS
          </h1>
          <p className="text-gray-600">
            Manage your organization's content
          </p>
        </div>
        
        <Card className="w-full shadow-lg border-0">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-xl text-center font-bold">Sign in to Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-brand hover:bg-brand/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col text-center text-sm text-gray-500 border-t pt-4">
            <p className="w-full mb-2">Use <span className="font-medium">admin</span> / <span className="font-medium">admin</span> for demo</p>
            <p className="text-xs text-gray-400">This is a secure area. Unauthorized access is prohibited.</p>
          </CardFooter>
        </Card>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 Impact Organization. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CmsLogin;
