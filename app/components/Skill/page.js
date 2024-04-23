import React from "react";

const Skill = () => {
  return (
    <section className="bg-bg-2 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-8 font-sans">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-sans">
              Language's
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-sans">C/C++</li>
              <li className="mb-2 text-gray-500 font-sans">HTML/CSS</li>
              <li className="mb-2 text-gray-500 font-sans">JavaScript</li>
              <li className="mb-2 text-gray-500 font-sans">Ruby</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-sans">
              Frontend
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-sans">React</li>
              <li className="mb-2 text-gray-500">Next.js</li>
              <li className="mb-2 text-gray-500">BootStrap</li>
              <li className="mb-2 text-gray-500">Tailwind</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-sans">
              Backend
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-sans">Node.js</li>
              <li className="mb-2 text-gray-500 font-sans">Express.js</li>
              <li className="mb-2 text-gray-500 font-sans">MongoDB</li>
              <li className="mb-2 text-gray-500 font-sans">MySQLExpress</li>
            </ul>
          </div>
          <div className="bg-bg-2 rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-sans">
              Other's
            </h3>
            <ul>
              <li className="mb-2 text-gray-500 font-sans">Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
