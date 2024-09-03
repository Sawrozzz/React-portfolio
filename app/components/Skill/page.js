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
} from "developer-icons";

const Skill = () => {
  return (
    <section id="skill" className="py-12 bg-stone-300 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-extrabold text-black dark:text-white px-4 mb-8 font-Lato">
          My Skills
        </h2>
        <div className="flex gap-3 items-center justify-around flex-wrap ">
          <MongoDBIcon className="cursor-pointer" />
          <NodeJsIcon className="cursor-pointer" />
          <ExpressJsLightIcon className="cursor-pointer dark:bg-white rounded-full" />
          <MySQLIcon className="cursor-pointer " />
          <ReactIcon className="cursor-pointer" />
          <NextJsIcon className="cursor-pointer  dark:bg-white rounded-full " />
          <Bootstrap5Icon className="cursor-pointer" />
          <TailwindCSSIcon className="cursor-pointer" />
          <CPlusPlusIcon className="cursor-pointer" />
          <GitIcon className="cursor-pointer" />
          <GitHubIcon className="cursor-pointer dark:bg-white rounded-full" />
          <CSS3Icon className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};
export default Skill;
