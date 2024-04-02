"use client";
import React from "react";
import About from "../About/page";
import NavBar from "../NavBar/page";
const Header = () => {
  return (
    <>
      <NavBar />
    <About

    />
      <section id="blog" className="text-white h-screen  text-center flex">
        <h1 className="m-auto font-serif text-7xl text-purple-600 font-bold">
          Blog
        </h1>
      </section>
      <section
        id="skill"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-serif text-7xl text-purple-600 font-bold">
          Skills
        </h1>
      </section>
      <section id="contact" className="text-white h-screen  text-center flex">
        <h1 className="m-auto font-serif text-7xl text-purple-600 font-bold">
          Contact
        </h1>
      </section>
    </>
  );
};

export default Header;
