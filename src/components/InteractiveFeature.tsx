import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Star, Award, Target, Crown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Define the feature data structure with a route
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  route: string;
}

const features: Feature[] = [
  {
    icon: Star,
    title: "Build Skills",
    description: "Explore our courses to master in-demand technologies.",
    color: "text-yellow-400",
    route: "/courses",
  },
  {
    icon: Award,
    title: "Take A Test",
    description: "Explore our courses and take international exams at one of our Centers.",
    color: "text-purple-400",
    route: "/testing-centre",
  },
  {
    icon: Target,
    title: "Land Jobs",
    description: "Explore our courses to connect with top employers and join the team.",
    color: "text-blue-400",
    route: "/Recruit",
  },
  {
    icon: Crown,
    title: "Get In Touch",
    description: "Explore our courses to advance your professional journey by contacting us.",
    color: "text-green-400",
    route: "/Contact",
  },
];

const InteractiveFeature: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    toast({
      title: features[index].title,
      description: features[index].description.toLowerCase(),
    });
    navigate(features[index].route);
  };

  return (
    <div className="py-12">
      {/* Keyframes and styles for flip and rotating border */}
      <style>{`
        .flip-card-inner {
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card {
          background-color: transparent;
          width: 240px;
          height: 154px;
          perspective: 1000px;
          color: white;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }
        .flip-card::before {
          content: '';
          position: absolute;
          width: 100px;
          background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
          height: 130%;
          animation: rotBGimg 3s linear infinite;
          transition: all 0.2s linear;
          z-index: 0;
        }
        .flip-card::after {
          content: '';
          position: absolute;
          background: #171717; /* Matches the card background */
          inset: 5px;
          border-radius: 15px;
          z-index: 0;
        }
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 767px) {
          .flip-card {
            width: 100%;
            max-width: 100%;
          }
        }
        /* Optional hover effect for border (uncomment to use) */
        /*
        .flip-card:hover::before {
          background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
          animation: rotBGimg 3.5s linear infinite;
        }
        */
      `}</style>

        <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 justify-center w-full">

        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeIndex === index;

          return (
          <Card
  key={index}
  className={`flip-card  sm:w-[600px] transform transition-all duration-300 cursor-pointer border-2 border-pink-950 rounded-2xl hover:scale-105 ${
    isActive ? "border-purple-500 shadow-lg" : ""
  }`}
  onClick={() => handleCardClick(index)}
>

              <div
                className="flip-card-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  zIndex: 1, // Ensures content is above ::before and ::after
                }}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "1rem",
                    backgroundColor: "#171717",
                  }}
                >
                  <div
                    className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      isActive ? "animate-bounce" : ""
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-300">{feature.title}</h3>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "1rem",
                    backgroundColor: "#171717",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-muted-foreground text-sm px-4">{feature.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveFeature;