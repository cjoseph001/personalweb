import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-md mb-14">
        <div className="text-center px-4">
          <img
            src="/images/photo2.JPG"
            alt="Christian Joseph"
            className="w-32 h-47 md:w-42 md:h-60 mx-auto rounded-full shadow-lg border-4 border-white mb-6"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Christian Joseph
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Website Developer
          </p>
          <div className="flex justify-center gap-3.5 text-sm">
            <a
              href="/resume_christian_joseph_29sep2025.pdf"
              download="Christian_Joseph_Resume.pdf"
              className="bg-gray-600 text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-300 hover:text-gray-600 transition"
            >
              📄 Resume
            </a>
            <a
              href="#projects"
              className="bg-gray-200 px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-600 hover:text-gray-300 transition"
            >
              🚀 Projects
            </a>
          </div>
        </div>
      </section>

      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="bg-white shadow-lg rounded-xl px-6 py-6 mb-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6">👤 Profile</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-3">
            Hi! I'm{" "}
            <span className="font-semibold text-blue-800">
              Christian Joseph
            </span>
            , a recent graduate in{" "}
            <span className="font-semibold text-blue-800">
              {" "}
              Electrical & Electronic Engineering
            </span>{" "}
            from
            <span className="font-semibold text-blue-800"> NTU Singapore</span>.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            I’m passionate about building{" "}
            <span className="font-semibold text-blue-800">software </span>
            and{" "}
            <span className="font-semibold text-blue-800">
              web applications
            </span>{" "}
            that are intuitive, efficient, and user-focused. I enjoy tackling
            challenges and continuously learning new technologies to deliver
            impactful solutions.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-white shadow-lg rounded-xl p-8 mb-16"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
            🚀 My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Food-Dash Website",
                desc: "A prototype e-commerce platform featuring user accounts, shopping cart, and MySQL backend integration.",
                img: "/images/fooddash1.jpg",
                live: "http://fooddash-web.infinityfreeapp.com",
                github: "https://github.com/cjoseph001/food-ordering-web",
              },
              {
                title: "E-Commerce Prototype Website",
                desc: "A React-based front-end prototype with product browsing and cart simulation.",
                img: "/images/shop.jpg",
                live: "https://cj-shop.vercel.app",
                github: "https://github.com/cjoseph001/cj_shop",
              },
              {
                title: "CJ Travel Website",
                desc: "A simple design project built with HTML and CSS.",
                img: "/images/trav.jpg",
                live: "https://cj-travel-website.vercel.app",
                github: "https://github.com/cjoseph001/cj-travel-website",
              },
              {
                title: "Circuit Analysis App",
                desc: "A cross-platform app for calculating electrical circuit values with step-by-step solutions, built in Flutter.",
                img: "/images/circ.jpg",
                live: "https://circuitanalysismobileapp.vercel.app",
                github:
                  "https://github.com/cjoseph001/circuit_analysis_mobile_app",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                className="flex flex-col bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                {/* Full Image (tidy) */}
                <div className="flex justify-center items-center mb-8">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="rounded-lg max-h-56 w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-2 mb-6 flex-grow">{proj.desc}</p>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={proj.live}
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌍 Live
                  </a>
                  <a
                    href={proj.github}
                    className="text-gray-600 hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white shadow-lg rounded-xl p-6 mb-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6">🛠 Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
              <div
                key={skill}
                className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition text-center font-medium text-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="bg-white shadow-lg rounded-xl px-6 py-6 mb-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6">🎯 Hobbies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["♟ Chess", "⚽ Sports", "✈️ Travel"].map((hobby) => (
              <div
                key={hobby}
                className="bg-green-50 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition text-center font-semibold text-green-700"
              >
                {hobby}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white shadow-lg rounded-xl p-6 mb-16 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📬 Contact Me
          </h2>
          <p className="text-gray-600 mb-4 text-md">
            Let’s connect and build something great!
          </p>
          <div className="flex justify-center gap-4">
            {[
              {
                icon: <FaGithub className="text-2xl text-gray-700" />,
                link: "https://github.com/cjoseph001",
                bg: "bg-gray-100 hover:bg-gray-200",
              },
              {
                icon: <FaLinkedin className="text-2xl text-blue-600" />,
                link: "https://www.linkedin.com/in/christian-joseph-997a2a221/",
                bg: "bg-blue-50 hover:bg-blue-100",
              },
              {
                icon: <FaEnvelope className="text-2xl text-red-600" />,
                link: "mailto:cjoseph001@e.ntu.edu.sg",
                bg: "bg-red-50 hover:bg-red-100",
              },
            ].map(({ icon, link, bg }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105 ${bg}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Christian Joseph.
      </footer>
    </div>
  );
};

export default HomePage;
