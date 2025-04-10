
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-20 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570745859748-0a097f2bc843?q=80&w=2000&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Join Us in Creating a Better Future
          </h2>
          <p className="text-xl mb-10">
            There are many ways to contribute to our mission and make a real difference in the lives of Ethiopian communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="mb-4 text-white/80">
                Your financial support helps us implement vital projects and reach more communities.
              </p>
              <Button asChild className="w-full bg-brand hover:bg-brand/90">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="mb-4 text-white/80">
                Share your skills and time to directly support our projects in Ethiopia.
              </p>
              <Button asChild className="w-full bg-brand hover:bg-brand/90">
                <Link to="/contact?volunteer=true">Volunteer</Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="mb-4 text-white/80">
                Reach out to learn more about our work or discuss partnership opportunities.
              </p>
              <Button asChild className="w-full bg-brand hover:bg-brand/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
