import React from "react";
import dp from "../assets/dp.png";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 h-screen bg-gray-100 p-5 fixed pt-20">
      <div className="text-center">
        <img
          src={dp}
          alt="Profile"
          className="rounded-full mx-auto w-24 h-24"
        />
        <h1 className="text-xl font-bold mt-4">Grace Balogun</h1>
        <p className="text-blue-500">Software Developer in Nigeria</p>
      </div>
      <nav className="mt-10 text-center">
        <ul className="space-y-4 text-xs">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#education">EDUCATION</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
