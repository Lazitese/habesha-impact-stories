
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  category: "completed" | "ongoing";
  image: string;
}

const ProjectCard = ({ id, title, description, category, image }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge 
            className={`absolute top-3 right-3 ${
              category === "completed" ? "bg-green-500" : "bg-amber-500"
            }`}
          >
            {category === "completed" ? "Completed" : "Ongoing"}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-poppins font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
