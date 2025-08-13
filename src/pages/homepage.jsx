import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-4.5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 drop-shadow-lg mb-10 mt-4">
          Welcome to My Website!
        </h1>

        <img
          src="/public/images/photo2.jpg"
          alt="Christian Joseph"
          className="w-40 h-40 rounded-full object-cover mx-auto shadow-md transition-transform transition-shadow duration-300 hover:scale-105"
        />
      </header>

      <section className="w-full max-w-3xl bg-white shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi! I'm{" "}
          <span className="font-semibold text-blue-500">Christian Joseph</span>,
          an Electrical & Electronics Engineering graduate from Nanyang
          Technological University, Singapore who is passionate about
          <span className="font-semibold text-blue-500">
            {" "}
            mathematics, engineering & technology, and software development
          </span>
          . I love building intuitive web applications and exploring new
          technologies.
        </p>
      </section>

      <section className="w-full max-w-3xl bg-white shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Food Dash Website</strong> - Built with HTML, CSS,
            JavaScript, PHP, SQL.{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:underline transition"
            >
              [GitHub Link]
            </a>
          </li>
          <li>
            <strong>E-Commerce Prototype Website</strong> - Built with React and
            CSS.{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:underline transition"
            >
              [GitHub Link]
            </a>
          </li>
          <li>
            <strong>Circuit Analysis App</strong> - Built with Dart and Flutter.{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:underline transition"
            >
              [GitHub Link]
            </a>
          </li>
        </ul>
      </section>

      <section className="w-full max-w-3xl bg-white shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <p className="text-gray-700">
          HTML, CSS, JavaScript, React, Tailwind CSS, Python, Git
        </p>
      </section>

      <section className="w-full max-w-3xl bg-white shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Hobbies</h2>
        <p className="text-gray-700">Chess, Sports, Travel</p>
      </section>

      <section className="w-full max-w-3xl bg-white shadow-lg rounded-xl pt-8 p-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <p className="text-gray-700">Let's connect! Find me on:</p>
        <ul className="list-none mt-3">
          <li>
            <a
              href="https://github.com/cjoseph001"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              [GitHub]
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christian-joseph-997a2a221/"
              className="text-blue-500"
            >
              [LinkedIn]
            </a>
          </li>
          <li>
            <a href="cjoseph001@e.ntu.edu.sg" className="text-blue-500">
              [Email]
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
