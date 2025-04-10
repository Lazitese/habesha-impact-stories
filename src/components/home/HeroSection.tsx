import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImpactStoriesHero from "./ImpactStoriesHero";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518451260105-e3323c549997?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-24 flex flex-col justify-center items-start gap-8 max-w-5xl animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight relative"
        >
          Creating Sustainable Impact in Ethiopia
          <span className="block mt-3 h-1 w-24 bg-brand"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl"
        >
          We empower communities through sustainable development projects, education initiatives, and healthcare programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            asChild
            className="bg-brand hover:bg-brand/90 text-white px-8 py-5 text-lg font-medium rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300"
          >
            <Link to="/donate">Donate Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-5 text-lg font-medium rounded-2xl transition-transform hover:scale-105 duration-300"
          >
            <Link to="/projects">Our Projects</Link>
          </Button>
        </motion.div>
      </div>

      {/* Impact Stories as a Follow-Up Slide Section */}
      <div className="relative z-10 mt-24 md:mt-32">
        <ImpactStoriesHero />
      </div>
    </section>
  );
};

export default HeroSection;
