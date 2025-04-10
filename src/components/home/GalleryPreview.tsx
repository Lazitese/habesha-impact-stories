
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import ArtCard from "../shared/ArtCard";

const featuredArtworks = [
  {
    id: 1,
    title: "Ethiopian Highlands",
    artist: "Alem Teklu",
    price: 850,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1600347992414-7939778c182c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Coffee Ceremony",
    artist: "Meskerem Assefa",
    price: 1200,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1600340581437-0b16ae63838d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Timket Festival",
    artist: "Yonas Desta",
    price: 950,
    status: "sold" as const,
    image: "https://images.unsplash.com/photo-1595820919938-95c112f675a5?q=80&w=1000&auto=format&fit=crop"
  }
];

const GalleryPreview = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <SectionHeading 
            title="Art Gallery" 
            subtitle="Beautiful artwork by Ethiopian artists supporting our cause"
            className="mb-0"
          />
          <Link to="/gallery" className="text-brand hover:underline flex items-center mt-4 md:mt-0">
            Explore Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <ArtCard key={artwork.id} {...artwork} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
