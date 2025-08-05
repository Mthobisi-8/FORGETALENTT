import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";



const Hero = () => {
  const videoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [openItems, setOpenItems] = useState({
    0: true,
    1: true,
    2: true,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video && location.pathname === "/") {
      video.muted = false;
      video.loop = true;
      video.autoplay = true;
      video.play().catch((error) => console.error("Error playing video:", error));
    }
  }, [location.pathname]);

  const toggleAccordion = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    
    
    <div className="relative  min-h-screen">
      <div className="container mx-auto px-4 py-24 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
          {/* Left Section: Text & Buttons */}
          <section className="text-center md:text-left md:w-1/2">
             <div >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-200">
              Inspire Careers
            </h1>

            <p className="text-2xl  mt-6 italic py-6">
              "Unlock your potential. Shape your future."
            </p>
            
          <div className="flex flex-col md:flex-row md:gap-6 items-center justify-center">
          {/* Corporate button  */}
          <Button asChild className="bg-gradient-to-r from-purple-700 via-gray-200 to-purple-700 text-gray-950 hover:text-lg hover:bg-sky-700 hover:text-black rounded-3xl font-bold mt-10 w-32">
          <Link to="/Referral">CORPORATE</Link>
          </Button>

          {/* Upskill button  */}
          <Button asChild className="bg-gradient-to-r from-sky-700 via-gray-200 to-sky-700 text-gray-950 hover:text-lg  hover:bg-sky-700 hover:text-black rounded-3xl font-bold mt-10 w-32">
          <Link to="/Courses">UPSKILL</Link>
          </Button>
</div>

          </div>
          </section>
         

          {/* Right Section: Image */}
          <div className="w-full md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto mt-16 rounded-3xl overflow-hidden ">
  <iframe
    className="w-full h-[400px]"
    src="https://lottie.host/embed/ae2ea7c7-3509-4d2c-9086-78e7ef6600b8/InQlrg3Q5c.lottie"
    title="Lottie Animation"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
        </div>

          {/* Quick Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Learners Empowered", value: "5,000+" },
            { label: "Certifications Earned", value: "10,000+" },
            { label: "Industry Partners", value: "50+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[hsl(270,50%,15%)]/80 border-pink-950 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 rounded-2xl p-6 transition-transform duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-600">
                {stat.value}
              </h3>
              <p className="text-[hsl(190,60%,90%)] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="accordion-list flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-16">
          {[
            {
              title: "Industry Expertise",
              content:
                "With years of experience in the ICT industry, we have established ourselves as experts. Our team understands the evolving trends, ensuring we connect you with the right opportunities.",
            },
            {
              title: "Extensive Network",
              content:
                "Forge Talent has built a strong network of clients and candidates in the ICT sector, giving you access to a diverse pool of talented individuals and reputable organizations.",
            },
            {
              title: "Tailored Solutions",
              content:
                "We offer customised recruitment solutions to match your specific needs, whether you are looking for job opportunities or hiring for your company.",
            },
            
            
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-pink-950 rounded-2xl w-full md:w-1/3 bg-gray-800  transition-transform duration-300 hover:scale-105"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-gray-900 bg-opacity-50 rounded-2xl"
              >
                <span className="text-purple-800 font-semibold text-lg">
                  {`0${index + 1}. ${item.title}`}
                </span>
              </button>
              {openItems[index] && (
                <div className="p-4 rounded-2xl bg-gray-800 bg-opacity-50">
                  <p className="text-sky-400">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Responsive Video Section */}
        <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl mt-16 border border-pink-950 shadow-pink-800">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Rs37yjOZmJg?start=118&autoplay=1&mute=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

               {/* Discover More Section 
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient bg-clip-text text-white to-gray-200  py-3 font-heading animate-fade-in">
              Discover More
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Explore Our Courses",
                  description: "Browse our wide range of ICT courses and certifications.",
                  path: "/courses",
                },
                {
                  title: "Corporate Training",
                  description: "Discover how we can upskill your team with tailored programs.",
                  path: "/referral",
                },
                {
                  title: "Get in Touch",
                  description: "Have questions? Contact us to learn more about our services.",
                  path: "/contact",
                },
              ].map((link, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-pink-800 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 rounded-2xl transition-transform duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2 font-heading">{link.title}</h3>
                    <p className="text-sky-400 mb-4">{link.description}</p>
                    <Button
                      asChild
                      className="bg-transparent border hover:text-black rounded-2xl border-pink-500 text-[hsl(190,60%,90%)] hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50"
                    >
                      <Link to={link.path}>Explore Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>*/}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <h1 className=" text-center text-3xl md:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-gray-200 py-4">
              Explore  ForgeTalent
            </h1>

    </div>
  );
};

export default Hero;
