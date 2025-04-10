
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Calendar } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  category: "completed" | "ongoing";
  image: string;
}

const ProjectCard = ({ id, title, description, category, image }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group">
      <Card className="overflow-hidden h-full border-none shadow-lg transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          <Badge 
            className={`absolute top-3 right-3 ${
              category === "completed" ? "bg-green-500" : "bg-amber-500"
            } text-white font-semibold px-3 py-1`}
          >
            {category === "completed" ? "Completed" : "Ongoing"}
          </Badge>
        </div>
        
        <CardContent className="p-5 bg-white">
          <h3 className="font-poppins font-bold text-xl mb-2 group-hover:text-brand transition-colors">{title}</h3>
          <p className="text-gray-600 line-clamp-2 text-sm mb-4">{description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-brand flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
              View Project <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
