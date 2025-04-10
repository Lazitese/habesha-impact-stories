
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImpactStoriesHero from "./ImpactStoriesHero";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518451260105-e3323c549997?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins relative">
            Creating Sustainable Impact in Ethiopia
            <span className="absolute -bottom-3 left-0 h-1 w-24 bg-brand"></span>
          </h1>
          <p className="text-xl text-white mb-8">
            We empower communities through sustainable development projects, 
            education initiatives, and healthcare programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-brand hover:bg-brand/90 text-white px-8 py-6 text-lg transition-transform hover:scale-105 duration-300">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-transform hover:scale-105 duration-300">
              <Link to="/projects">Our Projects</Link>
            </Button>
          </div>
        </div>
        
        {/* Impact Stories Slider */}
        <ImpactStoriesHero />
      </div>
    </section>
  );
};

export default HeroSection;
