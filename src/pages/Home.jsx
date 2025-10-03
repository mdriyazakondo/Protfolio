import React from "react";
import HomeRoot from "../components/Home/Home";
import Expreance from "../components/Home/Expreance";
import About from "./About";
import Skills from "./Skills";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import Contact from "./Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HomeRoot />
      <Expreance />
      <About />
      <SkillSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
