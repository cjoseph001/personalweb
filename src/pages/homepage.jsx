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
        <section className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-2xl px-8 py-8 mb-16 transition hover:shadow-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            👤 Profile
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-800">
              Christian Joseph
            </span>
            , an{" "}
            <span className="font-semibold text-blue-800">
              Electrical & Electronic Engineering
            </span>{" "}
            graduate from{" "}
            <span className="font-semibold text-blue-800">NTU Singapore</span>{" "}
            who loves bringing ideas to life through code.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-3">
            I specialize in{" "}
            <span className="font-semibold text-blue-800">
              frontend development
            </span>
            , building smooth, responsive, and modern interfaces using{" "}
            <span className="font-semibold text-blue-800">
              HTML, CSS, JavaScript, React and more.
            </span>
            . I enjoy transforming clean designs into intuitive web experiences
            that feel great to use.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-3">
            Constantly exploring new tools and frameworks, I’m driven by the
            goal of crafting
            <span className="font-semibold text-blue-800">
              {" "}
              fast, aesthetic, and user-focused web applications
            </span>{" "}
            that make a real impact.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-white shadow-lg rounded-xl p-8 mb-16"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
            🚀 Personal Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Food Ordering Website",
                desc: "A full-stack food ordering mock website with user accounts, shopping cart, and MySQL backend integration. The admin page allows real-time order tracking, updating order statuses, and managing completed orders. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
                images: [
                  { src: "/images/fooddash_user.jpg", alt: "User Page" },
                  { src: "/images/fooddash_admin.jpg", alt: "Admin Page" },
                ],
                github: "https://github.com/cjoseph001/food-ordering-web",
                websites: [
                  {
                    label: "User Page",
                    link: "http://fooddash-web.infinityfreeapp.com",
                  },
                  {
                    label: "Admin Page",
                    link: "http://fooddash-web.infinityfreeapp.com/order_data.php",
                  },
                ],
              },
              {
                title: "Online Shop Website",
                desc: "A prototype e-commerce platform built with Next.js, React.js, Tailwind CSS, and Supabase. The user page features product browsing, filtering, and a shopping cart. The admin dashboard allows the shop to add, delete, and modify products. The admin dashboard requires authentication; a demo video is provided for preview.",
                images: [
                  { src: "/images/nextshop_user.jpg", alt: "User Page" },
                  { src: "/images/nextshop_admin.jpg", alt: "Admin Dashboard" },
                ],
                github: "https://github.com/cjoseph001/melzer-site",
                websites: [
                  {
                    label: "User Page",
                    link: "https://melzer-site.vercel.app",
                  },
                ],
                adminDemo: "/videos/shopadmindemo.mp4",
              },
              {
                title: "Circuit Analysis App",
                desc: "A cross-platform mobile app built with Flutter for calculating electrical circuit values. Provides step-by-step solutions for resistor, capacitor and inductor circuit problems. Specially designed for iOS devices, the app delivers a smooth interface and intuitive navigation.",
                images: [{ src: "/images/circ.jpg", alt: "Main Screen" }],
                github:
                  "https://github.com/cjoseph001/circuit_analysis_mobile_app",
                websites: [
                  {
                    label: "Web Preview",
                    link: "https://circuitanalysismobileapp.vercel.app",
                  },
                ],
                adminDemo: "/videos/circuitappvideo.MP4",
              },
              {
                title: "CJ Travel Website",
                desc: "A website design project built with HTML and CSS, featuring a responsive design and a clean, user-friendly interface. The website provides travel information about various countries, including popular destinations and attractions.",
                images: [
                  { src: "/images/cjtravel1.jpg", alt: "Home Page" },
                  { src: "/images/cjtravel2.jpg", alt: "Destination Page" },
                ],
                github: "https://github.com/cjoseph001/cj-travel-website",
                websites: [
                  {
                    label: "Website",
                    link: "https://cj-travel-website.vercel.app",
                  },
                ],
              },
              {
                title: "CJ Shop",
                desc: "React-based front-end prototype simulating an online shop with product browsing, search, and cart functionality. Demonstrates modern UI/UX and state management.",
                images: [
                  { src: "/images/cjshop1.jpg", alt: "Home Page" },
                  { src: "/images/cjshop2.jpg", alt: "Product Page" },
                ],
                github: "https://github.com/cjoseph001/cj_shop",
                websites: [
                  { label: "Website", link: "https://cj-shop.vercel.app" },
                ],
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                {/* Images */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {proj.images.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={`${proj.title} ${img.alt}`}
                      className="rounded-lg w-full max-h-[175px] object-contain"
                    />
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-2 mb-6 flex-grow">{proj.desc}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto flex-wrap text-sm">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow transition-shadow duration-200 font-medium"
                    >
                      💻 GitHub
                    </a>
                  )}
                  {proj.websites &&
                    proj.websites.map((w, i) => (
                      <a
                        key={i}
                        href={w.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow transition-shadow duration-200 font-medium"
                      >
                        🌐 {w.label}
                      </a>
                    ))}
                  {proj.adminDemo && (
                    <a
                      href={proj.adminDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 hover:shadow transition-shadow duration-200 font-medium"
                    >
                      🎬 Demo Video
                    </a>
                  )}
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
