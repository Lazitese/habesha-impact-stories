
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import ArtCard from "@/components/shared/ArtCard";
import { Button } from "@/components/ui/button";

// Sample artworks data
const allArtworks = [
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
  },
  {
    id: 4,
    title: "Lalibela Churches",
    artist: "Tigist Haile",
    price: 1450,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1578927648424-c7500844a2fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Omo Valley Portraits",
    artist: "Dawit Kebede",
    price: 1800,
    status: "sold" as const,
    image: "https://images.unsplash.com/photo-1532154984646-49073630e699?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Addis Ababa Cityscape",
    artist: "Hiwot Terefe",
    price: 1050,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1605291813723-3bb53b2fc9fb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Simien Mountains",
    artist: "Solomon Gizaw",
    price: 920,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Harar Old Town",
    artist: "Rahel Alemu",
    price: 1150,
    status: "sold" as const,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Blue Nile Falls",
    artist: "Bereket Tadesse",
    price: 1350,
    status: "available" as const,
    image: "https://images.unsplash.com/photo-1584553421349-3557471bed79?q=80&w=1000&auto=format&fit=crop"
  }
];

type FilterStatus = "all" | "available" | "sold";

const Gallery = () => {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredArtworks = filter === "all" 
    ? allArtworks 
    : allArtworks.filter(artwork => artwork.status === filter);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2000&auto=format&fit=crop"
            alt="Art Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Art Gallery</h1>
            <p className="text-xl">
              Support our cause by purchasing beautiful artwork from talented Ethiopian artists.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Artwork Collection" 
            subtitle="Each purchase supports both the artist and our community initiatives"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-brand hover:bg-brand/90" : ""}
            >
              All Artwork
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
              className={filter === "available" ? "bg-brand hover:bg-brand/90" : ""}
            >
              Available
            </Button>
            <Button
              variant={filter === "sold" ? "default" : "outline"}
              onClick={() => setFilter("sold")}
              className={filter === "sold" ? "bg-gray-500 hover:bg-gray-600" : ""}
            >
              Sold
            </Button>
          </div>
          
          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtCard key={artwork.id} {...artwork} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No artwork found</h3>
              <p className="text-gray-600">
                There are currently no artworks in this category. Please check back later or view another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About the Art Program */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="About Our Art Program" 
                subtitle="Supporting Ethiopian artists while funding our mission"
              />
              <p className="text-gray-600 mb-4">
                Our Art Gallery program serves a dual purpose: it provides a platform for talented Ethiopian artists to showcase their work to a global audience, while generating funds for our community development projects.
              </p>
              <p className="text-gray-600 mb-4">
                We work with artists from diverse backgrounds and regions of Ethiopia, representing the rich cultural heritage and contemporary creativity of the country. Each piece tells a unique story and provides a glimpse into Ethiopian culture, traditions, and landscapes.
              </p>
              <p className="text-gray-600">
                When you purchase artwork from our gallery, 60% of the proceeds go directly to the artist, while 40% supports our community projects in education, healthcare, and clean water access. It's a sustainable way to collect beautiful art while making a meaningful impact.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?q=80&w=1000&auto=format&fit=crop" 
                alt="Ethiopian Artist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Gallery;
