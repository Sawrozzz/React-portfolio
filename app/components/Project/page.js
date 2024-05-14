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
      title: "Full Stack Sign-Up",
      image: "auth.png",
      description:
        "This is a full stack project for a login and signup page. For this I use react and bootstrap for frontend and Node with Express for Backend and MonogDB as a Database",
      githubLink: "https://github.com/Sawrozzz/Auth_FullStack",
    },
    {
      title: "Blog Website FullStack",
      image: "blog.png",
      description:
        " This is secured and user friendly full stack blog website created using Node js. In this project I have implemented CURD operation uisng MongoDb and secured register and login system using hash and jwt tokens. ",
      githubLink: "https://github.com/Sawrozzz/Blog",
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full lg:w-2/2"
              />{" "}
              {/* Render the image */}
              <p className=" text-gray-500 mb-4 font-filroy">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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