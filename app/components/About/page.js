import React from "react";

const About = () => {
  return (
    <>
  <section id="#about">
 
    <div className="bg-gray-100 py-12 mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Saroj Adhikari
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A passionate web developer with a love for creating amazing user
            experiences.
          </p>
        </div>
        <div className="md:flex md:items-center md:justify-center">
        <div className="rounded-full overflow-hidden outline">
        <img src="image.png" alt="Placeholder" className=" object-cover cursor-pointer  transform hover:scale-105 transition-transform" />
      </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Web Developer</div>
          <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Saroj Adhikari</p>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
      
      </div>
    </div>
    </section>
    </>
  );
};

export default About;
