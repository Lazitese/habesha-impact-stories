
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

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
    <section className="bg-gradient-to-br from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Impact Stories" 
          subtitle="Real stories from the people whose lives have been changed by our initiatives"
        />
        
        <div className="mt-12">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {stories.map((story, index) => (
                <CarouselItem key={story.id} className="md:basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row items-center gap-8 p-1"
                  >
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl h-96 relative group">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-white/80">{story.title}</p>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                      <svg className="h-10 w-10 text-brand mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <blockquote className="text-xl italic text-gray-700 mb-6">
                        "{story.quote}"
                      </blockquote>
                      <Link to={`/cases/${story.id}`} className="text-brand hover:underline flex items-center font-medium mt-6">
                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-8">
              <CarouselPrevious 
                className="relative static rounded-full bg-brand text-white hover:bg-brand/90 h-12 w-12"
              />
              <CarouselNext 
                className="relative static rounded-full bg-brand text-white hover:bg-brand/90 h-12 w-12"
              />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/cases" className="inline-flex items-center text-brand hover:underline font-medium">
            View All Impact Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSlider;
