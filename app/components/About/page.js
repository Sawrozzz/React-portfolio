import React from "react";

const About = () => {
  return (
    <>
      <section id="#about">
        <div className=" bg-bg-2 py-12 mt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold font-sans tracking-wide uppercase">
                About Me
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white font-sans">
                Hi, I'm Saroj Adhikari
              </p>
              <div className="uppercase tracking-wide text-2xl text-indigo-600 font-extrabold font-sans mt-5">
                Web Developer
              </div>
              <p className="mt-4 mb-3 max-w-2xl text-xl lg:mx-auto text-white font-sans">
                A passionate web developer with an optimastic enthusium to solve
                the given task.
              </p>
            </div>
            <div className="md:flex md:items-center md:justify-center">
              <div className="bg-blue-400 transform hover:scale-105 transition-transform object-fit ">
                <img
                  src="image.png"
                  alt="Placeholder"
                  className="transform hover:scale-195 transition-transform"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <p className="block mt-1 text-2xl leading-tight font-semibold text-white font-sans  ">
                  My Hobbies
                </p>
                <p className="mt-2 text-white font-sans">
                  Talking about my hobbies, I am deeply passionate about
                  football with a great inspiration in Messi I started playing
                  football since I was a Child. Beyond football, I like watching
                  anime. Among many animes , One Piece is my favourite anime of
                  all time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
