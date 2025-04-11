
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample project data (updated to match new structure)
const projects = [
  {
    id: "1",
    title: "Clean Water Initiative",
    category: "completed" as const,
    shortDescription: "Providing access to clean drinking water in rural communities.",
    fullDescription: "The Clean Water Initiative aimed to address the critical shortage of clean water in rural communities of the Amhara Region. Many residents had to walk several kilometers each day to collect water from unsafe sources, leading to waterborne diseases and limiting time for education and economic activities.\n\nFocus areas included constructing 10 deep wells across the region, installing water purification systems in each community, training local technicians to maintain the water systems, and educating communities on water conservation and hygiene practices.\n\nThe project has dramatically improved health outcomes in the target communities, with a 65% reduction in waterborne diseases in the first year after implementation. Children, particularly girls, now have more time to attend school instead of collecting water. Local committees have been established to maintain the systems, ensuring long-term sustainability.\n\nWe faced challenges with difficult terrain for drilling and initially low community engagement. Through persistent community outreach and adapting our technical approaches, we overcame these obstacles.",
    images: [
      "https://images.unsplash.com/photo-1626264146977-0d5839bb5dcd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469159604762-91202891c492?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528302570631-9123de048188?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?q=80&w=1000&auto=format&fit=crop"
    ],
    mainImageIndex: 0,
    videoUrl: "https://www.youtube.com/embed/XqZsoesa55w"
  },
  // More projects would be defined here
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project that matches the id
  const project = projects.find(p => p.id === id);
  
  // If project not found, show an error message
  if (!project) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Split description into paragraphs
  const paragraphs = project.fullDescription.split('\n\n');
  
  // Get main image
  const mainImage = project.images[project.mainImageIndex || 0];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <Link to="/projects" className="inline-flex items-center text-white hover:text-brand mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">{project.title}</h1>
            <Badge 
              className={`${
                project.category === "completed" ? "bg-green-500" : "bg-amber-500"
              } text-white`}
            >
              {project.category === "completed" ? "Completed" : "Ongoing"}
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-poppins relative inline-block">
              About the Project
              <span className="absolute h-1 bg-brand bottom-0 left-0 w-16"></span>
            </h2>
            
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">{paragraph}</p>
            ))}
            
            {/* Video */}
            {project.videoUrl && (
              <div className="my-10">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Project Video</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src={project.videoUrl} 
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Image Gallery */}
            <div className="my-10">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md h-64 transition-transform hover:scale-105 duration-300">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Button asChild className="bg-brand hover:bg-brand/90 text-white px-8 py-6 text-lg">
                <Link to="/donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
