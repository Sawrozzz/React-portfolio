"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import About from "../About/page";
const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <>
      <nav className="w-full bg-blue-400 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/*logo*/}
              <Link href="/">
                <Image src="/logo.png" alt="logo" height={20} width={55} />
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
                      className="  focus:border-none active: border-none"
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
                <li className=" font-sans pd-6 text-xl text-black py-2 md:px-6 text-center  md:border-b-0hover:transform hover:scale-105 transition-transform   ">
                  <Link href="#about" onClick={() => setNavBar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pd-6 font-sans text-xl text-black py-2 md:px-6 text-center md:border-b-0 hover:transform hover:scale-105 transition-transform   ">
                  <Link href="#project" onClick={() => setNavBar(!navbar)}>
                    Project
                  </Link>
                </li>
                <li className="pd-6 font-sans text-xl text-black py-2 md:px-6 text-center  md:border-b-0hover:transform hover:scale-105 transition-transform   ">
                  <Link href="#skill" onClick={() => setNavBar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="pd-6 font-sans text-xl text-black py-2 md:px-6 text-center  hover:transform hover:scale-105 transition-transform   ">
                  <Link href="#contact" onClick={() => setNavBar(!navbar)}>
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
