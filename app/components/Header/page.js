'use client'
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from '@fortawesome/free-solid-svg-icons';
const Page = () => {
  const [click, setClick] = useState(false);
  const hamburgerMenu = () =>{
    setClick(!click);
    console.log("Clicked");
  }
  return (
    <header className="flex items-center justify-between bg-slate-400 py-4 px-6">
      <div className="flex items-center">
        <img className="h-10 w-auto mr-4" src="logo.png" alt="logo" />
        <nav className="hidden sm:block">
          <ul className="flex">
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
      </div>
      {/* Hamburger Menu for small screens */}
      <div className="block sm:hidden">
        <button className="text-white focus:outline-none" onClick={hamburgerMenu}>
        <FontAwesomeIcon icon='fa-soild fa-bars' />
        </button>
      </div>
    </header>
  );
};

export default Page;
