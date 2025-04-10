
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import BoardMemberCard from "@/components/shared/BoardMemberCard";

const boardMembers = [
  {
    name: "Dr. Hirut Tadesse",
    title: "Chairperson",
    image: "https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=1000&auto=format&fit=crop",
    bio: "Dr. Hirut brings over 20 years of experience in international development and has led numerous successful initiatives across Africa."
  },
  {
    name: "Samuel Bekele",
    title: "Executive Director",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    bio: "With a background in social entrepreneurship, Samuel has dedicated his career to creating sustainable solutions for communities in Ethiopia."
  },
  {
    name: "Meron Haile",
    title: "Director of Programs",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1000&auto=format&fit=crop",
    bio: "Meron oversees all programs and ensures they align with our mission to create lasting impact in Ethiopian communities."
  },
  {
    name: "Dr. Yonas Asfaw",
    title: "Medical Director",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1000&auto=format&fit=crop",
    bio: "Dr. Yonas leads our healthcare initiatives and has pioneered innovative approaches to rural healthcare delivery."
  },
  {
    name: "Bethlehem Teka",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1000&auto=format&fit=crop",
    bio: "Bethlehem ensures financial transparency and sustainability, managing our resources to maximize impact on communities."
  },
  {
    name: "Eyob Girma",
    title: "Community Relations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "Eyob builds and maintains relationships with communities, ensuring our projects are community-driven and relevant."
  }
];

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1608044526307-149d1240bd02?q=80&w=2000&auto=format&fit=crop"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">About Us</h1>
            <p className="text-xl">
              Learn about our mission, vision, and the passionate team behind Habesha Impact Stories.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <SectionHeading 
                title="Our Story" 
                subtitle="How we started and where we're going"
              />
              <p className="text-gray-600 mb-4">
                Habesha Impact Stories was founded in 2010 by a group of Ethiopian professionals who recognized the need for community-driven, sustainable development initiatives. What began as a small volunteer effort has grown into a robust NGO with multiple programs across Ethiopia.
              </p>
              <p className="text-gray-600 mb-4">
                Our organization grew from a simple belief: that lasting change comes from within communities, and that Ethiopians must be the leaders of their own development. This philosophy guides every project we undertake.
              </p>
              <p className="text-gray-600">
                Today, we work in partnership with communities, governments, and other organizations to address critical needs in education, healthcare, clean water access, and economic development.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1604881991105-a6fff175abd1?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Mission & Vision" 
            subtitle="Our guiding principles and goals"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand">Our Mission</h3>
              <p className="text-gray-600">
                To empower Ethiopian communities through sustainable, locally-led initiatives that improve access to education, healthcare, clean water, and economic opportunities, while preserving and celebrating Ethiopian culture and heritage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand">Our Vision</h3>
              <p className="text-gray-600">
                A Ethiopia where all communities are self-sufficient, empowered, and have equal access to resources and opportunities for growth and development. We envision a nation where every individual can achieve their potential and contribute to a thriving society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Values" 
            subtitle="The principles that guide our work every day"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                We believe that sustainable change comes from within communities. All our projects are designed and implemented with active community participation and leadership.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We are committed to transparency in all our operations, from financial management to project implementation and reporting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Respect</h3>
              <p className="text-gray-600">
                We respect the dignity, culture, and traditions of all people we work with, recognizing and valuing their knowledge, expertise, and aspirations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Our focus is on creating lasting, sustainable impact. We design projects that communities can maintain and develop long after our direct involvement ends.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovative approaches and technologies that can help address challenges in resource-constrained settings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand">
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships. We work collaboratively with communities, governments, and other organizations to leverage resources and maximize impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Board Members" 
            subtitle="Meet the dedicated team leading our organization"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <BoardMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizational History */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our History" 
            subtitle="The journey that has shaped who we are today"
          />
          
          <div className="space-y-12 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-brand text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">2010</h3>
                  <p className="text-white/90">Foundation</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-3">Humble Beginnings</h4>
                <p className="text-gray-600">
                  Habesha Impact Stories was founded by a group of Ethiopian professionals who wanted to make a difference in their home communities. The organization began with small-scale clean water projects in rural areas.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-brand text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">2013</h3>
                  <p className="text-white/90">Expansion</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-3">Growing Our Impact</h4>
                <p className="text-gray-600">
                  After the success of our initial projects, we expanded our programs to include education initiatives, building our first school in the Amhara region and launching scholarship programs for promising students.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-brand text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">2016</h3>
                  <p className="text-white/90">Healthcare Focus</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-3">Addressing Healthcare Needs</h4>
                <p className="text-gray-600">
                  Recognizing the critical need for healthcare services, we established our healthcare program, starting with mobile clinics that could reach remote villages and provide essential care.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-brand text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">2019</h3>
                  <p className="text-white/90">Art Initiative</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-3">Supporting Ethiopian Artists</h4>
                <p className="text-gray-600">
                  We launched our Art Gallery initiative to showcase Ethiopian art and culture while providing economic opportunities for local artists. The proceeds from art sales help fund our community projects.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-brand text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">2023</h3>
                  <p className="text-white/90">Present Day</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-3">Expanding Our Reach</h4>
                <p className="text-gray-600">
                  Today, we operate in multiple regions across Ethiopia, with a growing team of dedicated staff and volunteers. Our projects have impacted thousands of lives, and we continue to expand our reach while deepening our impact in existing communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
