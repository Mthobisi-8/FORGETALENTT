import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect, useRef } from "react"; // Added useRef
import { Search, MapPin, Briefcase } from "lucide-react";

const Recruit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const jobDetailsRef = useRef<HTMLDivElement>(null); // Ref for job details section

  const jobs = [
    {
      title: "Software Development",
      description: "Bachelor’s degree in Computer Science or Engineering. Proficiency in Java, Python, or JavaScript. Experience with frameworks like React, Angular, or Spring Boot. Understanding of database management and cloud services. Strong problem-solving skills and ability to work in an agile environment.",
      experience: "Internship",
      category: "Software Development",
      location: "Remote",
    },
    {
      title: "Comptia Instructor",
      description: "Bachelor’s degree in Computer Science, Information Security, or related field. Understanding of security principles, firewalls, and encryption techniques. Knowledge of security assessment tools like Wireshark, Nmap, or Metasploit. Experience in ethical hacking and penetration testing is a plus.",
      experience: "Apprentice",
      category: "Cybersecurity",
      location: "Hybrid",
    },
    {
      title: "UI/UX Designer",
      description: "Bachelor's degree in Computer Science, Design, or a related field. Proficiency in design tools such as Figma, Sketch, or Adobe XD. Understanding of user-centered design principles, wireframing, and prototyping. Experience working in collaborative development environments.",
      experience: "Entry Level",
      category: "UI/UX Design",
      location: "Onsite",
    },

    {
      title: "IT Support",
      description: "Matric, A+ certification required. Advantageous certifications: MD-100, MD-101, or N+. Experience with troubleshooting hardware and software issues. Strong communication and customer support skills.",
      experience: "Mid-Level",
      category: "IT Support",
      location: "Hybrid",
    },

    {
      title: "Cloud Computing",
      description: "Minimum of a Higher Certificate / Occupational Certificate Level 5 (NQF Level 5) in A+/N+. Experience with cloud platforms such as AWS, Azure, or Google Cloud. Understanding of virtualization and containerization technologies.",
      experience: "Senior Level",
      category: "Cloud Computing",
      location: "Remote",
    },
  ];

  const categories = ["All", ...new Set(jobs.map((job) => job.category))];
  const experienceLevels = ["All", ...new Set(jobs.map((job) => job.experience))];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (searchTerm === "" || job.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || job.category === selectedCategory) &&
      (selectedExperience === "All" || job.experience === selectedExperience)
  );

  useEffect(() => {
    setSelectedJob(null);
  }, [searchTerm, selectedCategory, selectedExperience]);

  // Scroll to job details on mobile when a job is selected
  useEffect(() => {
    if (selectedJob !== null && window.innerWidth < 1024) { // lg breakpoint
      jobDetailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedJob]);

    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col animate-glow">
        <div className="fixed inset-0 z-[-1] vr-background">
  <div className="particle-layer" />

  {/* Add a subtle overlay to soften background without hiding animation */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
</div>
     
      <Header />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl text-white sm:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-600 py-4 mb-4 font-heading italic">
              Find Your Dream Job
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Explore a wide range of opportunities in tech and IT. Filter by category, experience level, and more to find the perfect role for you.
            </p>
          </section>

          {/* Search and Filter Bar */}
          <section className="mb-8 bg-transparent  rounded-2xl p-6 backdrop-blur-sm   animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500" size={20} />
                <Input
                  type="text"
                  placeholder="Search jobs by title..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="rounded-2xl pl-10 bg-[hsl(270,50%,15%)]/80 border-pink-950 text-[hsl(190,60%,90%)] placeholder:text-[hsl(190,60%,70%)] focus:ring-pink-500 focus:border-pink-500  shadow-lg shadow-[hsl(270,70%,30%)]/50"
                />
              </div>

              {/* Category Filter */}
              <Select onValueChange={setSelectedCategory} defaultValue="All">
                <SelectTrigger className="border-pink-950 bg-[hsl(270,50%,15%)]/80 text-[hsl(190,60%,90%)] rounded-2xl shadow-lg shadow-[hsl(270,70%,30%)]/50 focus:ring-pink-500 focus:border-pink-500">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[hsl(270,50%,15%)] border-pink-950 text-[hsl(190,60%,90%)] rounded-2xl">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Experience Filter */}
              <Select onValueChange={setSelectedExperience} defaultValue="All">
                <SelectTrigger className="border-pink-950 bg-[hsl(270,50%,15%)]/80 text-[hsl(190,60%,90%)] rounded-2xl shadow-lg shadow-[hsl(270,70%,30%)]/50 focus:ring-pink-500 focus:border-pink-500">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent className="bg-[hsl(270,50%,15%)] border-pink-950 text-[hsl(190,60%,90%)]">
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Job Listings and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800 hover:bg-gray-950 border-pink-950 backdrop-blur-sm shadow-xl shadow-[hsl(270,70%,30%)]/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[hsl(270,70%,40%)]/70 cursor-pointer ${
                      selectedJob === index ? "border-pink-500 shadow-[hsl(270,70%,40%)]/70" : ""
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onClick={() => setSelectedJob(index)}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-sky-800 font-heading">
                        {job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 text-sky-400">
                        <Briefcase size={16} />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sky-400 mt-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-[hsl(190,60%,90%)] text-center animate-pulse">No jobs found.</p>
              )}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2" ref={jobDetailsRef}> {/* Added ref */}
              <Card className="bg-gray-900 border-pink-950 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 rounded-2xl p-6 h-full animate-fade-in">
                <CardContent>
                  {selectedJob !== null ? (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-sky-700 font-heading">
                        {filteredJobs[selectedJob].title}
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-sky-500">Requirements</h3>
                          <p className="text-sky-500">{filteredJobs[selectedJob].description}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-sky-500">Experience Level</h3>
                          <p className="text-sky-500">{filteredJobs[selectedJob].experience}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-sky-500">Location</h3>
                          <p className="text-sky-500">{filteredJobs[selectedJob].location}</p>
                        </div>
                      </div>
                      <a
                        href="https://app.forgetalent.co.za/forms/general-applications-XM.qQg/0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-pink-500 text-[hsl(190,60%,90%)] font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50 hover:bg-purple-950 ">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <p className="text-[hsl(190,60%,90%)] text-center">Select a job to view details.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recruit;