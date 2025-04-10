import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Building, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";

const bankDetails = [
  {
    bankName: "Commercial Bank of Ethiopia",
    accountName: "Ethiopia NGO Foundation",
    accountNumber: "1000123456789",
    branchName: "Addis Ababa Main Branch",
    swiftCode: "CBETETAA"
  },
  {
    bankName: "Dashen Bank",
    accountName: "Ethiopia NGO Foundation",
    accountNumber: "0123456789",
    branchName: "Bole Branch",
    swiftCode: "DASHETAA"
  }
];

const Donate = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    amount: "",
    purpose: "",
    message: ""
  });
  const [copiedField, setCopiedField] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Information Received",
      description: "Thank you for your donation! We will contact you shortly.",
    });
    setForm({
      fullName: "",
      email: "",
      amount: "",
      purpose: "",
      message: ""
    });
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast({
      title: "Copied to clipboard",
      description: `${fieldName} has been copied to your clipboard.`,
    });

    setTimeout(() => {
      setCopiedField("");
    }, 2000);
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Make a Donation" 
            subtitle="Your generous contribution helps us continue our mission in Ethiopia"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
            {/* Bank Transfer Details */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="mr-2 h-6 w-6 text-brand" />
                Bank Transfer Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bankDetails.map((bank, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-gray-100">
                      <CardTitle className="text-xl">{bank.bankName}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li>
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-gray-500">Account Name</p>
                              <p className="font-medium">{bank.accountName}</p>
                            </div>
                            <button 
                              onClick={() => copyToClipboard(bank.accountName, `${bank.bankName} Account Name`)}
                              className="text-gray-400 hover:text-brand transition-colors"
                              aria-label="Copy account name"
                            >
                              {copiedField === `${bank.bankName} Account Name` ? 
                                <Check className="h-5 w-5 text-green-500" /> : 
                                <Copy className="h-5 w-5" />
                              }
                            </button>
                          </div>
                        </li>
                        
                        <li>
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-gray-500">Account Number</p>
                              <p className="font-medium">{bank.accountNumber}</p>
                            </div>
                            <button 
                              onClick={() => copyToClipboard(bank.accountNumber, `${bank.bankName} Account Number`)}
                              className="text-gray-400 hover:text-brand transition-colors"
                              aria-label="Copy account number"
                            >
                              {copiedField === `${bank.bankName} Account Number` ? 
                                <Check className="h-5 w-5 text-green-500" /> : 
                                <Copy className="h-5 w-5" />
                              }
                            </button>
                          </div>
                        </li>
                        
                        <li>
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-gray-500">Branch</p>
                              <p className="font-medium">{bank.branchName}</p>
                            </div>
                          </div>
                        </li>
                        
                        {bank.swiftCode && (
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-sm text-gray-500">SWIFT Code</p>
                                <p className="font-medium">{bank.swiftCode}</p>
                              </div>
                              <button 
                                onClick={() => copyToClipboard(bank.swiftCode, `${bank.bankName} SWIFT Code`)}
                                className="text-gray-400 hover:text-brand transition-colors"
                                aria-label="Copy SWIFT code"
                              >
                                {copiedField === `${bank.bankName} SWIFT Code` ? 
                                  <Check className="h-5 w-5 text-green-500" /> : 
                                  <Copy className="h-5 w-5" />
                                }
                              </button>
                            </div>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-yellow-700">
                  <strong>Important:</strong> When making a bank transfer, please include your name as a reference 
                  so we can properly acknowledge your donation.
                </p>
              </div>
            </div>
            
            {/* Donation Form */}
            <div className="lg:col-span-5">
              <Card className="shadow-lg">
                <CardHeader className="bg-brand text-white">
                  <CardTitle className="text-xl">Donation Information</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={form.fullName} 
                        onChange={handleChange} 
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amount">Donation Amount (USD)</Label>
                      <Input 
                        id="amount" 
                        name="amount" 
                        type="number" 
                        value={form.amount} 
                        onChange={handleChange} 
                        placeholder="Amount in USD"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose (Optional)</Label>
                      <select 
                        id="purpose" 
                        name="purpose" 
                        value={form.purpose} 
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      >
                        <option value="">Select a purpose (optional)</option>
                        <option value="General Support">General Support</option>
                        <option value="Education Programs">Education Programs</option>
                        <option value="Healthcare Initiatives">Healthcare Initiatives</option>
                        <option value="Clean Water Projects">Clean Water Projects</option>
                        <option value="Community Development">Community Development</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={form.message} 
                        onChange={handleChange} 
                        placeholder="Any specific instructions or messages"
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand hover:bg-brand/90">
                      Submit Donation Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Donate;
