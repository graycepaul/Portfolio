import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Services } from "./Services";
import { LandingPage } from "./LandingPage";
import { Sidebar } from "./Sidebar";
import { AboutUs } from "./About";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { RecentWork } from "./Work";
import { Specialty } from "./Specialty";
import { Education } from "./Education";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="App flex font-quicksand mt-12">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <LandingPage />
          <AboutUs />
          <Services />
          <Specialty />
          <Education />
          <RecentWork />
          <Blog />
          <Contact />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default App;
