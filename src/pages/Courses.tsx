import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider as UISlider } from "@/components/ui/slider";
import { Search } from "lucide-react";
import clsx from "clsx";



interface Course {
  title: string;
  certification: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  image: string;
  subCourses?: { title: string; description: string ;Cost: string; NB: string ;}[];
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image:string;
}

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCertification, setSelectedCertification] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number[]>([20000]);
  const [priceFilterActive, setPriceFilterActive] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [expandedSubCourseIndex, setExpandedSubCourseIndex] = useState<number | null>(null);
  const courseListingsRef = useRef<HTMLElementTagNameMap["section"] | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);  // state for hovered card

  
  
  
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCertification === "All" || course.certification === selectedCertification) &&
      (selectedFormat === "All" || course.format === selectedFormat) &&
      (!priceFilterActive || parseInt(course.price) <= priceRange[0])
  );

  const quantity = filteredCourses.length;
  const translateZ = `calc((15px + 15px) + 0px)`;
  const rotateX = "1deg";
  const perspective = "100px";
  const slideOverRef = useRef<HTMLDivElement | null>(null);
  

    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (slideOverRef.current && !slideOverRef.current.contains(event.target as Node)) {
        setSelectedCourse(null);
        setExpandedSubCourseIndex(null);
      }
    };
    if (selectedCourse) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCourse]);

 

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1] vr-background">
  <div className="particle-layer" />

  {/* Add a subtle overlay to soften background without hiding animation */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
</div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow ">

          {/*Courasel Rotation */}
          <section ref={courseListingsRef} className="">
            <div
              className="w-screen h-[400px] flex items-center justify-center overflow-hidden mt-10
              "
              style={{ position: "relative", textAlign: "center" }}
            >
              {filteredCourses.length > 0 && (
                <div
                  className="absolute w-[100px] h-[150px] top-[25%] left-[calc(50%_-_50px_-_2.5px)] z-10"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `perspective(${perspective})`,
                    animation: isHovered !== null ? "none" : "rotating 20s linear infinite", // pause rotation when hovered
                  }}
                >
                  {filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 border-2 border-black rounded-2xl overflow-hidden "
                      style={{
                        transform: `rotateY(${(360 / quantity) * index}deg) translateZ(${translateZ})`,
                        width: "100%",
                        height: "100%",
                      }}
                     // onMouseEnter={() => setIsHovered(index)}  // set hover state to the index of hovered card
                     // onMouseLeave={() => setIsHovered(null)}  // reset hover state
                    >
                      <Card className="bg-gradient-to-b from-black to-gray-50 flex flex-col group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 rounded-2xl w-full h-[600px] ">
                        <CardHeader className="p-0">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover bg-transparent  mt-8"
                            style={{
                              background:
                                "",
                            }}
                          />
                        </CardHeader>
                        <div className="flex flex-col flex-grow p-1">
                          <CardTitle className="font-serif text-sm font-semibold mt-1 group-hover:text-white ">
                           
                          </CardTitle>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <style >{`
              @keyframes rotating {
                from {
                  transform: perspective(${perspective}) rotateX(${rotateX}) rotateY(0);
                }
                to {
                  transform: perspective(${perspective}) rotateX(${rotateX}) rotateY(1turn);
                }
              }
              .course-card {
                transition: transform 0.5s ease-in-out;
              }
              .course-card:hover {
                transform: scale(1.05); /* Smooth scale effect on hover */
              }
            `}</style>
          </section>



            {/*Explore courses card*/ }
        <main className="flex-grow">
          <div className="container mx-auto ">
            <h1 className="text-white text-4xl font-bold mb-20 text-gradient text-center italic">
              Explore Our Courses
            </h1>

           

            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="ml-0 relative max-w-md  ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <Input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find your course"
                className="pl-10 bg-black border-purple-500/30 text-purple-500 placeholder:text-purple-400 text-lg py-6 "
              />
            </div>
             
             
              <Select onValueChange={setSelectedCertification} defaultValue="All">
                <SelectTrigger className="border-purple-500/30 bg-black text-purple-500 text-lg py-6">
                  <SelectValue placeholder="Certification Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  
                  <SelectItem value="ux">UX Design</SelectItem>
                  <SelectItem value="comptia">CompTIA</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSelectedFormat} defaultValue="All">
                <SelectTrigger className="border-purple-500/30 bg-black text-purple-500 text-lg py-6">
                  <SelectValue placeholder="Course Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Self-paced">Self-paced</SelectItem>
                  <SelectItem value="Instructor-led">Instructor-led</SelectItem>
                </SelectContent>
              </Select>

              {/*
              <div className="space-y-2">
                <label className="text-lg text-purple-200">Price Range: R{priceRange[0]}</label>
                <UISlider
                  value={priceRange}
                  onValueChange={(value: number[]) => {
                    setPriceRange(value);
                    setPriceFilterActive(true);
                  }}
                  max={20000}
                  step={1000}
                  className="py-4"
                />
              </div>
              */}
            </div>

 <section className="mb-28">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {filteredCourses.length > 0 ? (
      filteredCourses.map((course, index) => (
        <div
          key={index}
          onClick={() => setSelectedCourse(course)}
          className="cursor-pointer"
        >
          <Card className="bg-gradient-to-b from-gray-700 to-black border-gray-700 shadow-xl w-full h-[540px] flex flex-col group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 hover:border-purple-800 rounded-2xl hover:shadow-purple-800">
            <CardHeader className="p-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <CardTitle className="text-sky-600 text-xl font-semibold mt-2 group-hover:text-white">
                {course.title}
              </CardTitle>
              <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-purple-300 text-base mb-4 group-hover:text-pink-500">
                  {course.description}
                </p>
                <div className="space-y-3 text-base text-purple-400 group-hover:text-sky-100">
                  <p>
                    <span className="font-semibold">Certification:</span>{" "}
                    {course.certification.toUpperCase()}
                  </p>
                  <p>
                    <span className="font-semibold">Format:</span>{" "}
                    {course.format}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-0 mt-4">
                <Button className="w-full bg-purple-900 group-hover:bg-pink-900 text-lg py-6 rounded-2xl">
                  View Modules
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      ))
    ) : (
      <div className="col-span-full text-center">
        <p className="text-purple-400 text-xl">No courses found</p>
      </div>
    )}
  </div>
</section>

          </div>

                <div
            ref={slideOverRef}
            className={clsx(
              "fixed top-0 right-0 w-full max-w-md h-full bg-gray-900 group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 border-l border-purple-800 shadow-2xl z-50 transition-transform duration-300 ease-in-out",
              selectedCourse ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex flex-col h-full p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-sky-400 font-bold">{selectedCourse?.title} Modules</h2>
                <button
                  className="text-purple-400 hover:text-pink-500 text-xl"
                  onClick={() => {
                    setSelectedCourse(null);
                    setExpandedSubCourseIndex(null);
                  }}
                >
                  ✕
                </button>
              </div>
              {selectedCourse?.subCourses?.length ? (
                <ul className="space-y-4">
                  {selectedCourse.subCourses.map((sub, idx) => (
                    <li key={idx} className="text-purple-300 border-b border-purple-700 pb-2">
                      <button
                        onClick={() =>
                          setExpandedSubCourseIndex(
                            expandedSubCourseIndex === idx ? null : idx
                          )
                        }
                        className="text-left w-full text-purple-200 font-semibold hover:text-pink-500 text-xl"
                      >
                        {sub.title}
                      </button>
                      {expandedSubCourseIndex === idx && (
                        <p className="mt-2 text-purple-200 font-semibold">
                          <span className="text-sky-500 text-lg font-bold">Description : </span>{sub.description}
                          <br />
                          <span className="text-sky-500 text-xl font-bold">Price : </span>{sub.Cost}
                          <br />
                          <span className="text-sm text-red-500 font-bold animate-pulse">{sub.NB}</span>
                          <a
                            href="https://pay.yoco.com/forge-academy-pty-ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block"
                          >
                            <Button className="w-full bg-pink-900 text-lg py-5 rounded-xl mt-6 mb-4 italic font-serif8">
                              Enroll
                            </Button>
                          </a>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-purple-300">No modules available.</p>
              )}
            </div>
          </div>
        </main>

            {/*Testimonies*/ }
            <section className="py-16 relative">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-14 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-600 py-3 font-heading animate-fade-in italic">
                  What Our Learners Say
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="hover:bg-gray-500 bg-gradient-to-b from-gray-700 to-black   border-gray-700 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 rounded-2xl transition-transform duration-300 group hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-6 text-center">
                        <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-60 h-30 mx-auto rounded-full rounded-4xl mb-4 object-cover"
                      />
                        <p className="text-[hsl(190,60%,90%)] mb-4 italic group-hover:text-sky-600">"{testimonial.text}"</p>
                        <p className="text-pink-400 font-semibold">{testimonial.name}</p>
                        <p className="text-[hsl(190,60%,90%)] text-sm">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    text: "As a certified Cloud Practitioner from Forge Academy and Labs, I gained a solid foundation in cloud computing, including architecture, service models, and security. The hands-on training helped me apply these skills in real-world scenarios, boosting my confidence and technical ability. This certification has sparked my interest in pursuing a career as a Network Engineer or Data Analyst. I now understand how cloud technology supports both fields—from building secure networks to analyzing data efficiently. Forge Academy provided a practical and supportive learning environment. It was the perfect starting point for my tech journey. I highly recommend it to anyone looking to enter the industry.",
    name: "Sandziso Mdluli.",
    role: "Cloud Learnership Graduate",
    image: "Sandziso.jpeg",
  },
  {
    text: "Being part of the Cloud Learnership at Forge Academy has been a truly transformative experience. From day one, I was immersed in a dynamic and supportive learning environment that not only deepened my technical knowledge but also encouraged professional growth. The structured curriculum, hands-on labs, and guidance from experienced mentors made complex cloud concepts both accessible and exciting.Through this learnership, I had the opportunity to earn my AWS Certified Cloud Practitioner certificate—a milestone I am incredibly proud of. This certification has equipped me with a solid understanding of cloud computing fundamentals, security best practices, pricing models, and AWS services that are critical in today's IT landscape.",
    name: "Sinqobile Madlopha.",
    role: "Cloud Learnership Graduate",
    image: "Sinqobile.jpeg",
  },
  {
    text: "As a certified Cloud Practitioner through Forge Academy, I bring a solid foundation in cloud computing fundamentals including cloud services, architecture principles, and security frameworks. My certification has equipped me with proficiency in IaaS, PaaS, SaaS service types, deployment models, and cost optimization strategies.I am passionate about pursuing cloud engineering and cloud security engineering roles where I can apply my foundational knowledge while continuing to specialize. With strong analytical thinking and a commitment to continuous learning, I am seeking opportunities to contribute to organizations that value cloud innovation and security excellence.",
    name: "Tumelo Sebashe",
    role: "Cloud Learnership Graduate",
    image: "Stum.jpeg",
  },
];


const courses: Course[] = [
  {
    title: "AWS",
    certification: "aws",
    description: "Learn cloud computing and DevOps skills to advance your career",
    duration: "3 months",
    format: "Instructor-led",
    price: "5000",
    image: "image.png",
    subCourses: [
      { title: "AWS Cloud Practitioner", description: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)." ,Cost:"R 1 825.11" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      ],
  },
  {
    title: "CompTIA ",
    certification: "comptia",
    description: "Master cybersecurity fundamentals and best practices",
    duration: "12 months",
    format: "Self-paced",
    price: "6000",
    image: "7.png",
    subCourses: [
      { title: "Digital Literacy Pro", description: "Digital Literacy Pro is hosted on the online TestOut learning platform, LabSim. This provides a comprehensive experience for gaining knowledge and practical skills through interactive learning modules like video lessons and lab simulations that are accessible in one place." ,Cost:"R 1224.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"} ,
      { title: "Tech+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn. For those topics where you need more support, CertMaster Practice provides personalized remediation and feedback. Once you’re ready, you can demonstrate your knowledge on a timed practice test." ,Cost:"R 1218.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "A+", description: "Strengthen your understanding, accelerate learning, and test your knowledge with CertMaster Practice for A+ Core 1, the ultimate final prep tool for exam day. This adaptive platform helps you close knowledge gaps, boost retention, and prepare for the CompTIA A+ (V15) Core 1 certification exam. It is designed for use 30–90 days before your exam and ensures you’re fully prepared." ,Cost:"R 2706.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS" },
      { title: "Network+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn." ,Cost:"R 1542.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Security+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn. ",Cost:"R 1623.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Cloud+", description: "CertMaster Perform brings together narrative instructional content, videos, performance-based questions (PBQs), skills assessments, labs and more to offer a comprehensive learning experience to prepare you for your CompTIA certification exam and further your career in IT." ,Cost:"R 5465.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Linux+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn." ,Cost:"R 1542.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Server+", description: "CertMaster Learn is a self-paced, comprehensive online learning experience that helps you gain the knowledge and practical skills necessary to be successful on your CompTIA certification exam, and in your IT career." ,Cost:"R 3907.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
     
      { title: "Routing and Switching ", description: "Routing & Switching Pro is a high-quality, easy-to-use curriculum that will provide you with the training to use Cisco and other technology that allows modern networks to operate including IP services, security, automation, and programmability." ,Cost:"R 1532.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Client Pro", description: "Client Pro is a high-quality, easy-to-use curriculum that will provide you with the training needed to configure, manage, network, and support modern desktops and devices in an enterprise environment. Hosted on the online TestOut learning platform, LabSim, it provides a comprehensive experience for gaining knowledge and practical skills through interactive learning modules like video lessons and lab simulations." ,Cost:"R 1532.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Hybrid Server:Core", description: "Hybrid Server Pro: Core is a high-quality, easy-to-use curriculum where you will gain the knowledge and skills you need to configure and manage both on-premise and cloud based servers. Hosted on the online TestOut learning platform, LabSim, it provides a comprehensive experience for gaining knowledge and practical skills through interactive learning modules like video lessons and lab simulations." ,Cost:"R 1532.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Hybrid Server:Advanced ", description: "Hybrid Server Pro: Advanced is a high-quality, easy-to-use curriculum where you will gain the advanced knowledge and skills you need to configure and manage both on-premise and cloud based servers. Hosted on the online TestOut learning platform, LabSim, it provides a comprehensive experience for gaining knowledge and practical skills through interactive learning modules like video lessons and lab simulations." ,Cost:"R 1532.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "CySA+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn." ,Cost:"R 1623.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "PenTest+", description: "CompTIA CertMaster Practice for PenTest+ PT0-003 is your online training companion and knowledge assessment tool designed to help you become a certified penetration tester. In the ever-evolving cybersecurity landscape, staying ahead of threats is vital. This dynamic tool enhances your knowledge and pinpoints learning gaps, equipping you with the skills to identify vulnerabilities and safeguard organizations from cyber threats." ,Cost:"R 3909.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "CASP+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn. " ,Cost:"R 2113.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "SecurityX", description: "CompTIA CertMaster Practice for SecurityX CAS-005 is an online knowledge assessment and training companion tool specifically designed to prepare you for the SecurityX certification exam. In the dynamic world of cybersecurity, staying ahead of attacks and ensuring your skills are current is essential.",Cost:"R 4844.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "CloudNetX", description: "CertMaster Perform brings together narrative instructional content, videos, performance-based questions (PBQs), skills assessments, live labs and more to offer a comprehensive learning experience to prepare candidates for their CompTIA certification exam and validate their expertise in cybersecurity" ,Cost:"R 16 814.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Data+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn.",Cost:"R 1053.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS" },
      { title: "Cloud Essential+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn." ,Cost:"R 1542.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Project+", description: "CompTIA CertMaster Practice is an online knowledge assessment and training companion tool to help you prepare for your CompTIA certification exam. Featuring an adaptive question-first design, CertMaster Practice quickly assesses what you already know and what you still need to learn." ,Cost:"R 7384.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Microsoft", description: "TestOut Pro Certified: Microsoft Excel® is hosted on the online TestOut learning platform, LabSim. This provides a comprehensive experience for gaining knowledge and practical skills through interactive learning modules like video lessons and lab simulations that are accessible in one place." ,Cost:"R 563.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "AI Essential", description: "CompTIA AI Essentials develops skills that enhance careers by providing competency in basic AI fundamentals, giving learners a competitive edge." ,Cost:"R 1542.00",NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS" },
      { title: "Business Essential", description: "CompTIA Business Essentials develops skills that enhance careers by providing competency in how businesses function and operate and financial literacy." ,Cost:"R 1224.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Soft Skills Essential ", description: "CompTIA Soft Skills Essentials develops skills that enhance careers by providing competency in critical interpersonal, communication, and collaboration skills." ,Cost:"R 2413.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      { title: "Cloud Essentitails", description: "CompTIA Cloud Essentials develops skills that enhance careers by providing competency in basic cloud concepts, giving learners a competitive edge." ,Cost:"R 1798.00" ,NB:"PLEASE NOTE TO USE MODULE NAME AS REFERENCE WHEN MAKING PAYMENTS"},
      
    ],
  },
  {
    title: "UX Design",
    certification: "ux",
    description: "Learn more about developing the user interface and intergrating the user designs",
    duration: "6 months",
    format: "Instructor-led",
    price: "5000",
    image: "8.png",
    subCourses: [
      { title: "COMING SOON", description: "" ,Cost:"R " ,NB:""},
      ],
  },
  

];

export default Courses;
