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

  const formStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    backgroundColor: 'rgb(17, 24, 39)',
    borderRadius: '10px',
    overflow: 'hidden',
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(10deg)',
    transition: 'all 0.3s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    animation: 'formAnimation 0.1s ease-in-out',
  };

  const inputStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(17, 24, 39)',
    transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.1s ease-in-out',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    color: 'white',
    border: '2px solid rgba(139, 92, 246, 0.2)',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: 'none',
    paddingRight: '30px',
    backgroundColor: 'rgb(17, 24, 39)', // Matches form background
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E9D5FF%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '12px',
     transition: 'border-color 0.1s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    color:'Black' ,
    
    
  };

  const textareaStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(17, 24, 39)',
    transition: 'border-color 0.1s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    color: 'white',
    border: '2px solid rgba(139, 92, 246, 0.2)',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    minHeight: '110px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgb(88, 28, 135)',
    color: '#E9D5FF',
    fontSize: '16px',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    transform: 'rotateX(0deg)',
    transition: 'all 0.3s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  };

  const dropdownItemStyle: React.CSSProperties = {
  padding: '10px',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
  backgroundColor: 'rgb(17, 24, 39)', // Ensure item background matches form
};
  

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const serviceID = "service_elglbxq";
  const templateID = "template_q0qduon";
  const publicKey = "GZpn0xe2_QcxiSfgj";
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email.toLowerCase(), // Normalize email
    phone_number: formData.number,
    subject: formData.subject,
    purpose: formData.purpose,
    message: formData.message,
    to_email: "recruitment@forgeacademy.co.za",
  };
  console.log("Sending templateParams:", templateParams); // Debug log
  try {
    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    toast({
      title: "Message Sent!",
      description: "Your message has been successfully sent. We will get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "", number: "", purpose: "General Inquiry" });
  } catch (error) {
    console.error("Email sending error:", error); // Already present
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

  useEffect(() => {
    sessionStorage.clear();
  }, []);

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
        `
        
        }
      </style>
      <Header />
      <main className="flex-grow pt-24 mb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gradient text-gray-200 italic">Get in Touch</h1>
              <p className="font-bold text-gradient text-gray-50">
                Don't forget to include your cell number in case we can't reach you through email:
              </p>
              <form
                onSubmit={handleSubmit}
                style={formStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(-10deg)';
                }}
                className="bg-gray-300"
              >
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                />
                <select className="text-black"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  style={selectStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(1, 1, 3, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgb(139, 92, 246, 0.2)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(17, 24, 39)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgb(139, 92, 246, 0.2)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                >
                  <option value="General Inquiry">Select </option>
                  <option value="Support">Learnership</option>
                  <option value="Partnership">Internship</option>
                  <option value="Feedback">Courses </option>
                  <option value="Corporate">Corporate </option>

                </select>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.currentTarget) {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
                    }
                  }}
                />
                <Button
                  type="submit"
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(107, 33, 168, 0.3)';
                    e.currentTarget.style.fontSize = '17px';
                    e.currentTarget.style.transform = 'scale(1.05) rotateY(20deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(107, 33, 168, 0.2)';
                    e.currentTarget.style.fontSize = '16px';
                    e.currentTarget.style.transform = 'rotateX(-10deg)';
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
                  <Mail className="h-5 w-5 text-sky-400" />
                  <span className="text-sky-50">recruitment@forgeacademy.co.za</span>
                </div>
                <div className="flex items-center space-x-3 text-sky-200">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <span className="text-sky-50">+27 10 880 3795</span>
                </div>
                <div className="flex items-center space-x-3 text-sky-200">
                  <MapPin className="h-5 w-5 text-sky-400" />
                  <span className="text-sky-50">210 Epsom Avenue Randburg 2169</span>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9139528632945!2d27.9519986!3d-26.0363713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957730c314f9db%3A0x91803bcf42f371a5!2sForge%20Academy%20%26%20Labs!5e0!3m2!1sen!2sza!4v1741615409378!5m2!1sen!2sza"
                    width="400"
                    height="300"
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