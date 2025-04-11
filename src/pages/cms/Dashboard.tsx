
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, BookOpen, FileText, Image, 
  Users, ArrowUp, ArrowDown 
} from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard 
          title="Total Projects"
          value="15"
          icon={<BookOpen className="h-8 w-8 text-brand" />}
          change="+2"
          trend="up"
        />
        <StatCard 
          title="Impact Stories"
          value="24"
          icon={<FileText className="h-8 w-8 text-brand" />}
          change="+5"
          trend="up"
        />
        <StatCard 
          title="Gallery Items"
          value="48"
          icon={<Image className="h-8 w-8 text-brand" />}
          change="+10"
          trend="up"
        />
        <StatCard 
          title="Board Members"
          value="12"
          icon={<Users className="h-8 w-8 text-brand" />}
          change="0"
          trend="neutral"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <ActionCard 
          title="Recent Updates" 
          items={[
            { text: "Added new artwork to Gallery", date: "2 hours ago" },
            { text: "Updated Clean Water Project", date: "1 day ago" },
            { text: "New case study published", date: "3 days ago" },
            { text: "Board member information updated", date: "1 week ago" }
          ]}
        />
        <ActionCard 
          title="Pending Tasks" 
          items={[
            { text: "Review donation page content", date: "High Priority" },
            { text: "Upload new project photos", date: "Medium Priority" },
            { text: "Update impact statistics", date: "Medium Priority" },
            { text: "Prepare monthly newsletter", date: "Low Priority" }
          ]}
        />
        <ActionCard 
          title="Recent Site Visitors" 
          items={[
            { text: "Gallery page", date: "125 visitors" },
            { text: "Projects page", date: "87 visitors" },
            { text: "Donate page", date: "62 visitors" },
            { text: "About page", date: "45 visitors" }
          ]}
        />
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
}

const StatCard = ({ title, value, icon, change, trend }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1 flex items-center">
        {trend === "up" && <ArrowUp className="mr-1 h-4 w-4 text-green-500" />}
        {trend === "down" && <ArrowDown className="mr-1 h-4 w-4 text-red-500" />}
        <span className={`${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : ""}`}>
          {change} from last month
        </span>
      </p>
    </CardContent>
  </Card>
);

interface ActionCardProps {
  title: string;
  items: { text: string; date: string }[];
}

const ActionCard = ({ title, items }: ActionCardProps) => (
  <Card className="col-span-1">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
            <span className="text-sm font-medium">{item.text}</span>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
