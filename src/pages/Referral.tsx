import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, HeartHandshake, BookPlus, Table2 } from "lucide-react";

const Referral: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  const [openCard, setOpenCard] = useState(null);

  const cardContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const cardStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    transition: "400ms",
    backgroundColor: "#374151",
    minWidth: "200px",
  };

  const tipStyle: React.CSSProperties = {
    fontSize: "1em",
    fontWeight: 700,
  };

  const secondTextStyle: React.CSSProperties = {
    fontSize: "0.7em",
  };

  const bookStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    backgroundColor: "#1F2937",
    boxShadow: "1px 1px 12px #000",
    transformStyle: "preserve-3d",
    perspective: "2000px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "transparent",
  };

  const coverStyle: React.CSSProperties = {
    top: 0,
    position: "absolute",
    backgroundColor: "rgb(17, 24, 39)",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.5s",
    transformOrigin: "left",
    boxShadow: "1px 1px 12px #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  };

  const insideStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(31, 41, 55)",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    overflowY: "auto",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bolder",
    color: "#38BDF8",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "rgb(2, 132, 199)",
    fontSize: "16px",
  };

  const handleToggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

    useEffect(() => {
    // Clear session storage to restart session-specific data
    sessionStorage.clear();
  }, []);

  
  return (
    <>
      <div className="fixed inset-0 z-[-1] vr-background">
        <div className="particle-layer" />
        <div className="absolute inset-0 bg-black/40 pointer-events-auto" />
      
      </div>
      <Header />

      {/* Hero Section */}
     
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col text-white mt-10">
  <div className="container mx-auto flex flex-col items-center justify-center text-center py-16 mb-8 lg:flex-row lg:items-center">
    <div className="lg:w-1/2">
      <h1 className="text-4xl font-extrabold mb-6 italic text-white">
        Empower Your Organization with Essential Tech Skills
      </h1>
      <p className="text-lg max-w-2xl mb-8 text-gray-200">
        We provide online and on-site technical training, corporate
        programming workshops, and help scale your teams by sourcing and
        assessing technical candidates for data-driven, high-performing
        problem solvers in your business.
      </p>
      <Button asChild className="bg-purple-600 hover:bg-sky-700 rounded-xl font-bold">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </div>
        <div className="w-full md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto mt-16 rounded-3xl overflow-hidden ">
  <iframe
    className="w-full h-[400px]"
    src="https://lottie.host/embed/917d01cf-4898-40a8-802f-b3a1e7df7cde/Yr2OW458Rq.lottie"
    title="Lottie Animation"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-1 mb-8">
        <div className="container mx-auto text-center py-2">
          <h2 className="text-3xl font-bold text-gradient mb-12 italic py-1 bg-gradient-to-r from-sky-400 to-pink-600 text-white">
            Bridge the Technology Skills Gap with Forge Talent
          </h2>
          <style>
            {`
              @media (max-width: 768px) {
                .service-card {
                  width: 100% !important;
                }
              }
              @media (min-width: 769px) {
                .service-card {
                  width: 200px;
                }
              }
            `}
          </style>
          <div
            style={cardContainerStyle}
            onMouseEnter={(e) => {
              const cards = e.currentTarget.children;
              for (const card of cards) {
                (card as HTMLElement).style.filter = "blur(10px)";
                (card as HTMLElement).style.transform = "scale(0.9)";
              }
            }}
            onMouseLeave={(e) => {
              const cards = e.currentTarget.children;
              for (const card of cards) {
                (card as HTMLElement).style.filter = "none";
                (card as HTMLElement).style.transform = "scale(1)";
              }
            }}
          >
            {[
              {
                icon: <GraduationCap className="text-4xl text-purple-400 mx-auto" />,
                title: "Squad Training",
                description:
                  "Improve the proficiency of your global tech workforce with internationally recognised training programs.",
              },
              {
                icon: <HeartHandshake className="text-4xl text-purple-400 mx-auto" />,
                title: "Value Proposition for Employees",
                description:
                  "Exclusive employer partner discounts on bootcamps for your staff and their families.",
              },
              {
                icon: <BookPlus className="text-4xl text-purple-400 mx-auto" />,
                title: "Accredited Skill Development Programs",
                description:
                  "Gain B-BBEE points, tax benefits, and access to SETA subsidies with our customisable training solutions.",
              },
              {
                icon: <Table2 className="text-4xl text-purple-400 mx-auto" />,
                title: "Customized Training",
                description:
                  "Tailored digital strategy training designed to meet your business and technology needs.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-pink-500/40 service-card m-10"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.filter = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-sky-400">{service.icon}</div>
                  <p style={tipStyle} className="text-sky-400">
                    {service.title}
                  </p>
                  <p style={secondTextStyle} className="text-sky-300 font-extrabold">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* InfoCards Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-4xl font-bold text-gradient mb-8 italic bg-gradient-to-r from-sky-400 to-pink-600 py-1">
            Build a Future-Ready Workforce with Forge Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-bold">
            {[
              {
                img: "/Corp2.jpg",
                title: "Equip Entry-Level Employees with Our Learnership Programme",
                text: "Forge Academy provides a learnership that focuses on essential and in-demand IT skills in South Africa. Since every industry is rapidly becoming digital, tech credentials are valuable in all of them. Gaining the abilities necessary to propel growth in your company and improve workplace readiness are the goals of a National Certificate in Information Technology (Systems Development). This opportunity offers significant advantages to businesses and learners alike, such as tax savings and return on investment for B-BBEE. Our Learnership is a structured program that contributes to the appropriate reporting of the Workplace Skills Plan (WSP) by emphasizing genuine marketable skills and the workplace 30:70.",
              },
              {
                img: "/Corp3.jpg",
                title: "Upskill or Reskill Your Team with Group Training",
                text: "Businesses advance when they improve the quality of their personnel and gain from these skill-development initiatives adding value to their BBBEE rating. It's an opportunity you have with us. Develop your skills to meet international standards, permitting alternate certifications and career acceleration within your team, you can make sure that your team is strong, effective, and productive. In order to keep your teams current and relevant with the newest practices, you might also decide to retrain non-technical staff members to become proficient developers, data analysts, or decision-makers.",
              },
              {
                img: "/Corp4.jpg",
                title: "Enable Your Team to Be the Best It Can Be",
                text: "Align your tech skills strategy with your business goals to transform your organization. Our workshops and corporate training programs will result in improved teamwork and quick skill development in technical areas. Invest in staff upskilling and reskilling with customized programs to future-proof your company. Your talent pipeline can be upgraded to keep you ahead of the game.",
              },
              {
                img: "/Corp5.jpg",
                title: "Build Teams for Efficiency and Speed",
                text: "Are you trying to fill positions with highly skilled, motivated, and diverse developers? There are always applicants trying to advance inside your company. Our developers possess extensive programming knowledge in addition to a broad range of skills. Through our Code Review as a Service (CRAAS) platform, which leverages a human-driven code review process to provide your hiring team thorough input and scores of potential recruits, we would also be able to technically evaluate any developer candidate. To increase business efficiency and the effectiveness of your talent development program, execute developer evaluations fast and effectively with CRAAS.",
              },
            ].map((card, index) => (
              <Card
                key={index}
                className="bg-gray-400 border-purple-500/20 shadow-lg shadow-pink-900 rounded-3xl"
                style={{ height: "600px", overflow: "hidden" }}
              >
                <div
                  style={bookStyle}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 768) {
                      const cover = e.currentTarget.querySelector(".cover") as HTMLElement | null;
                      if (cover) cover.style.transform = "rotateY(-80deg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.innerWidth >= 768) {
                      const cover = e.currentTarget.querySelector(".cover") as HTMLElement | null;
                      if (cover) cover.style.transform = "rotateY(0deg)";
                    }
                  }}
                >
                  <div
                    className="cover "
                    style={{
                      ...coverStyle,
                      transform: openCard === index ? "rotateY(-80deg)" : "rotateY(0deg)",
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <img
                        src={card.img}
                        className="mx-auto mb-4 rounded-2xl w-full h-auto"
                        alt={card.title}
                        style={{ objectFit: "cover" }}
                      />
                      <h5 style={paragraphStyle}>{card.title}</h5>
                      {openCard !== index && (
                        <Button
                          className="mt-8 md:hidden items-center rounded-xl"
                          onClick={() => handleToggleCard(index)}
                          aria-label={`Open ${card.title}`}
                        >
                          OPEN
                        </Button>
                      )}
                    </CardContent>
                  </div>
                  <div className="ml-12" style={insideStyle}>
                    <p style={descriptionStyle}>{card.text}</p>
                    {openCard === index && (
                      <Button
                        className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-4 rounded-xl"
                        onClick={() => handleToggleCard(index)}
                        aria-label={`Close ${card.title}`}
                      >
                        CLOSE
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Referral;
