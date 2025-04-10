
import { Card, CardContent } from "@/components/ui/card";

interface BoardMemberCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const BoardMemberCard = ({ name, title, image, bio }: BoardMemberCardProps) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-poppins font-bold text-xl mb-1">{name}</h3>
        <p className="text-brand font-medium mb-3">{title}</p>
        <p className="text-gray-600 line-clamp-3">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default BoardMemberCard;
