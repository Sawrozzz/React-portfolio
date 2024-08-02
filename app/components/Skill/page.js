import React from "react";
import Image from "next/image";

const Skill = () => {
const tools = [
  {
    image: "/git.svg",
    name:"Git",
  },
  {
    image: "/githubb.svg",
    name:"GitHub",
  },
];

  const backend = [
    {
      image: "/node.svg",
      name:"NodeJS",
    },
    {
      image: "/express.svg",
      name:"ExpressJS",
    },
    {
      image: "/mongo.svg",
      name:"MOngoDB",
    },
    {
      image: "/sql.svg",
      name:"SQLExpress",
    },
  ];
  const frontend = [
    {
      image: "/react.svg",
      name:"ReactJS",
    },
    {
      image: "/next.svg",
      name:"NextJS",
    },
    {
      image: "/bootstrap.svg",
      name:"BootStraps",
    },
    {
      image: "/tailwind.svg",
      name:"Tailwind CSS",
    },
  ];
  const languages = [
    {
      image: "/c.png",
      name:"C",
    },
    {
      image: "/C++.svg",
      name:"C++",
    },
    {
      image: "/html.svg",
      name:"HTML",
    },
    {
      image: "/css.svg",
      name:"CSS",
    },
    {
      image: "/js.svg",
      name:"JavaScript",
    },
  ];
  return (
    <section id="skill" className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-8 font-filroy">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className=" bg-slate-500 rounded-lg shadow-md p-6 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Languages
            </h3>
            <div className="flex flex-wrap gap-5 ">
              {languages.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    width={42}
                    height={42}
                    src={skill.image}
                    alt={`${skill.name}-image`}
                    className="border-2 border-zinc-300 bg-transparent object-cover lg:w-2/2 rounded-full cursor-pointer"
                  />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-500 rounded-lg shadow-md p-6 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-5">
              {frontend.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    width={42}
                    height={42}
                    src={skill.image}
                    alt={`${skill.name}-image`}
                    className="border-2 border-zinc-300 bg-transparent object-cover lg:w-2/2 rounded-full cursor-pointer"
                  />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className=" bg-slate-500 rounded-lg shadow-md p-6 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Backend
            </h3>
            <div className="flex flex-wrap gap-5">
              {backend.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    width={42}
                    height={42}
                    src={skill.image}
                    alt={`${skill.name}-image`}
                    className="border-2 border-zinc-300 bg-transparent object-cover lg:w-2/2 rounded-full cursor-pointer"
                  />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className=" bg-slate-500 rounded-lg shadow-md p-6 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Others
            </h3>
            <div className="flex flex-wrap gap-5 ">
              {tools.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={skill.image}
                    width={42}
                    height={42}
                    alt="frontend-images"
                    className=" bg-transparent  object-cover lg:w-2/2  rounded-full cursor-pointer "
                  />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
