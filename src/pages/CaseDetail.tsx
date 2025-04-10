
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

// Sample cases data
const cases = [
  {
    id: "1",
    title: "Abebe's New Beginning",
    name: "Abebe Kebede",
    age: 12,
    location: "Amhara Region, Ethiopia",
    summary: "How access to clean water transformed Abebe's life and his entire village in rural Ethiopia.",
    story: "Abebe Kebede, a 12-year-old boy from a small village in the Amhara Region, used to spend over three hours each day walking to collect water for his family. The closest water source was a river several kilometers away, and the water was often contaminated, causing frequent illnesses in his family and community.\n\nWhen our Clean Water Initiative reached Abebe's village in 2021, everything changed. A new well was constructed at the center of the village, providing clean, safe drinking water to the entire community. For Abebe, this meant no more long walks to fetch water, no more missed school days, and significantly improved health.\n\n'Before the well, I was sick often and couldn't attend school regularly,' Abebe says. 'Now I have time to study and play, and my younger siblings aren't getting sick as much.'\n\nAbebe's academic performance has improved dramatically now that he can attend school consistently. He dreams of becoming a doctor so he can help others in his community, a dream that seemed impossible before the water project.\n\nBeyond the immediate health benefits, the well has transformed the entire village. Women and children, who traditionally bear the burden of water collection, now have time for education, economic activities, and community engagement. A local committee, including Abebe's father, has been trained to maintain the well, ensuring its sustainability for years to come.\n\nAbebe's story is just one example of how access to clean water can transform lives. It's not just about quenching thirst—it's about creating opportunities, improving health, and building stronger communities.",
    images: [
      "https://images.unsplash.com/photo-1583608564476-85aceb0e98b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543194627-28dae04763e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851729-fa2e83330452?q=80&w=1000&auto=format&fit=crop"
    ],
    videoUrl: "https://www.youtube.com/embed/XqZsoesa55w"
  },
  // More cases would be defined here
];

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the case that matches the id
  const caseItem = cases.find(c => c.id === id);
  
  // If case not found, show an error message
  if (!caseItem) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <p className="mb-6">The story you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/cases">View All Stories</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Split story into paragraphs
  const paragraphs = caseItem.story.split('\n\n');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={caseItem.images[0]}
            alt={caseItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <Link to="/cases" className="inline-flex items-center text-white hover:text-brand mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">{caseItem.title}</h1>
            <p className="text-xl">{caseItem.summary}</p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-poppins relative inline-block">
              The Story
              <span className="absolute h-1 bg-brand bottom-0 left-0 w-16"></span>
            </h2>
            
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">{paragraph}</p>
            ))}
            
            {/* Video */}
            {caseItem.videoUrl && (
              <div className="my-10">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Watch {caseItem.name}'s Story</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src={caseItem.videoUrl} 
                    title={`${caseItem.name}'s story video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Image Gallery */}
            <div className="my-10">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseItem.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md h-64 transition-transform hover:scale-105 duration-300">
                    <img
                      src={image}
                      alt={`${caseItem.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Button asChild className="bg-brand hover:bg-brand/90 text-white px-8 py-6 text-lg">
                <Link to="/donate">Help Create More Stories Like This</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseDetail;
