
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, ArrowRight } from "lucide-react";

interface ArtCardProps {
  id: number;
  title: string;
  artist: string;
  price: number;
  status: "available" | "sold";
  image: string;
}

const ArtCard = ({ id, title, artist, price, status, image }: ArtCardProps) => {
  return (
    <Link to={`/gallery/${id}`} className="group">
      <Card className="overflow-hidden h-full border-none shadow-lg transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          <Badge 
            className={`absolute top-3 right-3 ${
              status === "available" ? "bg-brand" : "bg-gray-500"
            } text-white font-semibold px-3 py-1`}
          >
            {status === "available" ? "Available" : "Sold"}
          </Badge>
          
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <div className="flex items-center mb-1">
              <Palette className="h-4 w-4 mr-2 text-brand" />
              <p className="text-sm font-medium">by {artist}</p>
            </div>
            <h3 className="font-poppins font-bold text-xl">{title}</h3>
          </div>
        </div>
        
        <CardContent className="p-5 bg-white">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">${price.toLocaleString()}</span>
            <span className="text-brand flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtCard;
