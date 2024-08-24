import React from "react";
import {
  HtmlIcon,
  JavascriptIcon,
  NextJsIcon,
  Bootstrap5Icon,
  TailwindCSSIcon,
  ReactIcon,
  CSS3Icon,
  GitHubIcon,
  GitIcon,
  CPlusPlusIcon,
  NodeJsIcon,
  ExpressJsLightIcon,
  MySQLIcon,
  MongoDBIcon,
} from "developer-icons";

const Skill = () => {
  // const MySkills = [
  //   {
  //     image : <GitIcon />,
  //     name: "Git",
  //   },
  //   {
  //     image: <GitHubIcon />,
  //     name: "GitHub",
  //   },
  //   {
  //     image: <NodeJsIcon />,
  //     name: "NodeJS",
  //   },
  //   {
  //     image: <ExpressJsDarkIcon />,
  //     name: "ExpressJS",
  //   },
  //   {
  //     image: <MongoDBIcon />,
  //     name: "MOngoDB",
  //   },
  //   {
  //     image: <MySQLIcon />,
  //     name: "SQLExpress",
  //   },

  //   {
  //     image: <ReactIcon />,
  //     name: "ReactJS",
  //   },
  //   {
  //     image: <NextJsIcon />,
  //     name: "NextJS",
  //   },
  //   {
  //     image: <Bootstrap5Icon />,
  //     name: "BootStraps",
  //   },
  //   {
  //     image: <TailwindCSSIcon />,
  //     name: "Tailwind CSS",
  //   },
  //   // {
  //   //   image: "/c.png",
  //   //   name: "C",
  //   // },
  //   {
  //     image: <CPlusPlusIcon />,
  //     name: "C++",
  //   },
  //   {
  //     image: <HtmlIcon />,
  //     name: "HTML",
  //   },
  //   {
  //     image: <CSS3Icon />,
  //     name: "CSS",
  //   },
  //   {
  //     image: <JavascriptIcon />,
  //     name: "JavaScript",
  //   },
  // ];
  return (
    <section id="skill" className="py-12 bg-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black px-4 mb-8 font-Lato">
          My Skills
        </h2>
        <div className="flex gap-3 items-center justify-between">
          <MongoDBIcon />
          <NodeJsIcon />
          <ExpressJsLightIcon />
          <MySQLIcon />
          <ReactIcon />
          <NextJsIcon />
          <Bootstrap5Icon />
          <TailwindCSSIcon />
          <CPlusPlusIcon />
        </div>
      </div>
    </section>
  );
};
export default Skill;
