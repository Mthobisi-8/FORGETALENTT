import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Add Navbar Here */}
        <div className="min-h-screen flex flex-col">
          <ScrollToTop /> {/* Add ScrollToTop component */}
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
          <AIChatbot /> {/* ✅ Ensure AIChatbot doesn't block content */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;