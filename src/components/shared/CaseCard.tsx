
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, ArrowRight } from "lucide-react";

interface CaseCardProps {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const CaseCard = ({ id, title, summary, image }: CaseCardProps) => {
  return (
    <Link to={`/cases/${id}`} className="group">
      <Card className="overflow-hidden h-full border-none shadow-lg transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <div className="flex items-center mb-1">
              <UserCircle className="h-5 w-5 mr-2 text-brand" />
              <h3 className="font-poppins font-bold text-xl">{title}</h3>
            </div>
          </div>
        </div>
        
        <CardContent className="p-5 bg-white">
          <p className="text-gray-600 line-clamp-3 text-sm mb-3">{summary}</p>
          <span className="text-brand flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
            Read Story <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseCard;
