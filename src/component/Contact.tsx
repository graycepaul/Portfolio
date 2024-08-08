import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Contact: React.FC = () => {
  return (
    <div className="p-10 flex justify-center items-center min-h-screen">
      <Parallax
        className="w-full max-w-5xl p-10 shadow-2xl rounded-lg flex flex-col md:flex-row"
        speed={-5}
      >
        <div className="md:w-1/2 p-6">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">Contact</p>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span>{" "}
              graycepaul02@gmail.com
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span> Nigeria
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> +2349033314069
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-6">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-44 p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500 mt-4 md:mt-0"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            />
            <textarea
              placeholder="Message"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              style={{ fontFamily: "Quicksand, sans-serif" }}
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-red-600 text-white rounded hover:bg-gray-700 transition duration-200"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </Parallax>
    </div>
  );
};
