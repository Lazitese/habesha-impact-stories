
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample project data
const projects = [
  {
    id: "1",
    title: "Clean Water Initiative",
    category: "completed" as const,
    location: "Amhara Region, Ethiopia",
    startDate: "January 2021",
    endDate: "December 2022",
    beneficiaries: "5,000+ residents",
    description: "The Clean Water Initiative aimed to address the critical shortage of clean water in rural communities of the Amhara Region. Many residents had to walk several kilometers each day to collect water from unsafe sources, leading to waterborne diseases and limiting time for education and economic activities.",
    goals: [
      "Construct 10 deep wells across the region",
      "Install water purification systems in each community",
      "Train local technicians to maintain the water systems",
      "Educate communities on water conservation and hygiene practices"
    ],
    impact: "The project has dramatically improved health outcomes in the target communities, with a 65% reduction in waterborne diseases in the first year after implementation. Children, particularly girls, now have more time to attend school instead of collecting water. Local committees have been established to maintain the systems, ensuring long-term sustainability.",
    challenges: "We faced challenges with difficult terrain for drilling and initially low community engagement. Through persistent community outreach and adapting our technical approaches, we overcame these obstacles.",
    images: [
      "https://images.unsplash.com/photo-1626264146977-0d5839bb5dcd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469159604762-91202891c492?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528302570631-9123de048188?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?q=80&w=1000&auto=format&fit=crop"
    ]
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

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About the Project</h2>
              <p className="text-gray-600 mb-8">{project.description}</p>
              
              <h3 className="text-2xl font-bold mb-4">Project Goals</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                {project.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-600 mb-8">{project.impact}</p>
              
              <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
              <p className="text-gray-600 mb-8">{project.challenges}</p>
              
              {/* Image Gallery */}
              <h3 className="text-2xl font-bold mb-4">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md h-64">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar - Right Side */}
            <div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-brand mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Timeline</h4>
                      <p className="text-gray-600">
                        {project.startDate} - {project.endDate || "Present"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-brand mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Beneficiaries</h4>
                      <p className="text-gray-600">{project.beneficiaries}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-brand p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Support Our Work</h3>
                <p className="mb-4">
                  Your contribution helps us continue projects like this and expand our impact across Ethiopia.
                </p>
                <Button asChild className="w-full bg-white text-brand hover:bg-gray-100">
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
