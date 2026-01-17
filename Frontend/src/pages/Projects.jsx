import Project from "../components/Project";
import ShoppingManagementImage from "../assets/Projects-image/shopping-management-system.png";
import CalculatorImage from "../assets/Projects-image/calculator.png";
import weatherAppImage from "../assets/Projects-image/weatherApp.png";
import RazorpayCloneImage from "../assets/Projects-image/RazorpayClone.png";
import openPost from "../assets/Projects-image/openPost.png";

export default function Projects() {
  const projectData = [
    {
      name: "openPost",
      description:
        "A full-stack social posting platform built with React, Express, and SQL, enabling users to create posts, interact, and manage accounts.",
      technologies: ["React.js", "TailwindCSS", "Express.js", "SQL"],
      image: openPost,
      githubLink: "https://github.com/Yaman-Gahlout/social-media",
    },
    {
      name: "Ecomzy",
      description:
        "A React-based shopping platform using Tailwind CSS for styling, featuring product listings, cart management, and responsive user interfaces.",
      technologies: ["React.js", "TailwindCSS"],
      image: ShoppingManagementImage,
      githubLink: "https://github.com/Yaman-Gahlout/Shopping-Management-System",
    },
    {
      name: "Calculator",
      description:
        "A React and Tailwind CSS powered calculator application implementing arithmetic logic with reusable components and a clean, responsive layout.",
      technologies: ["React.js", "TailwindCSS"],
      image: CalculatorImage,
      githubLink: "",
    },
    {
      name: "Weather App",
      description:
        "A JavaScript-based weather application using HTML and CSS, integrating public APIs to fetch and display real-time weather data.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weatherAppImage,
      githubLink: "",
    },
    {
      name: "Razorpay Clone",
      description:
        "A responsive Razorpay UI clone built with HTML and Tailwind CSS, focusing on layout design, responsiveness, and modern UI practices.",
      technologies: ["HTML", "TailwindCSS"],
      image: RazorpayCloneImage,
      githubLink: "",
    },
  ];
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
          Projects
          <div className="w-[60px] h-[5px] rounded-2xl bg-[#914bf1]"></div>
        </h1>
        <div className="mt-[10px] text-center text-xl text-[#94a3b8]">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </div>
      </div>
      <div className="flex flex-wrap gap-[40px] mt-[50px] items-center justify-center">
        {projectData.map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </div>
    </div>
  );
}
