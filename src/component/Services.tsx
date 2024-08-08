import React from "react";
import { Parallax } from "react-scroll-parallax";

interface Service {
  icon: string;
  title: string;
}

const services: Service[] = [
  { icon: "💡", title: "Graphic Design" },
  { icon: "🌐", title: "Web Design" },
  { icon: "🖥️", title: "Software" },
  { icon: "📱", title: "Application" },
];

export const Services: React.FC = () => {
  return (
    <div className="p-10">
      <Parallax
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        speed={-10}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-md text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </Parallax>
      <Parallax
        className="bg-yellow-400 p-10 text-center rounded-lg shadow-md mt-20"
        speed={-5}
      >
        <h2 className="text-2xl font-bold mb-4">I am happy to know you</h2>
        <p className="text-lg mb-4">that 300+ projects done successfully!</p>
        <button className="px-6 py-2 bg-black text-white rounded">
          Hire Me
        </button>
      </Parallax>
    </div>
  );
};
