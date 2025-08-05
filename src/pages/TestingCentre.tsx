import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentSurvey from "@/components/TalentSurvey";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const TestingCentre = () => {
    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
        <div className="fixed inset-0 z-[-1] vr-background">
  <div className="particle-layer" />

  {/* Add a subtle overlay to soften background without hiding animation */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
</div>
      <Header />
      
      
      
      {/* Coming Soon Banner */}
      <section className=" bg-red-200 text-center mt-20 m-8 rounded-2xl">
        <div className="text-red-600 p-8 font-bold text-3xl">
        🚀 Coming Soon: Pearson VUE Testing Centre at Forge Academy! Stay tuned for updates. 🚀
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Pearson VUE Section */}
      {/*  <section className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-10 text-gradient mt-0 ">
              Welcome to the Pearson VUE Testing Centre at Forge Academy
            </h1>
            <p className="text-xl mb-8 text-purple-200 mt-12">
              Your gateway to globally recognized certifications in a convenient and professional environment.
            </p>
            <Button variant="secondary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
    {/*    <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Why Choose Our Testing Centre?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Globally Recognized Certifications</h3>
                <p className="text-purple-300/80">Write exams for certifications like AWS, CompTIA, Cisco, and more.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">State-of-the-Art Facilities</h3>
                <p className="text-purple-300/80">Our testing centre is equipped with modern technology and a comfortable environment.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Convenient Location</h3>
                <p className="text-purple-300/80">Located at Forge Academy, making it easy for students and professionals to access.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Expert Support</h3>
                <p className="text-purple-300/80">Our staff is here to assist you with scheduling and exam preparation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/*
        <section className="bg-purple-900/20 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Take Your Exam?</h2>
            <p className="text-xl mb-8 text-purple-200">Book your seat today and take the next step in your career.</p>
            <Button variant="secondary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Book Now
            </Button>
          </div>
        </section>/
        /*}

        */}
       
      </main>
      <Footer />
    </div>
  );
};

export default TestingCentre;
