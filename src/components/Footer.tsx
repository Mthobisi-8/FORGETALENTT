import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState("");

  // Handle subscribe button click
  const handleSubscribe = () => {
    const emailParams = {
      user_email: email,
    };

    // Send the email using EmailJS
    emailjs
      .send("service_pmyuurw", "template_jfmkniv", emailParams, "user_id")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Subscription successful!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Subscription failed, please try again.");
        }
      );
  };

  return (
    <footer className="bg-gradient-to-br bg-gray-800 border-pink-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/testing-centre" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  Testing Centre
                </Link>
              </li>
              <li>
                <Link to="/Referral" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                  Corporate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Contact Us</h3>
            <div className="hidden lg:block">
              <ul className="space-y-2 text-[hsl(190,60%,90%)]">
                <li>Email: recruitment@forgeacademy.co.za</li>
                <li>Phone: +27 10 880 3795</li>
              </ul>
            </div>
            <div className="lg:hidden flex space-x-4">
              <a href="mailto:recruitment@forgeacademy.co.za" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+27108803795" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ForgeAcademySA" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300 transform hover:scale-125">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/forgeacademy/posts/?feedView=all" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300 transform hover:scale-125">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/forge_academy?igsh=MTNiM3h5bWx6ZTZyag==" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300 transform hover:scale-125">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@forge_academy?_t=ZM-8ukq5Z0EHhP&_r=1" className="text-[hsl(190,60%,90%)] hover:text-pink-400 transition duration-300 transform hover:scale-125">
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Newsletter</h3>
            <p className="text-[hsl(190,60%,90%)] mb-4">Subscribe for updates on new courses and promotions</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[hsl(190,60%,90%)] bg-[hsl(270,50%,20%)]/50 border-[hsl(190,60%,90%)] placeholder:text-[hsl(190,60%,70%)] focus:ring-pink-500 focus:border-pink-500"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-pink-500 hover:bg-pink-600 text-[hsl(190,60%,90%)] transition duration-300 rounded-2xl"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-pink-950 text-center text-[hsl(190,60%,90%)]">
          <p>© {new Date().getFullYear()} Forge Talent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;