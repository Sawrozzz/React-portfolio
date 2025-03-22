import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section id="#about" className=" bg-stone-300 dark:bg-zinc-900 ">
        <div className=" py-12 mt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="lg:text-center flex justify-center items-center flex-col">
              <div className="max-w-64 max-h-64 bg-zinc-800 dark:bg-white overflow-hidden rounded-full ">
                <Image
                  src="/image.png"
                  alt="image"
                  width={500}
                  height={300}
                  className="object-cover filter grayscale-100 "
                />
              </div>

              <p className="mt-2 text-sm sm:text-2xl leading-8 font-thin tracking-tight   font-Ubuntu flex text-center dark:text-white">
                Hi, I am{" "}
                <span className="font-extrabold pl-2 sm:text-3xl dark:text-white">
                  {" "}
                  Saroj Adhikari
                </span>
              </p>
              <div className="  uppercase flex text-center text-2xl text-black dark:text-white font-extrabold font-Ubuntu mt-5">
                Web Developer
              </div>
              <p className="mt-4 mb-3 max-w-2xl text-xl lg:mx-auto text-black dark:text-white font-Ubuntu flex text-center">
                A passionate web developer with an optimastic enthusium to solve
                the given task.
              </p>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">
                  <a
                    className="dark:text-white"
                    href="Saroj Adhikari CV(update).pdf"
                    download="Saroj Adhikari CV(update).pdf"
                  >
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
