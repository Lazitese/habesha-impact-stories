
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutUsSnippet = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins relative inline-block">
              About Our Mission
              <span className="absolute h-1 bg-brand bottom-0 left-0 w-16"></span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              For over a decade, Habesha Impact has been working alongside Ethiopian communities
              to create lasting change through sustainable development initiatives. Our approach
              focuses on empowering local leaders and implementing projects that address critical
              needs in education, healthcare, and economic opportunity.
            </p>
            <p className="text-gray-700 mb-8">
              We believe that every person deserves access to clean water, quality education, and
              healthcare. By partnering with communities to identify their most pressing needs, we
              ensure that our projects create meaningful, sustainable impact that transforms lives
              for generations to come.
            </p>
            <Button asChild className="bg-brand hover:bg-brand/90 py-6 px-8">
              <Link to="/about" className="inline-flex items-center">
                Learn More About Us 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1531400158697-004a3a06fd3f?q=80&w=1000&auto=format&fit=crop" 
                alt="Our team working in Ethiopia" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnippet;
