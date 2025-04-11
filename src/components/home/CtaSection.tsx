
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-20 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570745859748-0a097f2bc843?q=80&w=2000&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-lg">
              <HeartHandshake className="h-8 w-8 text-brand" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Join Us in Creating Change
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Your support helps us empower communities and transform lives across Ethiopia.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-brand hover:bg-white/90 px-8 py-5 text-lg font-medium rounded-full shadow-lg transition-all hover:scale-105 duration-300">
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand px-8 py-5 text-lg font-medium rounded-full transition-all hover:scale-105 duration-300">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
