import React, { useState } from "react";

interface EducationItem {
  degree: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "Master Degree Graphic Design",
    description: "Detailed description of the Master Degree in Graphic Design.",
  },
  {
    degree: "Bachelor Degree of Computer Science",
    description:
      "Detailed description of the Bachelor Degree in Computer Science.",
  },
  {
    degree: "Diploma in Information Technology",
    description:
      "Detailed description of the Diploma in Information Technology.",
  },
  {
    degree: "High School Secondary Education",
    description: "Detailed description of the High School Secondary Education.",
  },
];

export const Education: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-10">
      <div className="text-center mb-10">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          Education
        </h1>
        <h2
          className="text-2xl text-gray-700 mb-4"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          Education
        </h2>
      </div>
      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <div
              className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <h3
                className="text-xl"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                {item.degree}
              </h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 bg-white"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
