"use client";

import React from "react";
import { useState } from "react";
import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "66ac8e3c-28cc-4676-84c1-a3b015f95e1d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="flex flex-col sm:flex-row justify-around gap-2 py-12 bg-stone-300"
    >
      <div className="flex flex-col justify-center items-center gap-6 pl-10">
        <div className="flex items-center ">
          <MdLocalPhone />
          <span className="text-sm sm:text-base ml-2">+977 9840499100</span>
        </div>
        <div className="flex items-center ">
          <MdLocationPin />
          <span className="text-sm sm:text-base ml-2">
            Samakhushi Kathmandu, Nepal
          </span>
        </div>
        <div className="flex items-center ">
          <MdEmail />
          <span className="text-sm sm:text-base ml-2">
            adhikaribroo281@gmail.com
          </span>
        </div>
      </div>
      <div className="w-full sm:w-1/2  sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-2xl md:text-4xl px-4 font-extrabold text-black mt-4 font-Ubuntu">
          Contact Me
        </h2>
        <div className="bg-transparent shadow-sm rounded px-4  pb-8 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="66ac8e3c-28cc-4676-84c1-a3b015f95e1d"
            ></input>
            <div>
              <label
                htmlFor="name"
                className="bg-transparent block text-sm font-medium text-gray-600 font-Ubuntu"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="bg-transparent text-gray-600 font-Ubuntu caret-green-1 mt-1 p-3 block w-full border  rounded-md shadow-sm focus:outline-none focus:border-green-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 font-Ubuntu"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-transparent text-gray-600 font-Ubuntu caret-green-1 mt-1 p-3 block w-full border rounded-md shadow-sm focus:outline-none focus:border-green-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 font-Ubuntu"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className=" bg-transparent font-Ubuntu mt-1 p-3 block w-full border caret-green-1  rounded-md shadow-sm focus:outline-none focus:border-green-1"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="max-w-36 font-Ubuntu flex justify-center py-3 px-4  border-transparent rounded-md shadow-sm text-white bg-black hover:bg-bg-2 hover:text-black focus:outline-none  focus:ring "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <span className="text-xl sm:text-2xl text-green-500 text-center font-Ubuntu">
          {result}
        </span>
      </div>
    </section>
  );
};

export default Contact;
