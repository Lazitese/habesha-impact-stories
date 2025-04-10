
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Heart, DollarSign, CreditCard, Landmark, Phone } from "lucide-react";

// Sample donation purposes
const donationPurposes = [
  { value: "general", label: "General Support" },
  { value: "education", label: "Education Programs" },
  { value: "water", label: "Clean Water Projects" },
  { value: "healthcare", label: "Healthcare Initiatives" },
  { value: "women", label: "Women's Empowerment" }
];

// Sample donation amounts
const donationAmounts = [
  { value: 50, label: "$50" },
  { value: 100, label: "$100" },
  { value: 250, label: "$250" },
  { value: 500, label: "$500" },
  { value: 1000, label: "$1,000" },
  { value: "custom", label: "Custom Amount" }
];

const Donate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "general",
    amount: 100,
    customAmount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Donation Information Received",
        description: "Thank you for your generosity! We'll contact you with next steps.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        purpose: "general",
        amount: 100,
        customAmount: "",
        message: ""
      });
    }, 1500);
  };

  const selectedAmount = formData.amount === "custom" ? formData.customAmount : formData.amount;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd59a93c6138?q=80&w=2000&auto=format&fit=crop"
            alt="Donate Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Make a Difference</h1>
            <p className="text-xl">
              Your generosity can transform lives and communities across Ethiopia. Every contribution matters.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <div>
              <SectionHeading 
                title="Donate Now" 
                subtitle="Your support helps us continue our mission in Ethiopian communities"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="purpose">Donation Purpose (Optional)</Label>
                    <Select 
                      value={formData.purpose} 
                      onValueChange={(value) => handleSelectChange("purpose", value)}
                    >
                      <SelectTrigger id="purpose">
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        {donationPurposes.map((purpose) => (
                          <SelectItem key={purpose.value} value={purpose.value}>
                            {purpose.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Donation Amount</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
                      {donationAmounts.map((amount) => (
                        <Button 
                          key={amount.value} 
                          type="button"
                          variant={formData.amount === amount.value ? "default" : "outline"}
                          className={formData.amount === amount.value ? "bg-brand hover:bg-brand/90" : ""}
                          onClick={() => handleSelectChange("amount", amount.value.toString())}
                        >
                          {amount.label}
                        </Button>
                      ))}
                    </div>
                    
                    {formData.amount === "custom" && (
                      <div className="mt-2">
                        <Label htmlFor="customAmount">Custom Amount ($)</Label>
                        <Input
                          id="customAmount"
                          name="customAmount"
                          type="number"
                          min="1"
                          value={formData.customAmount}
                          onChange={handleChange}
                          placeholder="Enter amount"
                          required={formData.amount === "custom"}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us why you're donating or any specific requests"
                      rows={4}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand/90 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Donate ${selectedAmount ? `$${selectedAmount}` : ""}`}
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Your donation information is secure. We'll contact you with next steps to complete your donation.
                </p>
              </form>
            </div>
            
            {/* Info Side */}
            <div className="lg:pl-8">
              {/* Bank Details */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Landmark className="mr-2 h-5 w-5 text-brand" />
                  Bank Transfer Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bank Name</h4>
                    <p className="text-gray-600">Commercial Bank of Ethiopia</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Account Name</h4>
                    <p className="text-gray-600">Habesha Impact Stories</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Account Number</h4>
                    <p className="text-gray-600">1000123456789</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">SWIFT Code</h4>
                    <p className="text-gray-600">CBETETAA</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Money */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-brand" />
                  Mobile Money Options
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">M-BIRR</h4>
                    <p className="text-gray-600">Account: 123456789</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Telebirr</h4>
                    <p className="text-gray-600">Account: 987654321</p>
                  </div>
                </div>
              </div>
              
              {/* Impact Info */}
              <div className="bg-brand text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">$50 can provide</h4>
                      <p>Clean drinking water for a family for six months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">$100 can provide</h4>
                      <p>School supplies for 10 children for an entire year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">$250 can provide</h4>
                      <p>Medical supplies for a rural clinic serving 100 patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">$500 can provide</h4>
                      <p>Training for 5 women to start their own businesses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg">$1,000 can provide</h4>
                      <p>Partial funding for a new community well or classroom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why People Donate" 
            subtitle="Hear from our supporters about why they choose to give"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-brand" />
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6 text-center italic">
                "I donate because I believe every child deserves access to education. The work Habesha Impact is doing in rural schools is truly transformative."
              </blockquote>
              <div className="text-center">
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-600">Monthly Donor</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-brand" />
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6 text-center italic">
                "As someone with Ethiopian heritage, supporting Habesha Impact helps me give back to my ancestral homeland and make a meaningful difference."
              </blockquote>
              <div className="text-center">
                <h4 className="font-bold">Michael Desta</h4>
                <p className="text-gray-600">Regular Donor</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-brand" />
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6 text-center italic">
                "What I love about Habesha Impact is how transparent they are about where the money goes. I can see the direct impact of my contributions."
              </blockquote>
              <div className="text-center">
                <h4 className="font-bold">Lisa Thompson</h4>
                <p className="text-gray-600">Corporate Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Donate;
