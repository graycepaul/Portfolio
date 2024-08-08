import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

import { useSpring, animated } from "@react-spring/web";

interface WorkItem {
  img: string;
  title: string;
  category: string;
}

const workItems: WorkItem[] = [
  { img: blog1, title: "Project 1", category: "Graphic Design" },
  { img: work1, title: "Project 2", category: "Web Design" },
  { img: blog2, title: "Project 3", category: "Software" },
  { img: work2, title: "Project 4", category: "Apps" },
  { img: blog3, title: "Project 5", category: "Graphic Design" },
  { img: work3, title: "Project 6", category: "Web Design" },
];

const WorkCard: React.FC<WorkItem> = ({ img, title, category }) => {
  const [hovered, setHovered] = React.useState(false);
  const props = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0px 10px 30px rgba(0, 0, 0, 0.1)"
      : "0px 0px 0px rgba(0, 0, 0, 0)",
  });

  return (
    <animated.div
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3
            className="text-xl font-semibold mb-2"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-gray-700"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            {category}
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export const RecentWork: React.FC = () => {
  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="py-2 font-bold">My Work</h1>
        <h2 className="text-xl text-gray-700 mb-12 font-extralight">
          Recent Work
        </h2>
        <div className="flex justify-between space-x-4 text-gray-600">
          <span>Graphic Design</span>
          <span>Web Design</span>
          <span>Software</span>
          <span>Apps</span>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {workItems.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="w-full py-2 px-6 bg-red-600 text-white rounded hover:bg-red-800 transition duration-200 mb-20">
          Load More
        </button>
      </div>
    </div>
  );
};
