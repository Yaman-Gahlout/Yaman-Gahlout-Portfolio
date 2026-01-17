import { GoLinkExternal } from "react-icons/go";

export default function Project({ project }) {
  return (
    <div className="h-[550px] w-[350px] overflow-hidden shadow-lg shadow-black hover:scale-105  rounded-2xl transition duration-500 ease-in-out">
      <div className="h-[45%]">
        <img
          src={project.image}
          alt=""
          className="h-full w-full rounded-t-xl hover:scale-105 object-cover transition duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-[8px] mt-[10px] h-[50%] w-full">
        <h1 className="text-3xl text-white text-center flex gap-2 justify-center items-center">
          {project.name}{" "}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoLinkExternal className="text-[#914bf1]" size={20} />
          </a>
        </h1>
        <p className="text-lg text-center mt-[5px] opacity-80 text-[#94a3b8]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-[15px] justify-center mt-[15px]">
          {project.technologies.map((tech, index) => (
            <div
              className="px-[20px] flex py-[6px] rounded-lg text-lg bg-[#914bf1]/30 text-white transition duration-500 ease-in-out"
              key={index}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
