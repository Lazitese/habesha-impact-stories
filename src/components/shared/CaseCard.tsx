
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CaseCardProps {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const CaseCard = ({ id, title, summary, image }: CaseCardProps) => {
  return (
    <Link to={`/cases/${id}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="font-poppins font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{summary}</p>
          <div className="mt-4 text-brand font-medium">Read Story →</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseCard;
