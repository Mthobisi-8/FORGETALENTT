import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Referral from "./pages/Referral";
import Contact from "./pages/Contact";
import TestingCentre from "./pages/TestingCentre";
import Recruit from "./pages/Recruit";
import NotFound from "./pages/NotFound";
import AIChatbot from "./components/AIChatbot";
import Hero from "./components/Hero";
import GetHiredPage from "./pages/GetHired";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if the page was reloaded using localStorage
    const isReload = localStorage.getItem('pageReloaded') !== 'true';
    if (isReload) {
      setShowSplash(true);
      localStorage.setItem('pageReloaded', 'true');
      // Hide splash screen after 2 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

   useEffect(() => {
    return () => {
      localStorage.removeItem('pageReloaded');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showSplash ? (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-[100]">
              <img
                src="/Logo.svg" 
                alt="App Logo"
                className="w-32 h-32 sm:w-48 sm:h-48 animate-pulse"
              />
            </div>
          ) : (
            <div className="min-h-screen flex flex-col">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Hero" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/testing-centre" element={<TestingCentre />} />
                <Route path="/recruit" element={<Recruit />} />
                <Route path="/GetHiredPage" element={<GetHiredPage />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <AIChatbot />
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;