import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "Login Interface",
      image: "login.png",
      description:
        "My first ever project in the field of web design where I try to design a login interface with the help of Html and CSS.",
      githubLink: "https://github.com/Sawrozzz/Login-Interface",
    },
    {
      title: "Real-Time Weather Forecast",
      image: "weather.png",
      description:
        "This project gives the real time weather forecast, which use Api of OpenWeather. I have learned about fetching and asyncronous javascript with this project.",
      githubLink: "https://github.com/Sawrozzz/Weather-App",
    },
    {
      title: "Tic Tac Toe",
      description:
        "This project contain multiple components with the valid logic to build a tic tac toe game. ",
      githubLink: "https://github.com/Sawrozzz/TicTacToe_React",
    },
    {
      title: "Full Stack Sign-Up",
      description:
        "This is a full stack project for a login and signup page. For this I use react and bootstrap for frontend and Node with Express for Backend and MonogDB as a Database",
      githubLink: "https://github.com/Sawrozzz/Auth_FullStack",
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-500 text-center mb-8 font-filroy">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg  p-6 hover:transform hover:scale-105 hover:bg-blue-200 transition duration-200 ease-in-out"
            >
              <h3 className="text-xl text-orange-500 font-bold mb-4 font-filroy">
                {project.title}
              </h3>
              <img src={project.image} alt={project.title} className="mb-4 w-96 h-60" />{" "}
              {/* Render the image */}
              <p className=" text-gray-500 mb-4 font-filroy">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
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