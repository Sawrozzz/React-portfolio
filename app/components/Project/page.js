import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Login Interface',
      description: 'My first ever project in the field of web design where I try to design a login interface with the help of Html and CSS.',
      githubLink: 'https://github.com/Sawrozzz/Login-Interface'
    },
    {
      title: 'Real-Time Weather Forecast',
      description: 'This project gives the real time weather forecast, which use Api of OpenWeather. I have learned about fetching and asyncronous javascript with this project.',
      githubLink: 'https://github.com/Sawrozzz/Weather-App'
    },
    {
      title: 'Tic Tac Toe',
      description: 'This project contain multiple components with the valid logic to build a tic tac toe game. ',
      githubLink: 'https://github.com/Sawrozzz/TicTacToe_React'
    },
    {
        title: 'Full Stack Sign-Up',
        description: 'This is a full stack project for a login and signup page. For this I use react and bootstrap for frontend and Node with Express for Backend and MonogDB as a Database',
        githubLink: 'https://github.com/Sawrozzz/Auth_FullStack'
      },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
