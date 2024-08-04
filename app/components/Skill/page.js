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
    <section id="skill" className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black  px-4 mb-8 font-Lato">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className=" rounded-lg shadow-md px-4 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-black bg-bg-2 font-Ubuntu">
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
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity font-Ubuntu">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className=" rounded-lg shadow-md px-4 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-black bg-bg-2 font-Ubuntu">
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
          <div className="  rounded-lg shadow-md px-4 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-black font-Ubuntu bg-bg-2">
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
          <div className="  rounded-lg shadow-md px-4 hover:transform hover:scale-105  transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-black bg-bg-2 font-Ubuntu">
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
