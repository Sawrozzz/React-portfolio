import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section id="#about">
        <div className=" bg-zinc-900 py-12 mt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="lg:text-center flex justify-center items-center flex-col">
              <h2 className="text-base text-indigo-600 font-semibold font-filroy tracking-wide uppercase mb-4 mt-2">
                About Me
              </h2>
              <div className="max-w-64 max-h-64 bg-blue-700 overflow-hidden rounded-full ">
                <Image
                  src="/image.png"
                  width={1100}
                  height={60}
                  className="object-cover filter grayscale-100 "
                />
              </div>

              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white font-filroy flex text-center">
                Hi, I am Saroj Adhikari
              </p>
              <div className="  uppercase flex text-center text-2xl text-indigo-600 font-extrabold font-filroy mt-5">
                Web Developer
              </div>
              <p className="mt-4 mb-3 max-w-2xl text-xl lg:mx-auto text-white font-filroy flex text-center">
                A passionate web developer with an optimastic enthusium to solve
                the given task.
              </p>
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">
                  <a href="Saroj's Resume.pdf" download="sarojCV.pdf">
                    Download CV
                  </a>
                </span>
                <span class="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
            <div className="md:flex md:items-center  md:justify-center flex justify-center text-center ">
              <div className="mt-4 md:mt-0 md:ml-6">
                <p className=" felx text-center block mt-4 mr-5 text-2xl leading-tight font-semibold text-white font-filroy  ">
                  My Hobbies
                </p>
                <p className="mt-2 text-white font-filroy">
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
