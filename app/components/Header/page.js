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
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Header;
