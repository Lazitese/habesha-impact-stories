
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    <Link to={`/gallery/${id}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge 
            className={`absolute top-3 right-3 ${
              status === "available" ? "bg-brand" : "bg-gray-500"
            }`}
          >
            {status === "available" ? "Available" : "Sold"}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-poppins font-bold text-xl mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">by {artist}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">${price.toLocaleString()}</span>
            <span className="text-brand font-medium">View Details →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtCard;
