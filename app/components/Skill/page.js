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
  MicrosoftSQLServerIcon,
  NestJSIcon,
} from "developer-icons";

const Skill = () => {
  return (
    <section id="skill" className="py-12 bg-stone-300 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-extrabold text-black dark:text-white px-4 mb-8 font-Lato">
          My Skills
        </h2>
        <div className="flex gap-3 items-center justify-around flex-wrap ">
          <MongoDBIcon className="cursor-pointer dark:bg-white border border-green-600 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <NodeJsIcon className="cursor-pointer dark:bg-white border border-green-600 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <ExpressJsLightIcon className="cursor-pointer dark:bg-white border border-black rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <NestJSIcon className="cursor-pointer rounded-full border border-red-600  hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <MySQLIcon className="cursor-pointer border border-cyan-600 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2 " />
          <ReactIcon className="cursor-pointer border border-b-cyan-400  rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <NextJsIcon className="cursor-pointer  dark:bg-white rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2 " />
          <Bootstrap5Icon className="cursor-pointer border border-purple-500 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <TailwindCSSIcon className="cursor-pointer border border-cyan-400 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <CPlusPlusIcon className="cursor-pointer border border-blue-800 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <GitIcon className="cursor-pointer border border-orange-400 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <GitHubIcon className="cursor-pointer dark:bg-white rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
          <CSS3Icon className="cursor-pointer border border-blue-600 rounded-full hover:scale-125 transition-all duration-300 transform hover:translate-y-2" />
        </div>
      </div>
    </section>
  );
};
export default Skill;
