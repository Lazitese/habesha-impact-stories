
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../shared/SectionHeading";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Impact Stories" 
          subtitle="Real stories from the people whose lives have been changed by our initiatives"
        />
        
        <div className="px-4 sm:px-6 lg:px-8 mt-8">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-full">
                  <div className="flex flex-col md:flex-row items-center gap-8 p-1">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg h-96 relative">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-white/80">{story.title}</p>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-slide-in-right">
                      <blockquote className="text-xl italic text-gray-700 mb-6">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-8">
              <div className="flex space-x-4">
                <CarouselPrevious 
                  className="relative static rounded-full bg-brand text-white hover:bg-brand/90"
                />
                <CarouselNext 
                  className="relative static rounded-full bg-brand text-white hover:bg-brand/90"
                />
              </div>
              <Link to="/cases" className="text-brand hover:underline flex items-center">
                View All Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSlider;
