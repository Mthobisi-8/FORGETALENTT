import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1] vr-background">
  <div className="particle-layer" />

  {/* Add a subtle overlay to soften background without hiding animation */}
  <div className="absolute inset-0 bg-black/40 pointer-events-auto" />
</div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-transparent bg-gray-800" />
            <div className="relative z-10 animate-fade-in max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-heading mb-6 py-6 italic">
                Forge Talent: Your Path to Tech Success
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-sky-50 max-w-xl mx-auto mb-8">
                Empowering South Africa’s youth with career development and ICT opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  className="rounded-3xl w-full sm:w-auto bg-pink-500 hover:bg-sky-200 hover:text-black text-[hsl(190,60%,90%)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50"
                >
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button
                  asChild
                  className="rounded-3xl w-full sm:w-auto bg-transparent border border-pink-500 text-white hover:text-black hover:bg-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-gray-300 text-3xl sm:text-4xl font-bold mb-6 text-gradient italic">
                    Bridging the Gap Between Aspiration and Qualification
                  </h2>
                  <p className="text-base sm:text-lg text-white">
                    Forge Talent is a career development platform designed to help job seekers gain the skills and certifications they need to succeed. Our mission is to make high-quality education accessible, affordable, and convenient for everyone.
                  </p>

                  <div className="mt-6 space-y-4">
                    <p className="bg-gradient-to-r from-purple-400 to-pink-600 text-gray-200 bg-clip-text font-extrabold italic">
                      Forge Talent is a recruitment agency based in South Africa.
                    </p>
                    <ul className="pl-6 text-white list-disc space-y-2">
                      <li>✔️ Connecting talented youth with ICT sector opportunities.</li>
                      <li>✔️ Founded in 2023 to bridge the ICT skills gap in South Africa.</li>
                      <li>✔️ Specializing in software dev, network engineering, data analysis, and more.</li>
                    </ul>
                  </div>

                  <div className="mt-6 space-y-2 text-white">
                    <p>
                      Choosing Forge Talent is a major step toward a successful career in ICT or finding the ideal talent for your company.
                    </p>
                    <p>
                      We empower South Africa's youth, foster economic growth, and drive innovation. Let’s build the future together.
                    </p>
                    <p className="bg-gradient-to-r from-purple-400 to-pink-600 text-gray-200 bg-clip-text font-extrabold italic">
                      Contact us today to explore opportunities!
                    </p>
                       <Button asChild className="bg-purple-600 hover:bg-sky-700 rounded-xl font-bold">
                          <Link to="/contact">Contact Us</Link>
                        </Button>  
                  </div>
                </div>

                <div>
                  <img
                    src="https://cdn.gamma.app/rqy3owznzo24vup/generated-images/Tgo9l37SGKFnP4qJIgkGZ.jpg"
                    alt="Forge Talent"
                    className="rounded-lg shadow-lg w-full border border-purple-500/20 shadow-purple-900"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-14 text-gray-300 text-gradient italic">
                How Forge Talent Works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-gray-900 border border-pink-800 rounded-2xl h-56 p-4"
                  >
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mt-2">
                      {index + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-sky-500">
                      {step.title}
                    </h3>
                    <p className="text-purple-300/80 text-sm sm:text-base">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <Features />

          {/* Partners Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-white italic">
                Our Partners
              </h2>
              <div className="overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-6">
                  {[...partners, ...partners].map((partner, index) => (
                    <img
                      key={index}
                      src={partner.src}
                      alt={partner.alt}
                      className="h-24 sm:h-32 md:h-48 rounded-xl object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Steps
const steps = [
  {
    title: "Take the FORGE  Talent Survey",
    description: "Answer a few questions to identify your strengths and career goals.",
  },
  {
    title: "Get Personalised Recommendations",
    description: "Receive tailored course suggestions based on your survey results.",
  },
  {
    title: "Enroll and Start Learning",
    description: "Choose from self-paced or instructor-led courses.",
  },
  {
    title: "Earn Certifications",
    description: "Gain industry-recognised certifications and take the next step in your career.",
  },
];

// Partners
const partners = [
  { src: "/AWS_Partner.png", alt: "AWS Partner" },
  { src: "/Comptia_Partner.png", alt: "CompTIA Partner" },
  { src: "/LASBN_Partners.png", alt: "LASBN Partner" },
  { src: "/Nokia_Partner.png", alt: "Nokia Partner" },
  { src: "/UX_Partner.png", alt: "UX Partner" },
];

export default About;
