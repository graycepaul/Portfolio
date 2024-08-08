import React from "react";
import { Parallax } from "react-scroll-parallax";

export const AboutUs: React.FC = () => {
  return (
    <div className="p-10">
      <Parallax className="py-20" speed={-5}>
        <div className="mx-auto -mt-36">
          <h1 className="text-4xl font-extralight mb-6">About Us</h1>
          <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
          <p className="mb-4 font-light">
            Hi, I'm Jackson Ford. On her way, she met a copy. The copy warned
            the Little Blind Text, that where it came from, it would have been
            rewritten a thousand times, and everything that was left from its
            origin would be the word "and," and the Little Blind Text should
            turn around and return to its own, safe country.
          </p>
          <p className="mb-4 font-light">
            Even the all-powerful Pointing has no control over the blind texts.
            It is an almost unorthographic life. One day, however, a small line
            of blind text by the name of Lorem Ipsum decided to leave for the
            far World of Grammar.
          </p>
        </div>
      </Parallax>
    </div>
  );
};
