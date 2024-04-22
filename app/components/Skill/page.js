import React from "react";

const Skill = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Language's</h3>
            <ul>
              <li className="mb-2">C/C++</li>
              <li className="mb-2">HTML/CSS</li>
              <li className="mb-2">JavaScript</li>
              <li className="mb-2">Ruby</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul>
              <li className="mb-2">React</li>
              <li className="mb-2">Next.js</li>
              <li className="mb-2">BootStrap</li>
              <li className="mb-2">Tailwind</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Express.js</li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">MySQLExpress</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Other's</h3>
            <ul>
              <li className="mb-2">Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
