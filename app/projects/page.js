// pages/index.js
import Link from "next/link";
import { projects } from "../data/projects";

const getUniqueGradient = (() => {
  let gradients = [
    "bg-gradient-to-br from-red-500 to-yellow-500",
    "bg-gradient-to-br from-green-500 to-blue-500",
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-indigo-500 to-purple-500",
    "bg-gradient-to-br from-yellow-500 to-green-500",
    "bg-gradient-to-br from-pink-500 to-red-500",
    "bg-gradient-to-br from-teal-500 to-indigo-500",
    "bg-gradient-to-br from-orange-500 to-cyan-500",
    "bg-gradient-to-br from-lime-500 to-teal-500",
    "bg-gradient-to-br from-gray-500 to-blue-500",
    "bg-gradient-to-br from-red-400 to-yellow-400",
    "bg-gradient-to-br from-green-400 to-blue-400",
    "bg-gradient-to-br from-purple-400 to-pink-400",
    "bg-gradient-to-br from-indigo-400 to-purple-400",
    "bg-gradient-to-br from-yellow-400 to-green-400",
    "bg-gradient-to-br from-pink-400 to-red-400",
    "bg-gradient-to-br from-teal-400 to-indigo-400",
    "bg-gradient-to-br from-orange-400 to-cyan-400",
    "bg-gradient-to-br from-lime-400 to-teal-400",
    "bg-gradient-to-br from-gray-400 to-blue-400",
    "bg-gradient-to-br from-red-300 to-yellow-300",
    "bg-gradient-to-br from-green-300 to-blue-300",
    "bg-gradient-to-br from-purple-300 to-pink-300",
    "bg-gradient-to-br from-indigo-300 to-purple-300",
    "bg-gradient-to-br from-yellow-300 to-green-300",
    "bg-gradient-to-br from-pink-300 to-red-300",
    "bg-gradient-to-br from-teal-300 to-indigo-300",
    "bg-gradient-to-br from-orange-300 to-cyan-300",
    "bg-gradient-to-br from-lime-300 to-teal-300",
    "bg-gradient-to-br from-gray-300 to-blue-300",
  ];

  const initialGradients = [...gradients];

  return () => {
    if (gradients.length === 0) {
      gradients = [...initialGradients];
    }
    return gradients.shift();
  };
})();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-6xl font-bold w-screen px-32 my-16 text-center">
        Projects
      </h1>
      {/* Python Projects */}
      <div className="flex py-16 px-32 gap-16">
        <div className="flex flex-col w-3/12">
          <h1 className="text-4xl font-bold text-left mb-8">Python.</h1>
          <p>
            I picked up Python as it was considered one of the easiest
            programming languages. Taking the base of Python, I started
            experimenting and learning many techniques.
          </p>
        </div>

        <div className="grid grid-cols-fluid gap-16 w-full">
          {projects.python.map((project, index) => {
            const gradient = getUniqueGradient();
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className={`w-80 h-80 ${gradient} cursor-pointer`}>
                  <p className="text-2xl font-bold text-white flex items-center justify-center text-center w-80 h-80">
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Web Development Projects */}
      <div className="flex py-16 px-32 gap-16">
        <div className="flex flex-col w-3/12">
          <h1 className="text-4xl font-bold text-left mb-8">
            Web Development.
          </h1>
          <p>
            I picked up web development to create interactive and user-friendly
            applications. Experimenting with various frameworks and libraries, I
            developed a range of projects.
          </p>
        </div>

        <div className="grid grid-cols-fluid gap-16 w-full">
          {projects.webDevelopment.map((project, index) => {
            const gradient = getUniqueGradient();
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className={`w-80 h-80 ${gradient} cursor-pointer`}>
                  <p className="text-2xl font-bold text-white flex items-center justify-center text-center w-80 h-80">
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* UI / UX */}
      <div className="flex py-16 px-32 gap-16">
        <div className="flex flex-col w-3/12">
          <h1 className="text-4xl font-bold text-left mb-8">UI / UX.</h1>
          <p>
            I picked up UI design as it was a crucial aspect of web development.
            I learned various design principles and techniques to create
            visually appealing user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-fluid gap-16 w-full">
          {projects.ui.map((project, index) => {
            const gradient = getUniqueGradient();
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className={`w-80 h-80 ${gradient} cursor-pointer`}>
                  <p className="text-2xl font-bold text-white flex items-center justify-center text-center w-80 h-80">
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Java Projects */}
      <div className="flex py-16 px-32 gap-16">
        <div className="flex flex-col w-3/12">
          <h1 className="text-4xl font-bold text-left mb-8">Java.</h1>
          <p>
            I started learning Java to develop robust and scalable applications.
            Java's object-oriented programming paradigm and extensive libraries
            made it a popular choice for enterprise-level software development.
          </p>
        </div>

        <div className="grid grid-cols-fluid gap-16 w-full">
          {projects.java.map((project, index) => {
            const gradient = getUniqueGradient();
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className={`w-80 h-80 ${gradient} cursor-pointer`}>
                  <p className="text-2xl font-bold text-white flex items-center justify-center text-center w-80 h-80">
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Uncategorized Projects */}
      <div className="flex py-16 px-32 gap-16">
        <div className="flex flex-col w-3/12">
          <h1 className="text-4xl font-bold text-left mb-8">Others.</h1>
          <p>
            Apart from programming and web development, I also explored other
            areas of interest. These projects allowed me to broaden my skills
            and knowledge in different domains.
          </p>
        </div>

        <div className="grid grid-cols-fluid gap-16 w-full">
          {projects.others.map((project, index) => {
            const gradient = getUniqueGradient();
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <div className={`w-80 h-80 ${gradient} cursor-pointer`}>
                  <p className="text-2xl font-bold text-white flex items-center justify-center text-center w-80 h-80">
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
