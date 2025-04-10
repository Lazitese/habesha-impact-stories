
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ImpactStoriesHero = () => {
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
    <div className="absolute right-0 bottom-16 md:bottom-32 max-w-md animate-slide-in-right z-10">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-l-lg border-l-4 border-brand shadow-xl">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">Impact Story</h3>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={goToPrev}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous story</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={goToNext}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next story</span>
            </Button>
          </div>
        </div>
        
        <blockquote className="italic text-white mb-4 text-shadow">
          "{currentStory.quote}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white">
            <img 
              src={currentStory.image} 
              alt={currentStory.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">{currentStory.name}</p>
            <p className="text-white/80 text-sm">{currentStory.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStoriesHero;
