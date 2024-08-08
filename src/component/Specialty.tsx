import React from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Photoshop", level: 75, color: "#FF5733" },
  { name: "jQuery", level: 60, color: "#FFC300" },
  { name: "HTML5", level: 85, color: "#DAF7A6" },
  { name: "CSS3", level: 90, color: "#C70039" },
  { name: "WordPress", level: 70, color: "#900C3F" },
  { name: "SEO", level: 65, color: "#581845" },
];

export const Specialty: React.FC = () => {
  return (
    <div className="p-10">
      <div className="text-center mb-10">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          My Specialty
        </h1>
        <h2
          className="text-2xl text-gray-700 mb-4"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          My Skills
        </h2>
        <p
          className="text-gray-700 mb-8"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span style={{ fontFamily: "Quicksand, sans-serif" }}>
                {skill.name}
              </span>
              <span style={{ fontFamily: "Quicksand, sans-serif" }}>
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="h-4 rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                  transition: "width 1s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
