
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import BoardMembers from "@/components/home/BoardMembers";
import CtaSection from "@/components/home/CtaSection";
import AboutUsSnippet from "@/components/home/AboutUsSnippet";
import ImpactStoriesSlider from "@/components/home/ImpactStoriesSlider";
import { Users, Handshake, BarChart } from "lucide-react";
import { motion } from "framer-motion";

// Our Impact section for the homepage
const ImpactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins relative inline-block">
            Our Impact
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-brand w-24"></span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Together with our partners and supporters, we've made a significant difference 
            in communities across Ethiopia over the past 15 years.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">50,000+</h3>
            <p className="text-gray-600">People Impacted</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">120+</h3>
            <p className="text-gray-600">Community Projects</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
              <BarChart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">15+</h3>
            <p className="text-gray-600">Years of Service</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutUsSnippet />
      <ImpactSection />
      <ProjectsPreview />
      <ImpactStoriesSlider />
      <GalleryPreview />
      <BoardMembers />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
