"use client";
import React from "react";
import { useState } from "react";
const Page = () => {
  const [click, setClick] = useState(false);
  const hamburgerMenu = () => {
    setClick(!click);
    console.log("Clicked");
  };
  return (
    <header className="flex items-center justify-between bg-green-400 py-4 px-6">
      <img className="h-12 w-13 mr-4 cursor-pointer" src="logo.png" alt="logo" />

      <nav className="hidden sm:block items-end justify-end">
        <ul className="flex justify-end items-end">
          <li className="mr-4">
            <a href="#" className=" text-black hover:text-white">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-white">
              Skills
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-white">
              Education
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Hamburger Menu for small screens */}
      <div class="flex flex-col justify-between h-6 w-6 cursor-pointer">
        <div class="w-full h-1 bg-gray-800"></div>
        <div class="w-full h-1 bg-gray-800 my-1"></div>
        <div class="w-full h-1 bg-gray-800"></div>
      </div>
    </header>
  );
};

export default Page;
