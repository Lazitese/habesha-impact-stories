
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

// Sample cases data
const cases = [
  {
    id: "1",
    title: "Abebe's New Beginning",
    name: "Abebe Kebede",
    age: 12,
    location: "Amhara Region, Ethiopia",
    summary: "How access to clean water transformed Abebe's life and his entire village in rural Ethiopia.",
    story: "Abebe Kebede, a 12-year-old boy from a small village in the Amhara Region, used to spend over three hours each day walking to collect water for his family. The closest water source was a river several kilometers away, and the water was often contaminated, causing frequent illnesses in his family and community.\n\nWhen our Clean Water Initiative reached Abebe's village in 2021, everything changed. A new well was constructed at the center of the village, providing clean, safe drinking water to the entire community. For Abebe, this meant no more long walks to fetch water, no more missed school days, and significantly improved health.\n\n'Before the well, I was sick often and couldn't attend school regularly,' Abebe says. 'Now I have time to study and play, and my younger siblings aren't getting sick as much.'\n\nAbebe's academic performance has improved dramatically now that he can attend school consistently. He dreams of becoming a doctor so he can help others in his community, a dream that seemed impossible before the water project.\n\nBeyond the immediate health benefits, the well has transformed the entire village. Women and children, who traditionally bear the burden of water collection, now have time for education, economic activities, and community engagement. A local committee, including Abebe's father, has been trained to maintain the well, ensuring its sustainability for years to come.\n\nAbebe's story is just one example of how access to clean water can transform lives. It's not just about quenching thirst—it's about creating opportunities, improving health, and building stronger communities.",
    impact: [
      "Abebe now attends school regularly with a 95% attendance rate",
      "His family's health has improved significantly with fewer waterborne illnesses",
      "His mother has started a small vegetable garden with the time saved from water collection",
      "The entire village has seen a 65% reduction in water-related diseases"
    ],
    images: [
      "https://images.unsplash.com/photo-1583608564476-85aceb0e98b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543194627-28dae04763e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851729-fa2e83330452?q=80&w=1000&auto=format&fit=crop"
    ],
    relatedProject: {
      id: 1,
      title: "Clean Water Initiative"
    }
  },
  // More cases would be defined here
];

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the case that matches the id
  const caseItem = cases.find(c => c.id === id);
  
  // If case not found, show an error message
  if (!caseItem) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <p className="mb-6">The story you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/cases">View All Stories</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Split story into paragraphs
  const paragraphs = caseItem.story.split('\n\n');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={caseItem.images[0]}
            alt={caseItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <Link to="/cases" className="inline-flex items-center text-white hover:text-brand mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">{caseItem.title}</h1>
            <p className="text-xl">{caseItem.summary}</p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
              {/* Intro */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">The Story</h2>
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Impact Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Impact</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {caseItem.impact.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              {/* Image Gallery */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseItem.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md h-64">
                      <img
                        src={image}
                        alt={`${caseItem.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mt-8">
                <span className="font-semibold">Share this story:</span>
                <button className="text-gray-600 hover:text-brand transition-colors" aria-label="Share on Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1.02-1.1h3.2V.26h-4.4C10.4.26 9.5 3.3 9.5 6.76v.7h-3v4h3v12h5v-12h3.4l.5-4z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-brand transition-colors" aria-label="Share on Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-brand transition-colors" aria-label="Share by Email">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-brand transition-colors" aria-label="Copy Link">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Sidebar - Right Side */}
            <div>
              {/* Person Info Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">About {caseItem.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Age</h4>
                    <p className="text-gray-600">{caseItem.age} years old</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">{caseItem.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Related Project */}
              {caseItem.relatedProject && (
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4">Related Project</h3>
                  <p className="text-gray-600 mb-4">
                    This story is connected to our {caseItem.relatedProject.title} project.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/projects/${caseItem.relatedProject.id}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              )}
              
              {/* Call to Action */}
              <div className="bg-brand p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Help Create More Stories Like This</h3>
                <p className="mb-4">
                  Your support can help more people like {caseItem.name} transform their lives.
                </p>
                <Button asChild className="w-full bg-white text-brand hover:bg-gray-100">
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseDetail;
