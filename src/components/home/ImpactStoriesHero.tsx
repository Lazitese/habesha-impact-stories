
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      <Card className="overflow-hidden backdrop-blur-md border-l-4 border-brand shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={currentStory.image} 
            alt={currentStory.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
          <div className="absolute bottom-3 left-3 flex items-center">
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center mr-2">
              <Quote className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">Impact Story</span>
          </div>
        </div>
        
        <CardContent className="p-4 bg-white/20 backdrop-blur-md">
          <blockquote className="italic text-white mb-3 text-shadow-sm line-clamp-2 text-sm">
            "{currentStory.quote}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">{currentStory.name}</p>
              <p className="text-white/80 text-xs">{currentStory.title}</p>
            </div>
            <div className="flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={goToPrev}
                className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous story</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={goToNext}
                className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next story</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactStoriesHero;
