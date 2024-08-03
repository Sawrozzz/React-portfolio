"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <>
      <nav className="w-full bg-blue-700 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/*logo*/}
              <Link to="/" smooth={true} duration={500}>
                <h3 className=" cursor-pointer text-white">Saroj</h3>
              </Link>
              <div className="md:hidden">
                <button
                  className="px-2 text-gray-700 rounded-md outline-none focus:border-grey-400"
                  onClick={() => setNavBar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/cross.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className=" cursor-pointer focus:border-none active: border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" h-screen md:h-auto items-center justify-center md:flex">
                <li className=" font-Ubuntu cursor-pointer pd-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0hover:transform hover:scale-105 transition-transform   ">
                  <Link
                    to="about"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNavBar(!navbar)}
                  >
                    About
                  </Link>
                </li>
                <li className="pd-6 cursor-pointer font-Ubuntu text-xl text-white py-2 md:px-6 text-center md:border-b-0 hover:transform hover:scale-105 transition-transform   ">
                  <Link
                    to="project"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavBar(!navbar)}
                  >
                    Project
                  </Link>
                </li>
                <li className="pd-6 cursor-pointer font-poppins text-xl text-white py-2 md:px-6 text-center  md:border-b-0hover:transform hover:scale-105 transition-transform   ">
                  <Link
                    to="skill"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavBar(!navbar)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="pd-6  cursor-pointer font-poppins text-xl text-white py-2 md:px-6 text-center  hover:transform hover:scale-105 transition-transform   ">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavBar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
