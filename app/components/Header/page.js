import React from "react";
import About from "../About/page";
import Contact from "../Contact/page";
import NavBar from "../NavBar/page";
import Project from "../Project/page";
import Skill from "../Skill/page";
const Header = () => {
  return (
    <>
      <NavBar />
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Header;
