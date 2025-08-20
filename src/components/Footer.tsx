import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";

// Initialize EmailJS with your User ID (move to index.js or App.js for global initialization if preferred)
emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS User ID

const Footer = () => {
  const [email, setEmail] = useState("");

  // Handle subscribe button click
  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    const emailParams = {
      user_email: email,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your actual EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual EmailJS Template ID
        emailParams,
        "YOUR_USER_ID" // Replace with your actual EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Subscription successful! Thank you for joining our newsletter.");
          setEmail(""); // Clear the input field
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Subscription failed, please try again later.");
        }
      );
  };

  return (
    <footer className="bg-gradient-to-br bg-gray-800 border-pink-950">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Quick Links */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/testing-centre" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  Testing Centre
                </Link>
              </li>
              <li>
                <Link to="/Referral" className="text-[hsl(190,60%,90%)] hover:text-purple-400 transition duration-300 text-sm sm:text-base">
                  Corporate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[hsl(190,60%,90%)] text-sm sm:text-base">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-500" />
                <a href="mailto:talent@forgeacademy.co.za" className="hover:text-pink-400 transition duration-300">
                  talent@forgeacademy.co.za
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <a href="tel:+27108803795" className="hover:text-pink-400 transition duration-300">
                  +27 10 880 3795
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/ForgeAcademySA" className="text-[hsl(190,60%,90%)] hover:text-purple-900 transition duration-300 transform hover:scale-125">
                <Facebook className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a href="https://www.linkedin.com/company/forgeacademy/posts/?feedView=all" className="text-[hsl(190,60%,90%)] hover:text-purple-900 transition duration-300 transform hover:scale-125">
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a href="https://www.instagram.com/forge_academy?igsh=MTNiM3h5bWx6ZTZyag==" className="text-[hsl(190,60%,90%)] hover:text-purple-900 transition duration-300 transform hover:scale-125">
                <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a href="https://www.tiktok.com/@forge_academy?_t=ZM-8ukq5Z0EHhP&_r=1" className="text-[hsl(190,60%,90%)] hover:text-purple-900 transition duration-300 transform hover:scale-125">
                <FaTiktok className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[hsl(270,50%,15%)]/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Newsletter</h3>
            <p className="text-[hsl(190,60%,90%)] mb-4 text-sm sm:text-base">Subscribe for updates on new courses and promotions</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[hsl(190,60%,90%)] bg-[hsl(270,50%,20%)]/50 border-[hsl(190,60%,90%)] placeholder:text-purple-950 focus:ring-pink-500 focus:border-pink-500 text-sm sm:text-base"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-pink-500 hover:bg-pink-600 text-[hsl(190,60%,90%)] transition duration-300 rounded-2xl text-sm sm:text-base px-4 py-2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-pink-950 text-center text-[hsl(190,60%,90%)] text-sm">
          <p>© {new Date().getFullYear()} Forge Talent. All rights reserved.</p>
        </div>
      </div>
      <style>
        {`
          /* Responsive styles */
          @media (max-width: 768px) {
            .container {
              padding-left: 12px;
              padding-right: 12px;
            }
            .grid {
              grid-template-columns: 1fr 1fr; /* 2 columns for tablets */
              gap: 4px;
            }
            .text-lg {
              font-size: 1rem; /* Smaller heading size */
            }
            .text-sm {
              font-size: 0.875rem; /* Adjust text size for smaller screens */
            }
            .p-6 {
              padding: 1rem; /* Reduce padding */
            }
            .h-6 {
              height: 1.25rem; /* Smaller icons for social links */
              width: 1.25rem;
            }
            .flex-col {
              flex-direction: column; /* Stack newsletter input and button */
            }
            .px-4 {
              padding-left: 0.75rem;
              padding-right: 0.75rem;
            }
            .py-2 {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          }

          @media (max-width: 480px) {
            .grid {
              grid-template-columns: 1fr; /* Single column for mobile */
              gap: 12px;
            }
            .text-lg {
              font-size: 0.875rem; /* Even smaller heading */
            }
            .text-sm {
              font-size: 0.75rem; /* Smaller text for mobile */
            }
            .p-4 {
              padding: 0.75rem; /* Further reduce padding */
            }
            .h-6 {
              height: 1rem; /* Even smaller icons */
              width: 1rem;
            }
            .px-4 {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .py-2 {
              padding-top: 0.375rem;
              padding-bottom: 0.375rem;
            }
            .gap-4 {
              gap: 0.5rem; /* Reduce gap for social icons */
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;