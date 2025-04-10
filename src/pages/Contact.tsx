
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Users } from "lucide-react";

// Volunteer areas
const volunteerAreas = [
  { value: "education", label: "Education Programs" },
  { value: "healthcare", label: "Healthcare Initiatives" },
  { value: "water", label: "Clean Water Projects" },
  { value: "agriculture", label: "Agricultural Programs" },
  { value: "art", label: "Art & Cultural Activities" },
  { value: "administration", label: "Administrative Support" },
  { value: "fundraising", label: "Fundraising" },
  { value: "other", label: "Other" }
];

// Availability options
const availabilityOptions = [
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "evenings", label: "Evenings" },
  { value: "fulltime", label: "Full-time" },
  { value: "remote", label: "Remote Only" },
  { value: "flexible", label: "Flexible" }
];

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("contact");
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [volunteerFormData, setVolunteerFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    area: "education",
    availability: "flexible",
    why: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check URL parameters for volunteer flag
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("volunteer") === "true") {
      setActiveTab("volunteer");
    }
  }, [location]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVolunteerFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVolunteerSelectChange = (name: string, value: string) => {
    setVolunteerFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setIsSubmitting(false);
      
      // Reset form
      setContactFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Volunteer Application Received",
        description: "Thank you for your interest in volunteering! We'll contact you shortly.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setVolunteerFormData({
        fullName: "",
        email: "",
        phone: "",
        area: "education",
        availability: "flexible",
        why: ""
      });
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1471882543500-4b1827c01e35?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Get in Touch</h1>
            <p className="text-xl">
              We'd love to hear from you. Reach out with questions, feedback, or to explore ways to get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <div>
              <SectionHeading 
                title="Reach Out to Us" 
                subtitle="We're here to answer your questions and hear your feedback"
              />
              
              <Tabs defaultValue="contact" value={activeTab} onValueChange={setActiveTab} className="mt-8">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="contact" className="text-base">Contact Us</TabsTrigger>
                  <TabsTrigger value="volunteer" className="text-base">Volunteer</TabsTrigger>
                </TabsList>
                
                {/* Contact Form */}
                <TabsContent value="contact">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={contactFormData.name}
                          onChange={handleContactChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactFormData.email}
                          onChange={handleContactChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={contactFormData.subject}
                          onChange={handleContactChange}
                          placeholder="Subject of your message"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={contactFormData.message}
                          onChange={handleContactChange}
                          placeholder="Your message"
                          rows={6}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand hover:bg-brand/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
                
                {/* Volunteer Form */}
                <TabsContent value="volunteer">
                  <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={volunteerFormData.fullName}
                          onChange={handleVolunteerChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="v-email">Email</Label>
                        <Input
                          id="v-email"
                          name="email"
                          type="email"
                          value={volunteerFormData.email}
                          onChange={handleVolunteerChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={volunteerFormData.phone}
                          onChange={handleVolunteerChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="area">Area of Interest</Label>
                        <Select 
                          value={volunteerFormData.area} 
                          onValueChange={(value) => handleVolunteerSelectChange("area", value)}
                        >
                          <SelectTrigger id="area">
                            <SelectValue placeholder="Select area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {volunteerAreas.map((area) => (
                              <SelectItem key={area.value} value={area.value}>
                                {area.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="availability">Availability</Label>
                        <Select 
                          value={volunteerFormData.availability} 
                          onValueChange={(value) => handleVolunteerSelectChange("availability", value)}
                        >
                          <SelectTrigger id="availability">
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                          <SelectContent>
                            {availabilityOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="why">Why You Want to Volunteer</Label>
                        <Textarea
                          id="why"
                          name="why"
                          value={volunteerFormData.why}
                          onChange={handleVolunteerChange}
                          placeholder="Tell us why you're interested in volunteering with us"
                          rows={6}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand hover:bg-brand/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Info Side */}
            <div className="lg:pl-8">
              {/* Contact Info */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-brand mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Office Address</h4>
                      <p className="text-gray-600">
                        123 Bole Road<br />
                        Addis Ababa<br />
                        Ethiopia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-brand mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+251912345678" className="hover:text-brand transition-colors">
                          +251 91 234 5678
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-brand mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@habeshaimpact.org" className="hover:text-brand transition-colors">
                          info@habeshaimpact.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-brand mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.70207917896!2d38.68413224010767!3d9.010474312321366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1702338628100!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
              
              {/* Social Media */}
              <div className="bg-brand text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6">
                  Follow us on social media to stay updated on our projects, events, and impact stories.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-brand hover:bg-gray-100 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1.02-1.1h3.2V.26h-4.4C10.4.26 9.5 3.3 9.5 6.76v.7h-3v4h3v12h5v-12h3.4l.5-4z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-brand hover:bg-gray-100 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-brand hover:bg-gray-100 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-brand hover:bg-gray-100 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
