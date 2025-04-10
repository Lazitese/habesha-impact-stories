
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "../shared/ProjectCard";

const featuredProjects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing access to clean drinking water by building wells and water purification systems in rural communities.",
    category: "completed" as const,
    image: "https://images.unsplash.com/photo-1626264146977-0d5839bb5dcd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Building schools and providing educational resources to ensure every child has access to quality education.",
    category: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1613899889451-fa6699dfd94d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Healthcare Access Program",
    description: "Deploying mobile clinics and training healthcare workers to provide essential medical services in remote areas.",
    category: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1567427363205-9c3d5b657f7e?q=80&w=1000&auto=format&fit=crop"
  }
];

const ProjectsPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <SectionHeading 
            title="Our Projects" 
            subtitle="Discover our ongoing and completed initiatives across Ethiopia"
            className="mb-0"
          />
          <Link to="/projects" className="text-brand hover:underline flex items-center mt-4 md:mt-0">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
