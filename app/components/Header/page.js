"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Page = () => {
  const [click, setClick] = useState(false);
  const hamburgerMenu = () => {
    setClick(!click);
    console.log("Clicked");
  };
  return (
    <header className="flex items-center justify-between bg-red-300 py-4 px-6">
      <img className="h-12 w-13 mr-4" src="logo.png" alt="logo" />

      <nav className="hidden sm:block items-end justify-end">
        <ul className="flex justify-end items-end">
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Skills
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Education
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
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
