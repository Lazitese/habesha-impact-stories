
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart as BarChartIcon, BookOpen, FileText, Image, 
  Users, ArrowUp, ArrowDown, TrendingUp, Eye, 
  Clock, DollarSign, Calendar, Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, 
  Cell, LineChart, Line, Legend 
} from "recharts";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Activity data for line chart
  const activityData = [
    { name: 'Mon', visits: 25, donations: 12 },
    { name: 'Tue', visits: 32, donations: 18 },
    { name: 'Wed', visits: 40, donations: 15 },
    { name: 'Thu', visits: 35, donations: 20 },
    { name: 'Fri', visits: 42, donations: 22 },
    { name: 'Sat', visits: 28, donations: 13 },
    { name: 'Sun', visits: 30, donations: 16 },
  ];
  
  // Project status data for pie chart
  const projectStatusData = [
    { name: 'Ongoing', value: 8 },
    { name: 'Completed', value: 15 },
    { name: 'Planned', value: 4 },
  ];
  
  const COLORS = ['#FF8042', '#00C49F', '#0088FE'];
  
  // Upcoming events
  const upcomingEvents = [
    { title: "Team Meeting", date: "Tomorrow, 10:00 AM", type: "meeting" },
    { title: "Website Launch", date: "Apr 15, 2025", type: "deadline" },
    { title: "Donor Call", date: "Apr 18, 2025", type: "call" },
    { title: "Project Review", date: "Apr 22, 2025", type: "meeting" },
  ];
  
  // Donation data for bar chart
  const donationData = [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 7500 },
    { month: 'Mar', amount: 6200 },
    { month: 'Apr', amount: 8700 },
    { month: 'May', amount: 9400 },
    { month: 'Jun', amount: 11200 },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Last updated:</span>
          <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={item}>
          <StatCard 
            title="Total Projects"
            value="27"
            icon={<BookOpen className="h-8 w-8 text-brand" />}
            change="+4"
            trend="up"
            isLoading={isLoading}
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            title="Impact Stories"
            value="42"
            icon={<FileText className="h-8 w-8 text-indigo-500" />}
            change="+8"
            trend="up"
            isLoading={isLoading}
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            title="Gallery Items"
            value="86"
            icon={<Image className="h-8 w-8 text-amber-500" />}
            change="+15"
            trend="up"
            isLoading={isLoading}
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            title="Board Members"
            value="14"
            icon={<Users className="h-8 w-8 text-emerald-500" />}
            change="+2"
            trend="up"
            isLoading={isLoading}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card className="col-span-2 border-none shadow-md overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Website Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Last 7 days</span>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            {isLoading ? (
              <div className="h-80 w-full flex items-center justify-center">
                <div className="h-6 w-6 border-2 border-t-brand rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={activityData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "#fff", 
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.375rem"
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="visits" 
                      stroke="#F35C2E" 
                      strokeWidth={3}
                      dot={{ strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="donations" 
                      stroke="#3730a3" 
                      strokeWidth={3}
                      dot={{ strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Project Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            {isLoading ? (
              <div className="h-80 w-full flex items-center justify-center">
                <div className="h-6 w-6 border-2 border-t-brand rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectStatusData}
                      cx="50%"
                      cy="45%"
                      innerRadius={70}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {projectStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "#fff", 
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.375rem"
                      }}
                      formatter={(value) => [`${value} projects`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 pt-4">
                  {projectStatusData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm text-gray-700">{entry.name}: {entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card className="col-span-1 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse flex justify-between">
                    <div className="w-3/4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    </div>
                    <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <ActivityItem 
                  icon={<Image className="h-4 w-4" />}
                  text="Added new artwork to Gallery" 
                  date="2 hours ago" 
                  iconColor="bg-blue-100 text-blue-600"
                />
                <ActivityItem 
                  icon={<BookOpen className="h-4 w-4" />}
                  text="Updated Clean Water Project" 
                  date="1 day ago" 
                  iconColor="bg-brand/10 text-brand"
                />
                <ActivityItem 
                  icon={<FileText className="h-4 w-4" />}
                  text="New case study published" 
                  date="3 days ago" 
                  iconColor="bg-purple-100 text-purple-600"
                />
                <ActivityItem 
                  icon={<Users className="h-4 w-4" />}
                  text="Board member information updated" 
                  date="1 week ago" 
                  iconColor="bg-green-100 text-green-600"
                />
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="col-span-1 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="flex items-start">
                    <EventIcon type={event.type} />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="col-span-1 border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction 
                icon={<BookOpen className="h-5 w-5" />}
                label="Add Project"
                href="/cms/projects"
                color="bg-brand/10 text-brand"
              />
              <QuickAction 
                icon={<Image className="h-5 w-5" />}
                label="Upload Media"
                href="/cms/gallery"
                color="bg-blue-100 text-blue-600"
              />
              <QuickAction 
                icon={<DollarSign className="h-5 w-5" />}
                label="Donations"
                href="#"
                color="bg-green-100 text-green-600"
              />
              <QuickAction 
                icon={<Mail className="h-5 w-5" />}
                label="Messages"
                href="#"
                color="bg-purple-100 text-purple-600"
              />
              <QuickAction 
                icon={<FileText className="h-5 w-5" />}
                label="Case Study"
                href="/cms/cases"
                color="bg-amber-100 text-amber-600"
              />
              <QuickAction 
                icon={<Users className="h-5 w-5" />}
                label="Board"
                href="/cms/board"
                color="bg-indigo-100 text-indigo-600"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Monthly Donations</CardTitle>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Last 6 months</span>
              <Badge type="success">+15% vs. previous period</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-72 w-full flex items-center justify-center">
                <div className="h-6 w-6 border-2 border-t-brand rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={donationData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "#fff", 
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.375rem" 
                      }}
                      formatter={(value) => [`$${value}`, 'Amount']}
                    />
                    <Bar 
                      dataKey="amount" 
                      fill="#F35C2E" 
                      radius={[4, 4, 0, 0]}
                      barSize={35}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  trend: "up" | "down" | "neutral";
  isLoading?: boolean;
}

const StatCard = ({ title, value, icon, change, trend, isLoading = false }: StatCardProps) => (
  <Card className="border-none shadow-md">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-7 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-1/3"></div>
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            {trend === "up" && <ArrowUp className="mr-1 h-4 w-4 text-green-500" />}
            {trend === "down" && <ArrowDown className="mr-1 h-4 w-4 text-red-500" />}
            <span className={`${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : ""}`}>
              {change} from last month
            </span>
          </p>
        </>
      )}
    </CardContent>
  </Card>
);

interface ActivityItemProps {
  icon: React.ReactNode;
  text: string;
  date: string;
  iconColor: string;
}

const ActivityItem = ({ icon, text, date, iconColor }: ActivityItemProps) => (
  <div className="flex justify-between items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
    <div className="flex items-start">
      <div className={`p-1 rounded-md ${iconColor} mr-3`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{text}</span>
    </div>
    <span className="text-xs text-gray-500">{date}</span>
  </div>
);

const EventIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'meeting':
      return (
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          <Calendar className="h-4 w-4" />
        </div>
      );
    case 'deadline':
      return (
        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
          <Clock className="h-4 w-4" />
        </div>
      );
    case 'call':
      return (
        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
          <Phone className="h-4 w-4" />
        </div>
      );
    default:
      return (
        <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
          <Calendar className="h-4 w-4" />
        </div>
      );
  }
};

const Phone = ({ className }: { className?: string }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const QuickAction = ({ icon, label, href, color }: QuickActionProps) => (
  <a 
    href={href} 
    className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
  >
    <div className={`p-2 rounded-lg ${color} mb-2`}>
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

interface BadgeProps {
  children: React.ReactNode;
  type: "success" | "warning" | "error" | "info";
}

const Badge = ({ children, type }: BadgeProps) => {
  const colors = {
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colors[type]}`}>
      {children}
    </span>
  );
};

export default Dashboard;
