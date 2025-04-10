
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../shared/SectionHeading";

const AboutUsSnippet = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Our Mission" 
          subtitle="Working together to create lasting change in Ethiopian communities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To empower Ethiopian communities through sustainable development projects that 
              address critical needs in education, healthcare, and economic opportunity.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              A self-sufficient Ethiopia where all communities have access to quality education, 
              healthcare, and sustainable livelihoods to reach their full potential.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Impact</h3>
            <p className="text-gray-600 mb-4">
              Over the past decade, we've touched the lives of more than 50,000 Ethiopians
              through our various projects and community development initiatives.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild className="bg-brand hover:bg-brand/90 py-6 px-8">
            <Link to="/about" className="inline-flex items-center">
              Learn More About Us 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnippet;
