"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/*logo*/}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2>
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
