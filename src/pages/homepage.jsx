import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center mb-3">
        <h1
          className="text-3xl font-bold 
        text-gray-900 tracking-tight leading-tight mb-10 mt-4 font-sans"
        >
          Welcome to My Website!
        </h1>
      </header>

      <section className="w-full max-w-5xl bg-gray-50 shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 mx-auto mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <img
          src="/images/photo2.JPG"
          alt="Christian Joseph"
          className="w-50 h-50 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-102"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I'm{" "}
            <span className="font-semibold text-blue-800">
              Christian Joseph
            </span>
            , an{" "}
            <span className="font-semibold text-blue-800">
              Electrical & Electronics Engineering{" "}
            </span>{" "}
            (EEE) graduate from{" "}
            <span className="font-semibold text-blue-800">
              Nanyang Technological University{""}
            </span>
            , Singapore who is passionate about{" "}
            <span className="font-semibold text-blue-800">
              Mathematics, IT, and Software Development
            </span>
            . I love building intuitive web applications and exploring new
            technologies.
          </p>
          <a
            href="/resume_christian_joseph_29sep25.pdf"
            download="Christian_Joseph_Resume.pdf"
            className="text-blue-500 hover:text-blue-800 hover:underline transition"
          >
            <strong>[Download Resume]</strong>{" "}
          </a>
        </div>
      </section>

      <section className="w-full max-w-5xl bg-gray-50 shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-102">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
        <ul className="space-y-16">
          {" "}
          <li>
            <strong className="text-lg">Food-Dash Website</strong>
            <p className="text-gray-600 mt-4 mb-4">
              A prototype e-commerce platform featuring user account
              registration, shopping cart functionality, and seamless database
              integration. Developed to explore full-stack fundamentals, with
              HTML, CSS, and JavaScript powering the frontend, and PHP with
              MySQL handling the backend.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                HTML
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                CSS
              </span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                PHP
              </span>
              <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">
                MySQL
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <a
                href="http://fooddash-web.infinityfreeapp.com"
                className="text-blue-500 hover:text-blue-800 hover:underline transition"
              >
                <strong>[Click Here for Live Preview]</strong>
              </a>

              <a
                href="https://github.com/cjoseph001/food-ordering-web"
                className="text-green-500 hover:text-green-800 hover:underline transition"
              >
                <strong>[GitHub Link]</strong>
              </a>
            </div>

            <img
              src="/images/fooddash1.jpg"
              alt="Food Dash Website"
              className="w-full max-w-md rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </li>
          <li>
            <strong className="text-lg">E-Commerce Prototype Website</strong>
            <p className="text-gray-600 mt-2 mb-4">
              A React-based front-end e-commerce prototype featuring product
              browsing, filtering, and simulated cart functionality.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                CSS
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <a
                href="https://cj-shop.vercel.app"
                className="text-blue-500 hover:text-blue-800 hover:underline transition"
              >
                <strong>[Click Here for Live Preview]</strong>
              </a>

              <a
                href="https://github.com/cjoseph001/cj_shop"
                className="text-green-500 hover:text-green-800 hover:underline transition"
              >
                <strong>[GitHub Link]</strong>
              </a>
            </div>

            <img
              src="/images/shop.jpg"
              className="w-full max-w-md rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
              alt="E-Commerce Website"
            />
          </li>
          <li>
            <strong className="text-lg"> CJ Travel Website</strong>
            <p className="text-gray-600 mt-2 mb-4">
              {" "}
              A website design project built with HTML and CSS.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                HTML
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                CSS
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <a
                href="https://cj-travel-website.vercel.app"
                className="text-blue-500 hover:text-blue-800 hover:underline transition"
              >
                <strong>[Click Here for Live Preview]</strong>
              </a>

              <a
                href="https://github.com/cjoseph001/cj-travel-website"
                className="text-green-500 hover:text-green-800 hover:underline transition"
              >
                <strong>[GitHub Link]</strong>
              </a>
            </div>

            <img
              src="/images/trav.jpg"
              className="w-full max-w-md rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
              alt="E-Commerce Website"
            />
          </li>
          <li>
            <strong className="text-lg">Circuit Analysis App</strong>
            <p className="text-gray-600 mt-2">
              A cross-platform mobile app for calculating electrical circuit
              values with step-by-step solutions. Built with Flutter and Dart,
              and optimized for iOS devices.
            </p>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                Dart
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                Flutter
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <a
                href="https://circuitanalysismobileapp.vercel.app"
                className="text-blue-500 hover:text-blue-800 hover:underline transition"
              >
                <strong>[Click Here for Live Preview on Web]</strong>
              </a>

              <a
                href="https://github.com/cjoseph001/circuit_analysis_mobile_app"
                className="text-green-500 hover:text-green-800 hover:underline transition"
              >
                <strong>[GitHub Link]</strong>
              </a>
            </div>

            <img
              src="/images/circ.jpg"
              alt="Circuit Analysis App"
              className="w-[150px] rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </li>
        </ul>
      </section>

      <section className="w-full max-w-5xl bg-gray-50 shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Flutter",
            "Dart",
            "SQL",
            "PHP",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl bg-gray-50 shadow-lg rounded-xl pt-8 p-10 mb-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Hobbies</h2>
        <div className="flex flex-wrap gap-3">
          {["Chess", "Sport", "Travel"].map((hobby) => (
            <span
              key={hobby}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {hobby}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl bg-gray-50 shadow-lg rounded-xl pt-8 p-10 transition-transform transition-shadow duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <p className="text-gray-700">Let's connect! Find me on:</p>
        <ul className="list-none mt-3">
          <li>
            <a
              href="https://github.com/cjoseph001"
              className="text-blue-500 hover:text-blue-800 hover:underline transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>[GitHub]</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christian-joseph-997a2a221/"
              className="text-blue-500 hover:text-blue-800 hover:underline transition"
            >
              <strong>[LinkedIn] </strong>
            </a>
          </li>
          <li>
            <a
              href="cjoseph001@e.ntu.edu.sg"
              className="text-blue-500 hover:text-blue-800 hover:underline transition"
            >
              <strong>[Email]</strong>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
