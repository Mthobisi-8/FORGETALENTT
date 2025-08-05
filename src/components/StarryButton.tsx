import React, { useState, ReactNode } from "react";

// Define props interface
interface StarryButtonProps {
  children: ReactNode; // Type for children prop (text, elements, etc.)
}

const StarryButton: React.FC<StarryButtonProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {/* Keyframes in a standard <style> tag */}
      <style>{`
        @keyframes animStar {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-135rem);
          }
        }

        @keyframes animStarRotate {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0);
          }
        }

        @keyframes gradient_301 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse_3011 {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "13rem",
          overflow: "hidden",
          height: "3rem",
          backgroundSize: "300% 300%",
          cursor: "pointer",
          position: "relative",          // Changed from "fixed" to work within flow
          margin: "0 auto",             // Center horizontally within parent
          backdropFilter: "blur(1rem)",
          borderRadius: "5rem",
          transition: "0.5s",
          animation: "gradient_301 5s ease infinite",
          border: isActive ? "double 4px #fe53bb" : "double 4px transparent",
          backgroundImage: `
            linear-gradient(#212121, #212121),
            linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%)
          `,
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <div
          id="container-stars"
          style={{
            position: "absolute",
            zIndex: isHovered ? 1 : -1,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            transition: "0.5s",
            backdropFilter: "blur(1rem)",
            borderRadius: "5rem",
            backgroundColor: isHovered ? "#212121" : "transparent",
          }}
        >
          <div
            id="stars"
            style={{
              position: "relative",
              background: "transparent",
              width: "200rem",
              height: "200rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10rem",
                left: "-100rem",
                width: "100%",
                height: "100%",
                animation: "animStarRotate 90s linear infinite",
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1%)",
                backgroundSize: "50px 50px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "-50%",
                width: "170%",
                height: "500%",
                animation: "animStar 60s linear infinite",
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1%)",
                backgroundSize: "50px 50px",
                opacity: 0.5,
              }}
            />
          </div>
        </div>

        <div
          id="glow"
          style={{
            position: "absolute",
            display: "flex",
            width: "12rem",
          }}
        >
          <div
            className="circle"
            style={{
              width: "100%",
              height: "30px",
              filter: "blur(2rem)",
              animation: "pulse_3011 4s infinite",
              zIndex: -1,
              background: isActive ? "#fe53bb" : "rgba(254, 83, 186, 0.636)",
            }}
          />
          <div
            className="circle"
            style={{
              width: "100%",
              height: "30px",
              filter: "blur(2rem)",
              animation: "pulse_3011 4s infinite",
              zIndex: -1,
              background: isActive ? "#fe53bb" : "rgba(142, 81, 234, 0.704)",
            }}
          />
        </div>

        <strong
          style={{
            zIndex: 2,
            fontFamily: "Avalors Personal Use",
            fontSize: "12px",
            letterSpacing: "5px",
            color: "#ffffff",
            textShadow: "0 0 4px purple",
          }}
        >
          {children}
        </strong>
      </button>
    </>
  );
};

export default StarryButton;