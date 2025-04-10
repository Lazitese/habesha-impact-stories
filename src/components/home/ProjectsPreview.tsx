
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "../shared/ProjectCard";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
        
        <div className="px-4 sm:px-6 lg:px-8">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious 
                className="relative static rounded-full bg-brand text-white hover:bg-brand/90"
              />
              <CarouselNext 
                className="relative static rounded-full bg-brand text-white hover:bg-brand/90"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
