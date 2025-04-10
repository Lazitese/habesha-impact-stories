
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570745859748-0a097f2bc843?q=80&w=2000&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
            Join Us in Creating a Better Future
          </h2>
          <div className="h-1 w-24 bg-brand mx-auto mb-8"></div>
          <p className="text-xl mb-10 text-white/90">
            There are many ways to contribute to our mission and make a real difference in the lives of Ethiopian communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Donate</h3>
            <p className="mb-6 text-white/80 text-center">
              Your financial support helps us implement vital projects and reach more communities throughout Ethiopia.
            </p>
            <Button asChild className="w-full bg-brand hover:bg-brand/90 py-6 font-semibold text-lg">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Volunteer</h3>
            <p className="mb-6 text-white/80 text-center">
              Share your skills and time to directly support our projects in Ethiopia and make a hands-on difference.
            </p>
            <Button asChild className="w-full bg-brand hover:bg-brand/90 py-6 font-semibold text-lg">
              <Link to="/contact?volunteer=true">Volunteer</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>
            <p className="mb-6 text-white/80 text-center">
              Reach out to learn more about our work or discuss partnership opportunities to expand our impact.
            </p>
            <Button asChild className="w-full bg-brand hover:bg-brand/90 py-6 font-semibold text-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
