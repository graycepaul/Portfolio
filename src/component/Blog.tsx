import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

import { Parallax } from "react-scroll-parallax";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  comments: number;
  content: string;
  img: string;
}

export const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Renovating National Gallery",
      date: "April 14, 2018",
      category: "Web Design",
      comments: 4,
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      img: blog1,
    },
    {
      title: "Wordpress for a Beginner",
      date: "April 14, 2018",
      category: "Web Design",
      comments: 4,
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      img: blog2,
    },
    {
      title: "Make website from scratch",
      date: "April 14, 2018",
      category: "Inspiration",
      comments: 4,
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      img: blog3,
    },
  ];

  return (
    <div className="p-10">
      <Parallax className="p-10" speed={-5}>
        <div className=" font-quicksand mb-10">
          <h1 className="text-4xl font-bold mb-2">Blogs</h1>
          <h2 className=" font-extralight mb-6 text-gray-500">Recent Posts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500">
                  {post.date} | {post.category} | {post.comments} Comments
                </p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <p className="text-xs text-gray-500">
                  HTML5 Bootstrap Template by colorlib.com
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="w-full px-6 py-2 bg-red-600 text-white rounded">
            Load More
          </button>
        </div>
      </Parallax>
    </div>
  );
};
