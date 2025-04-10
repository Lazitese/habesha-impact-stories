
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

interface BoardMemberCardProps {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

const BoardMemberCard = ({ name, title, image }: BoardMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden h-80 border-none shadow-lg group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center mr-3 transform transition-transform duration-300 group-hover:scale-110">
            <UserIcon className="h-5 w-5 text-white" />
          </div>
          <div className="transform transition-all duration-300 group-hover:translate-x-1">
            <h3 className="font-poppins font-bold text-xl text-white">{name}</h3>
            <p className="text-brand font-medium">{title}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BoardMemberCard;
