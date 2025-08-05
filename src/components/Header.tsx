import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import loho from "/Talent.png";
import StarryButton from "./StarryButton";
import "@/components/CSSNeeded/Font.css";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu is closed initially

  // Navigation Links for both desktop and mobile
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "UPSKILL", path: "/courses" },
    { name: "TESTING CENTRE", path: "/testing-centre", isHighlighted: true }, // Highlighted link
    { name: "CORPORATE", path: "/Referral" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4 max-w-screen-2xl bg-purple-900 "
      >
        <div className="flex items-center justify-between h-16 max-w-full"
         >
          {/* Logo */}
          <div className="flex items-center ml-0">
            <a href="/" className="text-2xl font-bold text-primary">
              <img
                src={loho}
                alt="Forgulant Logo"
                className=" bg-transparent w-32 h-14 object-contain   rounded-md"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-black text-white transition-colors border-b-2 border-transparent hover:border-purple-600 transform hover:scale-125 font-bold ${
                  item.isHighlighted
                    ? "bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold italic"
                    : ""
                }`} // Apply gradient effect to Testing Centre
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:block  text-purple-800">
          <Link to="/Recruit">
              <Button className="bg-gray-900 text-white font-extrabold hover:bg-white hover:text-black italic rounded-2xl">
              Get Hired
              </Button>
               
              
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-950 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full  shadow-lg transform transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center`}>
        <div className="fixed inset-0 z-[-1]">
  {/* Solid dark background */}
  <div className="absolute inset-0 bg-black" />

  {/* VR Animation background */}
  <div className="vr-background absolute inset-0" />

  {/* Particle layer for subtle movement */}
  <div className="particle-layer absolute inset-0" />
</div>
        {/* Close Button (X to close the sidebar) */}
        <button
          onClick={() => setIsOpen(false)} // Close the menu when X is clicked
          className="absolute top-4 right-4 text-gray-950"
        >
          <X size={28} />
        </button>

        {/* Logo in Mobile Menu */}
        <a href="/" className=" mt-28">
          <img src={loho} alt="ForgeTalent Logo" className="w-40 h-20 object-contain" />
        </a>

        {/* Sidebar Links */}
        <ul className="space-y-6 text-center w-full">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={` block p-4 text-white hover:text-black transform hover:scale-150 font-serif font-extrabold ${
                  item.isHighlighted ? " bg-gradient-to-r from-sky-400 to-pink-950 text-transparent bg-clip-text font-extrabold italic" : ""
                }`} // Apply same gradient effect as desktop
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <div className=" text-purple-800 ">
            <Link to="/Recruit">
              <Button className="bg-gray-700 text-sky-400 font-extrabold hover:bg-white italic rounded-xl hover:text-blue-900">
              Get Hired
              </Button>
               
              
            </Link>
            </div>
           
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
