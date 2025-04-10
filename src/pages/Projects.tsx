
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";

// Sample projects data
const allProjects = [
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
  },
  {
    id: 4,
    title: "Agricultural Development",
    description: "Implementing sustainable farming techniques and providing tools to increase crop yields and food security.",
    category: "completed" as const,
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Women's Empowerment",
    description: "Supporting women with skills training, microfinance, and leadership development to foster economic independence.",
    category: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Youth Leadership Camp",
    description: "Annual camps that develop leadership skills, environmental awareness, and community service among Ethiopian youth.",
    category: "completed" as const,
    image: "https://images.unsplash.com/photo-1486047200922-84998b7e62c1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Technology Education",
    description: "Establishing computer labs and providing tech skills training to prepare Ethiopian youth for the digital economy.",
    category: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1673736600889-c7e407dd8c1a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Community Library Initiative",
    description: "Creating local libraries with educational resources to promote literacy and lifelong learning in communities.",
    category: "completed" as const,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Maternal Health Program",
    description: "Supporting maternal and child health through prenatal care, training for midwives, and community education.",
    category: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop"
  }
];

type FilterCategory = "all" | "completed" | "ongoing";

const Projects = () => {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2000&auto=format&fit=crop"
            alt="Projects Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Our Projects</h1>
            <p className="text-xl">
              Discover the initiatives that are making a real difference in communities across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="All Projects" 
            subtitle="Browse our completed and ongoing initiatives"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-brand hover:bg-brand/90" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              Completed
            </Button>
            <Button
              variant={filter === "ongoing" ? "default" : "outline"}
              onClick={() => setFilter("ongoing")}
              className={filter === "ongoing" ? "bg-amber-500 hover:bg-amber-600" : ""}
            >
              Ongoing
            </Button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600">
                There are currently no projects in this category. Please check back later or view another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
