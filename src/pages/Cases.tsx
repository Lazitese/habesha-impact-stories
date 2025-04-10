
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import CaseCard from "@/components/shared/CaseCard";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Sample cases data
const allCases = [
  {
    id: 1,
    title: "Abebe's New Beginning",
    summary: "How access to clean water transformed Abebe's life and his entire village in rural Ethiopia.",
    image: "https://images.unsplash.com/photo-1583608564476-85aceb0e98b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tigist's Journey to Education",
    summary: "From walking 10km to school to becoming a university graduate, Tigist's story shows the power of perseverance.",
    image: "https://images.unsplash.com/photo-1587395651141-8cbb230efcff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dawit's Healthcare Miracle",
    summary: "When healthcare services finally reached his remote village, Dawit's daughter received life-saving treatment.",
    image: "https://images.unsplash.com/photo-1537655460284-e7a32f68a5f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Meron's Agricultural Success",
    summary: "By implementing sustainable farming techniques, Meron transformed her small plot into a thriving agricultural enterprise.",
    image: "https://images.unsplash.com/photo-1528825798247-28691e0119a3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Selam's Artisan Journey",
    summary: "Traditional crafts were dying out until Selam led an initiative to revive and market local artisanal products.",
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Yonas's Leadership Path",
    summary: "From a shy boy to a community leader, Yonas's transformation shows how youth empowerment changes communities.",
    image: "https://images.unsplash.com/photo-1517422661954-4d870494965b?q=80&w=1000&auto=format&fit=crop"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "The clean water well in our village has changed everything. Our children are healthier, and the women don't have to walk for hours to fetch water anymore.",
    name: "Fatima Negash",
    title: "Village Elder, Tigray Region"
  },
  {
    id: 2,
    quote: "I was the first in my family to finish high school, and now I'm in university studying to be a doctor. None of this would have been possible without the scholarship program.",
    name: "Biruk Tadesse",
    title: "Medical Student, Addis Ababa"
  },
  {
    id: 3,
    quote: "The training I received helped me start my own business. Now I can provide for my family and even employ three other women from my community.",
    name: "Hiwot Mekonnen",
    title: "Entrepreneur, Oromia Region"
  }
];

const Cases = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2000&auto=format&fit=crop"
            alt="Impact Stories Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Impact Stories</h1>
            <p className="text-xl">
              Real stories from individuals whose lives have been transformed through our programs and initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Personal Stories" 
            subtitle="Behind every project are real people with real stories of transformation"
          />
          
          {/* Stories Carousel */}
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {allCases.map((caseItem) => (
                  <CarouselItem key={caseItem.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <CaseCard {...caseItem} />
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

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Testimonials" 
            subtitle="Words from those we've served and our partners"
            centered
          />
          
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                        <div className="mb-4">
                          <svg className="h-8 w-8 text-brand" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 mb-6 italic flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center mt-auto">
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
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
    </MainLayout>
  );
};

export default Cases;
