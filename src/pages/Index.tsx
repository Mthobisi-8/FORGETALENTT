import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TalentSurvey from "@/components/TalentSurvey";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import InteractiveFeature from "@/components/InteractiveFeature";
import "@/components/CSSNeeded/SnakeAnimation.css";
import "@/components/CSSNeeded/VRBackground.css";

const Index: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1] vr-background">
        <div className="particle-layer" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Pop-up Bubble */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm sm:items-center">
          <div className="inset-0 z-[-1] vr-background rounded-2xl p-8 max-w-md w-full mx-4 shadow-lg transform transition-all duration-300 scale-100 hover:scale-105 relative">
            <button
              className="absolute top-1 right-2 text-black hover:text-red-700 text-2xl font-extrabold"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center text-white mb-4">
              Are you looking to get hired or to enroll in a course?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center">
              <Link
                to="/Recruit"
                className="w-36 bg-gradient-to-r from-sky-700 via-gray-200 to-sky-500 text-gray-950 hover:text-lg hover:text-black rounded-3xl font-bold py-2 px-6 text-center transition-all"
                onClick={closePopup}
              >
                Get Hired
              </Link>
              <Link
                to="/Courses"
                className="w-36 bg-gradient-to-r from-pink-700 via-gray-300 to-pink-500 text-gray-950 hover:text-lg hover:bg-pink-700 hover:text-black rounded-3xl font-bold py-2 px-6 text-center transition-all"
                onClick={closePopup}
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <InteractiveFeature />
          <section className="py-16 bg-opacity-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 cssanimation leFadeIn">
                <h2 className="text-3xl font-bold mb-4 text-gradient text-white">
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-gray-200">Forge </span> Talent Assessment
                </h2>
                <p className="text-lg from-sky-200 to-blue-600">
                  Take our KIT-powered survey to discover the perfect course for your career goals
                </p>
              </div>
              <TalentSurvey />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
