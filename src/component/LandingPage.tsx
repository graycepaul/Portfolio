import React, { useState, useEffect } from "react";
// import img1 from "../assets/landing1.png";
// import img2 from "../assets/landing2.png";

import { useTransition, animated } from "@react-spring/web";

interface Message {
  heading: string;
  subheading: string;
  button: string;
  color: string;
}

export const LandingPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const messages: Message[] = [
    {
      heading: "Hi! I'm Grace Balogun",
      subheading: "Passionate about crafting innovative software solutions",
      button: "Download CV",
      color: "#D5C44A",
    },
    {
      heading: "I am a Software Developer",
      subheading:
        "Specializing in frontend development with React, Redux, and TypeScript",
      button: "View Portfolio",
      color: "#CCCCCC",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const transitions = useTransition(messages[index], {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="ml-1/4 p-10 mb-20 h-screen relative overflow-hidden">
      {transitions((style, item) => (
        <animated.div
          style={{
            ...style,
            background: item.color,
          }}
          className="absolute inset-0 bg-cover mb-20"
        >
          <div className="text-center mt-40">
            <h1 className="text-5xl font-bold">{item.heading}</h1>
            <p className="mt-4">{item.subheading}</p>
            <button className="mt-8 px-6 py-2 bg-gray-800 text-white rounded">
              {item.button}
            </button>
          </div>
        </animated.div>
      ))}
    </div>
  );
};
