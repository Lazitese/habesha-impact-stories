
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, CreditCard, Building, Phone } from "lucide-react";

const Donate = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const bankInfo = [
    {
      id: "account_number",
      label: "Account Number",
      value: "0123456789",
    },
    {
      id: "account_name",
      label: "Account Name",
      value: "Ethiopia Impact Foundation",
    },
    {
      id: "bank_name",
      label: "Bank Name",
      value: "Commercial Bank of Ethiopia",
    },
    {
      id: "swift_code",
      label: "SWIFT Code",
      value: "CBETETAA",
    },
    {
      id: "branch",
      label: "Branch",
      value: "Addis Ababa Main Branch",
    },
  ];

  const mobileBanking = [
    {
      id: "cbe_birr",
      label: "CBE Birr",
      value: "+251 91 234 5678",
    },
    {
      id: "amole",
      label: "Amole (Dashen Bank)",
      value: "+251 91 234 5678",
    },
  ];

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop"
            alt="Donate Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Support Our Cause</h1>
            <p className="text-xl">
              Your generous donation helps us continue our work in Ethiopian communities, 
              providing clean water, education, healthcare, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 font-poppins text-center relative">
              How Your Donation Helps
              <span className="absolute h-1 bg-brand bottom-0 left-1/2 transform -translate-x-1/2 w-20"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">$25</h3>
                <p className="text-gray-600">Provides clean water to a family for one month</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">$100</h3>
                <p className="text-gray-600">Sponsors a child's education for one semester</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">$500</h3>
                <p className="text-gray-600">Helps build a water well for an entire community</p>
              </div>
            </div>
            
            {/* Bank Transfer Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-brand/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold">Bank Transfer Details</h3>
              </div>
              
              <div className="space-y-4">
                {bankInfo.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Label className="text-gray-600">{item.label}</Label>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="text-gray-500 hover:text-brand"
                    >
                      {copied === item.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Banking */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-brand/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold">Mobile Banking Options</h3>
              </div>
              
              <div className="space-y-4">
                {mobileBanking.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Label className="text-gray-600">{item.label}</Label>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="text-gray-500 hover:text-brand"
                    >
                      {copied === item.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Important Note */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h4 className="text-lg font-bold mb-2">Important Note</h4>
              <p className="text-gray-700">
                After making your donation, please email us at <a href="mailto:donations@ethiopiaimpact.org" className="text-brand hover:underline">donations@ethiopiaimpact.org</a> with 
                your transaction details so we can acknowledge your contribution and provide you with a donation receipt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Donate;
