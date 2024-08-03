"use client";

import React from "react";
import { useState } from "react";

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
    <section id="contact" className=" bg-zinc-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-500 text-center mb-8 font-Ubuntu">
          Contact Me
        </h2>
        <div className=" bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="66ac8e3c-28cc-4676-84c1-a3b015f95e1d"
            ></input>
            <div>
              <label
                htmlFor="name"
                className="bg-transparent block text-sm font-medium text-gray-100 font-Ubuntu"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className=" bg-transparent  text-gray-100 font-Ubuntu mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100 font-Ubuntu"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" bg-transparent  text-gray-100 font-Ubuntu mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-100 font-Ubuntu"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="  bg-gray-500 font-Ubuntu mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full font-Ubuntu flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <span className="text-2xl text-green-500 text-center font-Ubuntu">{result}</span>
    </section>
  );
};

export default Contact;
