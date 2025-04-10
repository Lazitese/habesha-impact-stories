
import SectionHeading from "../shared/SectionHeading";
import BoardMemberCard from "../shared/BoardMemberCard";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
  }
];

const BoardMembers = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Board Members" 
          subtitle="Meet the dedicated team leading our organization"
          centered
        />
        
        <div className="px-4 sm:px-6 lg:px-8 mt-12">
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
                  <div className="p-1">
                    <BoardMemberCard {...member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
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
