import React from "react";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "Login Interface",
      image: "/login.png",
      description:
        "My first ever project in the field of web design where I try to design a login interface with the help of Html and CSS.",
      githubLink: "https://github.com/Sawrozzz/Login-Interface",
    },
    {
      title: "Real-Time Weather Forecast",
      image: "/weather.png",
      description:
        "This project gives the real time weather forecast, which use Api of OpenWeather. I have learned about fetching and asyncronous javascript with this project.",
      githubLink: "https://github.com/Sawrozzz/Weather-App",
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
    },
    {
      title: "Redux Todo App",
      image: "/todo.png",
      description:
        "This is a user friendly todo app created using React and Redux. Here I have implemented CRUD operation using redux-toolkit.",
      githubLink: "https://github.com/Sawrozzz/CODSOFT/tree/main/todo-list",
    },
    // Add more projects as needed
  ];

  return (
    <section id="project" className="pt-8">
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
              <h3 className="text-xl text-black bg-bg-2 font-bold mb-4 font-Ubuntu">
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
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-Ubuntu py-2 px-4 rounded "
              >
                GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
