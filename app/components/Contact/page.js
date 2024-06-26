import React from "react";

const Contact = () => {
  return (
    <section className="bg-zinc-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-500 text-center mb-8 font-filroy">
          Contact Me
        </h2>
        <div className=" bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form
            className="space-y-6"
            action="https://getform.io/f/pamqmnoa"
            method="POST"
            encType="multipart/form-data"
          >
            <div>
              <label
                htmlFor="name"
                className="bg-transparent block text-sm font-medium text-gray-700 font-filroy"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className=" bg-transparent  font-filroy mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" bg-transparent  text-gray-700 font-filroy mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 font-filroy"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="  bg-transparent font-filroy mt-1 p-3 block w-full border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full font-filroy flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
