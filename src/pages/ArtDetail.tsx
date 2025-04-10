
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Palette, Info, User, DollarSign } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Sample artworks data
const artworks = [
  {
    id: "1",
    title: "Ethiopian Highlands",
    artist: "Alem Teklu",
    price: 850,
    medium: "Acrylic on Canvas",
    status: "available" as const,
    description: "This vibrant painting captures the breathtaking landscapes of the Ethiopian Highlands, with their rolling hills, dramatic escarpments, and ever-changing light. The artist uses bold colors and dynamic brushwork to convey the grandeur and spiritual significance of these ancient mountains that have shaped Ethiopian culture for millennia.\n\nThe highlands are depicted at dawn, with the golden light breaking over the distant peaks and illuminating the terraced fields that sustain communities in these regions. Small villages can be seen nestled in the valleys, representing the deep connection between the land and its people.\n\nAlem Teklu is known for his expressive landscapes that celebrate Ethiopia's natural beauty. This piece is part of his 'Sacred Lands' series, exploring the country's diverse topography and its importance to national identity.",
    artistBio: "Alem Teklu is a renowned Ethiopian landscape painter based in Addis Ababa. Born in the highlands of Amhara Region, he developed a deep appreciation for nature from an early age. After studying at the Alle School of Fine Arts, he dedicated his career to capturing Ethiopia's diverse landscapes.\n\nHis work has been exhibited in galleries across East Africa and Europe, earning recognition for his distinctive style that blends traditional Ethiopian artistic elements with contemporary techniques. Through his art, Alem seeks to document Ethiopia's natural beauty while raising awareness about environmental conservation.",
    artistPhoto: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1000&auto=format&fit=crop",
    artistContact: {
      email: "alem.teklu@example.com",
      phone: "+251 91 234 5678"
    },
    images: [
      "https://images.unsplash.com/photo-1600347992414-7939778c182c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609607285694-d8375c061b7c?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // More artworks would be defined here
];

const ArtDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  
  // Find the artwork that matches the id
  const artwork = artworks.find(a => a.id === id);
  
  // If artwork not found, show an error message
  if (!artwork) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Artwork Not Found</h1>
          <p className="mb-6">The artwork you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/gallery">View All Artwork</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Split description and bio into paragraphs
  const descriptionParagraphs = artwork.description.split('\n\n');
  const bioParagraphs = artwork.artistBio.split('\n\n');

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link to="/gallery" className="inline-flex items-center text-gray-600 hover:text-brand mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Side - Artwork Images */}
            <div className="lg:col-span-2">
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg bg-white p-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={artwork.images[0]}
                    alt={artwork.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Additional Images */}
              {artwork.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {artwork.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white p-2">
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${artwork.title} - View ${index + 2}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right Side - Artwork Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Badge 
                  className={`mb-4 ${artwork.status === "available" ? "bg-brand" : "bg-gray-500"} text-white px-3 py-1`}
                >
                  {artwork.status === "available" ? "Available for Purchase" : "Sold"}
                </Badge>
                
                <h1 className="text-3xl font-bold mb-2 font-poppins">{artwork.title}</h1>
                <div className="flex items-center text-xl text-gray-600 mb-6">
                  <Palette className="h-5 w-5 mr-2 text-brand" />
                  <p>by {artwork.artist}</p>
                </div>
                
                <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-brand mr-2" />
                    <span className="text-2xl font-bold">${artwork.price.toLocaleString()}</span>
                  </div>
                  <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm">{artwork.medium}</span>
                </div>
                
                {artwork.status === "available" && (
                  <Button 
                    className="w-full bg-brand hover:bg-brand/90 py-6 font-medium text-lg"
                    onClick={() => setIsPurchaseDialogOpen(true)}
                  >
                    Purchase Artwork
                  </Button>
                )}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 text-brand mr-2" />
                  <h2 className="text-xl font-bold font-poppins">About this Artwork</h2>
                </div>
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-brand mr-2" />
                  <h2 className="text-xl font-bold font-poppins">About the Artist</h2>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                  {artwork.artistPhoto && (
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md flex-shrink-0 border-4 border-white">
                      <img
                        src={artwork.artistPhoto}
                        alt={artwork.artist}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div>
                    {bioParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                {artwork.artistContact && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-2">Artist Contact</h3>
                    <div className="space-y-3">
                      {artwork.artistContact.email && (
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-brand mr-3" />
                          <a href={`mailto:${artwork.artistContact.email}`} className="text-gray-600 hover:text-brand transition-colors">
                            {artwork.artistContact.email}
                          </a>
                        </div>
                      )}
                      {artwork.artistContact.phone && (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-brand mr-3" />
                          <a href={`tel:${artwork.artistContact.phone}`} className="text-gray-600 hover:text-brand transition-colors">
                            {artwork.artistContact.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Purchase Dialog */}
      <Dialog open={isPurchaseDialogOpen} onOpenChange={setIsPurchaseDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Purchase "{artwork.title}"</DialogTitle>
            <DialogDescription>
              Fill in your details to inquire about purchasing this artwork.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" type="tel" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Textarea id="message" className="col-span-3" placeholder="Any specific questions or requests?" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-brand hover:bg-brand/90">
              Send Inquiry
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default ArtDetail;
