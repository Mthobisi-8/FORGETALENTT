import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    number: "",
    purpose: "General Inquiry",
  });

  useEffect(() => {
    emailjs.init("GZpn0xe2_QcxiSfgj"); // Initialize EmailJS with public key
  }, []);

  const formStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    backgroundColor: "rgb(17, 24, 39)",
    borderRadius: "10px",
    overflow: "hidden",
    perspective: "1000px",
    transformStyle: "preserve-3d",
    transform: "rotateX(10deg)",
    transition: "all 0.3s ease-in-out",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    animation: "formAnimation 0.1s ease-in-out",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "rgb(17, 24, 39)",
    color: "white",
    border: "2px solid rgba(139, 92, 246, 0.2)",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "16px",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: "none",
    paddingRight: "30px",
    backgroundImage:
      'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E9D5FF%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "12px",
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: "110px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "rgb(88, 28, 135)",
    color: "#E9D5FF",
    fontSize: "16px",
    cursor: "pointer",
    transform: "rotateX(0deg)",
    transition: "all 0.3s ease-in-out",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    width: "100%",
    maxWidth: "200px",
    margin: "0 auto",
  };

  const dropdownItemStyle: React.CSSProperties = {
    padding: "10px",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "rgb(17, 24, 39)",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = "service_elglbxq";
    const templateID = "template_q0qduon";
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email.toLowerCase(),
      phone_number: formData.number,
      subject: formData.subject,
      purpose: formData.purpose,
      message: formData.message,
      to_email: "recruitment@forgeacademy.co.za",
    };
    console.log("Sending templateParams:", templateParams);
    try {
      await emailjs.send(serviceID, templateID, templateParams);
      toast({
        title: "Message Sent!",
        description: "Your message has been successfully sent. We will get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "", number: "", purpose: "General Inquiry" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-[-1] vr-background">
        <div className="particle-layer" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
      <style>
        {`
          @keyframes formAnimation {
            from {
              transform: rotateX(-30deg);
              opacity: 0;
            }
            to {
              transform: rotateX(0deg);
              opacity: 1;
            }
          }

          .input, .textarea, .select {
            transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }

          .input:hover, .textarea:hover, .select:hover,
          .input:focus, .textarea:focus, .select:focus {
            border-color: rgba(139, 92, 246, 0.2) !important;
            background-color: rgba(255, 255, 255, 0.2) !important;
            transform: scale(1.05);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
            outline: none;
          }

          .button:hover {
            background-color: rgba(107, 33, 168, 0.3) !important;
            font-size: 17px;
            transform: scale(1.05) rotateY(20deg);
          }

          /* Visually hidden labels for accessibility */
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
          }

          /* Ensure vertical stacking on mobile */
          @media (max-width: 768px) {
            .container {
              padding: 0 16px;
            }
            .grid {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            .form-container {
              max-width: 100%;
              padding: 16px;
            }
            .iframe-container {
              position: relative;
              padding-bottom: 56.25%;
              height: 0;
              overflow: hidden;
            }
            .iframe-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .text-3xl {
              font-size: 1.75rem;
            }
            .input, .textarea, .select {
              font-size: 14px;
            }
            .button {
              font-size: 14px;
              padding: 8px 16px;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              padding: 12px;
            }
            .text-3xl {
              font-size: 1.5rem;
            }
            .input, .textarea, .select {
              font-size: 12px;
            }
            .button {
              font-size: 12px;
              padding: 8px 12px;
            }
          }
        `}
      </style>
      <Header />
      <main className="flex-grow pt-24 mb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 form-container">
              <h1 className="text-3xl font-bold text-gradient text-gray-200 italic">Get in Touch</h1>
              <p className="font-bold text-gradient text-gray-50">
                Don't forget to include your cell number in case we can't reach you through email:
              </p>
              <form
                onSubmit={handleSubmit}
                style={formStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateX(0deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateX(-10deg)";
                }}
              >
                <label htmlFor="name" className="visually-hidden">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="input"
                />
                <label htmlFor="email" className="visually-hidden">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="input"
                />
                <label htmlFor="number" className="visually-hidden">
                  Phone Number
                </label>
                <Input
                  id="number"
                  type="tel"
                  placeholder="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="input"
                />
                <label htmlFor="purpose" className="visually-hidden">
                  Purpose
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  style={selectStyle}
                  className="select text-white"
                >
                  <option style={dropdownItemStyle} value="General Inquiry">
                    Select
                  </option>
                  <option style={dropdownItemStyle} value="Support">
                    Learnership
                  </option>
                  <option style={dropdownItemStyle} value="Partnership">
                    Internship
                  </option>
                  <option style={dropdownItemStyle} value="Feedback">
                    Courses
                  </option>
                  <option style={dropdownItemStyle} value="Corporate">
                    Corporate
                  </option>
                </select>
                <label htmlFor="subject" className="visually-hidden">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="input"
                />
                <label htmlFor="message" className="visually-hidden">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                  className="textarea"
                />
                <Button
                  type="submit"
                  style={buttonStyle}
                  className="button"
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(88, 28, 135)";
                    e.currentTarget.style.fontSize = "16px";
                    e.currentTarget.style.transform = "rotateX(-10deg)";
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gradient text-gray-200 italic">We are Here to Help</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sky-200">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span className="text-sky-50">talent@forgeacademy.co.za</span>
                </div>
                <div className="flex items-center space-x-3 text-sky-200">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span className="text-sky-50">+27 10 880 3795</span>
                </div>
                <div className="flex items-center space-x-3 text-sky-200">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <span className="text-sky-50">210 Epsom Avenue Randburg 2169</span>
                </div>
                <div className="iframe-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9139528632945!2d27.9519986!3d-26.0363713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957730c314f9db%3A0x91803bcf42f371a5!2sForge%20Academy%20%26%20Labs!5e0!3m2!1sen!2sza!4v1741615409378!5m2!1sen!2sza"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;