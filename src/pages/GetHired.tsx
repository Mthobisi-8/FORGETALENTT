
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export default function GetHiredPage() {
  const [cv, setCv] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobListings = [
    { 
      title: "Learnership", 
      description: "12-month program focusing on practical skills and industry experience." 
    },
    { 
      title: "Internship", 
      description: "6-month internship with mentorship from industry experts." 
    },
    { 
      title: "Junior Developer", 
      description: "Entry-level position requiring knowledge of JavaScript, React, and Python." 
    },
    { 
      title: "Data Analyst", 
      description: "Role focusing on data interpretation and Python-based analysis." 
    }
  ];

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!cv) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("CV submitted successfully!", {
        description: "We'll review your application and get back to you soon."
      });
      setIsSubmitting(false);
      setCv(null);
    }, 1500);
  };

    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f3f3f3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4 tracking-tight">
            Get Hired at Forge Academy
          </h1>
          <p className="text-lg text-[#8E9196] max-w-2xl mx-auto">
            Explore our open positions and take the first step towards your new career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transform transition-all duration-500">
          {jobListings.map((job, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border border-[#f1f0fb] bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-[#1A1F2C]">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#8E9196]">{job.description}</p>
                <Button 
                  className="mt-4 bg-[#9b87f5] text-white hover:bg-[#8B5CF6] transition-colors duration-300"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md border border-[#f1f0fb] p-8 max-w-2xl mx-auto transform transition-all duration-500">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1A1F2C] mb-2">Submit Your CV</h2>
            <p className="text-[#8E9196]">Upload your CV to apply for any of our open positions</p>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleCvUpload}
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                id="cv-upload"
              />
              <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${cv ? 'border-[#9b87f5] bg-[#f5f3ff]' : 'border-gray-300'}`}>
                <Upload className={`mx-auto h-10 w-10 mb-2 ${cv ? 'text-[#9b87f5]' : 'text-gray-400'}`} />
                <p className="text-sm font-medium">
                  {cv ? cv.name : 'Drag and drop your CV, or click to browse'}
                </p>
                <p className="text-xs text-[#8E9196] mt-1">
                  Supported formats: PDF, DOC, DOCX
                </p>
              </div>
            </div>
            
            <Button 
              onClick={handleSubmit}
              disabled={!cv || isSubmitting}
              className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? 'Submitting...' : 'Submit CV'}
                <Upload className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 w-0 bg-[#7E69AB] group-hover:w-full transition-all duration-300 ease-out -z-0"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
