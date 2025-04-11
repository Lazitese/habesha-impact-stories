
import SectionHeading from "../shared/SectionHeading";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const boardMembers = [
  {
    name: "Dr. Hirut Tadesse",
    title: "Chairperson",
    image: "https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Samuel Bekele",
    title: "Executive Director",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Meron Haile",
    title: "Director of Programs",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dr. Yonas Asfaw",
    title: "Medical Director",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Abeba Mulugeta",
    title: "Finance Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  }
];

const BoardMembers = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Leadership Team" 
          subtitle="Meet the dedicated professionals guiding our organization"
          centered
        />
        
        <div className="mt-12">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {boardMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-white/80">{member.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
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

export default BoardMembers;
