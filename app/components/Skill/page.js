import React from "react";

const Skill = () => {
  return (
    <section className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-8 font-filroy">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Languages
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-filroy">C/C++</li>
              <li className="mb-2 text-gray-500 font-filroy">HTML/CSS</li>
              <li className="mb-2 text-gray-500 font-filroy">JavaScript</li>
              <li className="mb-2 text-gray-500 font-filroy">Ruby</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Frontend
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-filroy">React</li>
              <li className="mb-2 text-gray-500">Next.js</li>
              <li className="mb-2 text-gray-500">BootStrap</li>
              <li className="mb-2 text-gray-500">Tailwind</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Backend
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-filroy">Node.js</li>
              <li className="mb-2 text-gray-500 font-filroy">Express.js</li>
              <li className="mb-2 text-gray-500 font-filroy">MongoDB</li>
              <li className="mb-2 text-gray-500 font-filroy">MySQLExpress</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Others
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-filroy">Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
