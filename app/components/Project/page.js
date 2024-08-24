import React from "react";
import Image from "next/image";
import { GitHubIcon } from "developer-icons";
import { PiArrowSquareDownRightLight } from "react-icons/pi";
const Project = () => {
  const projects = [
    {
      title: "Real-Time Weather Forecast",
      image: "/weather.png",
      description:
        "This project gives the real time weather forecast, which use Api of OpenWeather. I have learned about fetching and asyncronous javascript with this project.",
      githubLink: "https://github.com/Sawrozzz/Weather-App",
      live: "https://weather-app-xi-liard.vercel.app/",
    },
    {
      title: "Full Stack Sign-Up",
      image: "/auth.png",
      description:
        "This is a full stack project for a login and signup page. For this I use react and bootstrap for frontend and Node with Express for Backend and MonogDB as a Database",
      githubLink: "https://github.com/Sawrozzz/Auth_FullStack",
    },
    {
      title: "Blog Website FullStack",
      image: "/blog.png",
      description:
        " This is secured and user friendly full stack blog website created using Node js. In this project I have implemented CRUD operation uisng MongoDb and secured register and login system using hash and jwt tokens. ",
      githubLink: "https://github.com/Sawrozzz/Blog",
      live: "https://blogapp-8ffe.onrender.com/",
    },
    {
      title: "Redux Todo App",
      image: "/todo.png",
      description:
        "This is a user friendly todo app created using React and Redux. Here I have implemented CRUD operation using redux-toolkit.",
      githubLink: "https://github.com/Sawrozzz/CODSOFT/tree/main/todo-list",
      live: "https://todo-list-green-seven-91.vercel.app/",
    },
    {
      title: "Chat-app",
      image: "/chat.png",
      description:
        "This is a real time chat app created using React , Node Js and Socket io. Here users can chat with each other in real time.",
      githubLink: "/",
      live: "https://chat-app-0ex1.onrender.com/",
    },
  ];

  return (
    <section id="project" className="pt-8 bg-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black  px-4 mb-8 font-Lato">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-full grid grid-row-4  p-6 hover:transform hover:scale-105 hover: transition duration-200 ease-in-out"
            >
              <h3 className="text-xl text-black  font-bold mb-4 font-Ubuntu">
                {project.title}
              </h3>
              <Image
                height={200}
                width={400}
                src={project.image}
                alt={project.title}
                className="lg:w-3/2 h-48 object-cover rounded"
              />
              <p className=" text-gray-600 mt-2 mb-4 font-Ubuntu">
                {project.description}
              </p>
              <div className="flex justify-between ">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-transparent text-white font-Ubuntu py-2 px-4 rounded "
                >
                  <GitHubIcon size={30} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className=" text-black font-Ubuntu  text-center pt-2 rounded "
                >
                  <PiArrowSquareDownRightLight size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
