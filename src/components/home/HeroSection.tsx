
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Sample stories data
const stories = [
  {
    id: 1,
    name: "Abebe Kebede",
    title: "Clean Water Project Beneficiary",
    quote: "Before the well was built, I had to walk 5 kilometers each day to collect water. Now I can attend school regularly.",
    image: "https://images.unsplash.com/photo-1583608564476-85aceb0e98b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Tigist Haile",
    title: "Education Program Graduate",
    quote: "Thanks to the scholarship program, I graduated from university. Now I'm helping build sustainable infrastructure.",
    image: "https://images.unsplash.com/photo-1587395651141-8cbb230efcff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dawit Yohannes",
    title: "Healthcare Initiative Participant",
    quote: "The mobile clinic saved my daughter's life when she had severe malaria. Now I volunteer to help other families.",
    image: "https://images.unsplash.com/photo-1537655460284-e7a32f68a5f3?q=80&w=1000&auto=format&fit=crop"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const currentStory = stories[currentIndex];

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

      {/* Impact Stories as a Slidable Section */}
      <div className="relative z-10 mt-12 md:mt-20 mb-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="flex justify-between items-center p-4 border-b border-white/20">
                <h3 className="text-xl font-bold text-white">Impact Stories</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={goToPrev}
                    className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand transition-colors text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous story</span>
                  </button>
                  <button 
                    onClick={goToNext}
                    className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand transition-colors text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next story</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row p-0">
                <div className="w-full md:w-1/2 h-64">
                  <img 
                    src={currentStory.image} 
                    alt={currentStory.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-black/40 to-brand/10">
                  <div>
                    <p className="text-white/90 text-lg italic mb-4">"{currentStory.quote}"</p>
                    <div className="mt-4">
                      <h4 className="font-bold text-white">{currentStory.name}</h4>
                      <p className="text-white/80 text-sm">{currentStory.title}</p>
                    </div>
                  </div>
                  <Link 
                    to="/cases" 
                    className="text-brand hover:underline text-sm font-medium self-end mt-4"
                  >
                    View All Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
