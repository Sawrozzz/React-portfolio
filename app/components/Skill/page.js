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

import OrbitingCircles from "@/components/ui/orbiting-circles";

const Skills = ()=> {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-300 dark:bg-zinc-900 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <NextJsIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={40}
        reverse
      >
        <MongoDBIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      ></OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <NodeJsIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={120}
        reverse
      >
        <TailwindCSSIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={30}
        radius={120}
      >
        <Bootstrap5Icon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <GitHubIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <GitIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={30}
      >
        <ExpressJsLightIcon />
      </OrbitingCircles>
    </div>
  );
}



export default Skills;
