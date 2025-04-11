
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins relative inline-block">
              Impact Stories
              <span className="absolute -bottom-2 left-0 h-1 bg-brand w-24"></span>
            </h1>
            <p className="text-xl text-white/90 mt-6">
              Real stories from individuals whose lives have been transformed through our programs and initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Personal Stories" 
            subtitle="Behind every project are real people with real stories of transformation"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {allCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/cases/${caseItem.id}`} className="group block h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-5 text-white">
                        <h3 className="font-bold text-xl">{caseItem.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 mb-4">{caseItem.summary}</p>
                      <span className="text-brand flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-1">
                        Read Story <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild className="bg-brand hover:bg-brand/90 px-8 py-6 text-white rounded-full">
              <Link to="/donate">Help Create More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cases;
