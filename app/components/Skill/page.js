import React from "react";
import Image from "next/image";

const Skill = () => {
const tools = [
  {
    image: "/git.png",
  },
  {
    image: "/github.png",
  },
];

  const backend = [
    {
      image: "/node.png",
    },
    {
      image: "/express.png",
    },
    {
      image: "/mongo.png",
    },
    {
      image: "/sql.jpeg",
    },
  ];
  const frontend = [
    {
      image: "/React.png",
    },
    {
      image: "/nextt.webp",
    },
    {
      image: "/boot'.png",
    },
    {
      image: "/tailwind.png",
    },
  ];
  const languages = [
    {
      image: "/c.png",
    },
    {
      image: "/c++.png",
    },
    {
      image: "/html.png",
    },
    {
      image: "/css.png",
    },
    {
      image: "/js.png",
    },
  ];
  return (
    <section className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-8 font-filroy">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className=" rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Languages
            </h3>
            <div className="flex flex-wrap gap-5">
              {languages.map((skill, index) => (
                <Image
                  key={index}
                  width={42}
                  height={42}
                  src={skill.image}
                  alt="language-images"
                  className=" border-2 border-zinc-300 bg-transparent object-cover lg:w-2/2 rounded-full cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className=" rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-5 ">
              {frontend.map((skill, index) => (
                <Image
                  key={index}
                  src={skill.image}
                  width={42}
                  height={42}
                  alt="frontend-images"
                  className=" bg-transparent object-cover lg:w-2/2 rounded-full cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className=" rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Backend
            </h3>
            <div className="flex flex-wrap gap-5 ">
              {backend.map((skill, index) => (
                <Image
                  key={index}
                  src={skill.image}
                  width={42}
                  height={42}
                  alt="frontend-images"
                  className=" bg-transparent rounded-full object-cover lg:w-2/2 cursor-pointer "
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg shadow-md p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-filroy">
              Others
            </h3>
            <div className="flex flex-wrap gap-5 ">
              {tools.map((skill, index) => (
                <Image
                  key={index}
                  src={skill.image}
                  width={42}
                  height={42}
                  alt="frontend-images"
                  className=" bg-transparent  object-cover lg:w-2/2 rounded-full cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
