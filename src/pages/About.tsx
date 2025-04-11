
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Handshake, Heart, Users, Globe, BarChart, Lightbulb, Award, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import BoardMemberCard from "@/components/shared/BoardMemberCard";
import { motion } from "framer-motion";

// Board members data
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
    name: "Tigist Mekonnen",
    title: "Director of Finance",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dawit Alemu",
    title: "Communications Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  }
];

// Core values data
const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of integrity in all our actions, ensuring transparency and accountability in all our operations.",
    icon: UserCheck
  },
  {
    title: "Empowerment",
    description: "We believe in empowering communities to become self-sufficient and develop sustainable solutions to their challenges.",
    icon: Lightbulb
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all our programs and initiatives, continuously learning and improving our approaches.",
    icon: Award
  },
  {
    title: "Collaboration",
    description: "We work closely with local communities, government agencies, and other organizations to maximize our impact.",
    icon: Handshake
  }
];

const About = () => {
  return (
        <MainLayout>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2000&auto=format&fit=crop"
                alt="About Us Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">About Us</h1>
                <p className="text-xl">
                  For over a decade, Habesha Impact has been working alongside Ethiopian communities
                  to create lasting change through sustainable development initiatives.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <SectionHeading title="What We Do" />
                  <p className="text-gray-700 mb-4">
                    Habesha Impact is dedicated to creating sustainable change in Ethiopia. We work in three key areas: Education, Healthcare, and Economic Empowerment.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our programs focus on improving access to quality education, providing essential healthcare services, and fostering economic growth within local communities.
                  </p>
                  <p className="text-gray-700">
                    By partnering with communities, government agencies, and other organizations, we ensure our work is effective, sustainable, and meets the needs of those we serve.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                      alt="What We Do"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>






      
      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-brand" />
              </div>
              <h2 className="text-2xl font-bold mb-4 font-poppins">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To empower Ethiopian communities through sustainable development projects, quality education, accessible healthcare, and economic opportunities that enable them to build better lives and brighter futures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work directly with local communities to identify needs, develop solutions, and implement programs that create lasting positive change.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-brand" />
              </div>
              <h2 className="text-2xl font-bold mb-4 font-poppins">Our Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A self-reliant Ethiopia where all communities have access to quality education, healthcare, clean water, and sustainable livelihoods, enabling them to reach their full potential and contribute to the country's development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where Ethiopian communities lead their own development initiatives and create lasting solutions to local challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Us */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <SectionHeading
                title="Working with Us"
                subtitle="Explore partnership opportunities and how you can contribute"
              />

              <p className="text-gray-700 text-lg leading-relaxed">
                Join hands with Habesha Impact and be a part of our mission to create a brighter future for Ethiopian communities. Whether you're an individual, a business, or another organization, there are many ways to get involved and contribute to sustainable development in Ethiopia.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1610001900067-a84f375b434e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Working with Us" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Impact" 
            subtitle="Making a difference in Ethiopian communities through sustainable initiatives"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">50,000+</h3>
              <p className="text-gray-600">People Impacted</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">120+</h3>
              <p className="text-gray-600">Community Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">15+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and decision-making"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-brand"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Board Members" 
            subtitle="Meet the dedicated team leading our organization"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {boardMembers.map((member, index) => (
              <BoardMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or partnerships, there are many ways you can help us create lasting change in Ethiopia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-brand hover:bg-gray-100 py-6 px-8">
              <Link to="/donate">Make a Donation</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 py-6 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
