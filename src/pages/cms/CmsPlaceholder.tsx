
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowRight, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CmsPlaceholderProps {
  title: string;
}

const CmsPlaceholder = ({ title }: CmsPlaceholderProps) => {
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case "case studies management":
        return <FileIcon className="h-12 w-12 text-amber-500" />;
      case "gallery management":
        return <GalleryIcon className="h-12 w-12 text-indigo-500" />;
      case "board members management":
        return <BoardIcon className="h-12 w-12 text-teal-500" />;
      case "settings":
        return <SettingsIcon className="h-12 w-12 text-purple-500" />;
      default:
        return <Wrench className="h-12 w-12 text-brand" />;
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <Card className="w-full border-none shadow-md bg-white">
        <CardHeader className="flex flex-row items-center gap-4 border-b pb-6">
          {getIcon()}
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-gray-500 mt-1">This section will be available soon</p>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <div className="flex items-start mb-4">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-700">Coming Soon</h3>
                  <p className="text-amber-600 text-sm mt-1">
                    This section is currently being developed and will be available in a future update.
                  </p>
                </div>
              </div>
              <div className="ml-7 space-y-3">
                <FeaturePreview 
                  title="Content Management" 
                  description="Create, edit, and manage content with an intuitive interface"
                />
                <FeaturePreview 
                  title="Media Upload" 
                  description="Upload and organize images and documents"
                />
                <FeaturePreview 
                  title="Publishing Workflow" 
                  description="Review and approve content before publishing"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="font-medium mb-3">Would you like to be notified when this feature is ready?</h3>
              <p className="text-gray-500 text-sm mb-4">
                We're actively working on this feature. Leave your email to get notified when it's ready.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button>
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium mb-4">In the meantime, you may want to explore:</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <ExploreCard 
                title="Projects" 
                description="Manage your organization's projects" 
                link="/cms/projects"
              />
              <ExploreCard 
                title="Dashboard" 
                description="View analytics and insights" 
                link="/cms/dashboard"
              />
              <ExploreCard 
                title="Documentation" 
                description="Learn how to use the CMS" 
                link="#"
                external
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturePreview = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start">
    <div className="h-2 w-2 rounded-full bg-amber-400 mt-2 mr-2"></div>
    <div>
      <h4 className="font-medium text-amber-900">{title}</h4>
      <p className="text-amber-700 text-sm">{description}</p>
    </div>
  </div>
);

const ExploreCard = ({ 
  title, 
  description, 
  link, 
  external = false 
}: { 
  title: string; 
  description: string; 
  link: string;
  external?: boolean;
}) => (
  <Card className="overflow-hidden border hover:shadow-md transition-all duration-200">
    <CardContent className="p-0">
      <Button 
        variant="ghost" 
        asChild 
        className="w-full h-full justify-between p-4 rounded-none"
      >
        <a href={link} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          <div className="text-left">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <ArrowRight className="h-5 w-5" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

// Custom icons for different placeholder sections
const FileIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const GalleryIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const BoardIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default CmsPlaceholder;
