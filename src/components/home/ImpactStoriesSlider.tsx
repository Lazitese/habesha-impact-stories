
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../shared/SectionHeading";

interface Story {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Abebe Kebede",
    title: "Clean Water Project Beneficiary",
    quote: "Before the well was built, I had to walk 5 kilometers each day to collect water. Now I can attend school regularly and have time to study.",
    image: "https://images.unsplash.com/photo-1583608564476-85aceb0e98b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Tigist Haile",
    title: "Education Program Graduate",
    quote: "Thanks to the scholarship program, I graduated from university with a degree in engineering. Now I'm helping build sustainable infrastructure in my community.",
    image: "https://images.unsplash.com/photo-1587395651141-8cbb230efcff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dawit Yohannes",
    title: "Healthcare Initiative Participant",
    quote: "The mobile clinic saved my daughter's life when she had severe malaria. Now I volunteer to help other families access healthcare in remote villages.",
    image: "https://images.unsplash.com/photo-1537655460284-e7a32f68a5f3?q=80&w=1000&auto=format&fit=crop"
  }
];

const ImpactStoriesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentStory = stories[currentIndex];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Impact Stories" 
          subtitle="Real stories from the people whose lives have been changed by our initiatives"
        />
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          {/* Image Side */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg h-96 relative">
            <img 
              src={currentStory.image} 
              alt={currentStory.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">{currentStory.name}</h3>
              <p className="text-white/80">{currentStory.title}</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-slide-in-right">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "{currentStory.quote}"
            </blockquote>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={goToPrev}
                  aria-label="Previous story"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={goToNext}
                  aria-label="Next story"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <Link to="/cases" className="text-brand hover:underline flex items-center">
                View All Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSlider;
