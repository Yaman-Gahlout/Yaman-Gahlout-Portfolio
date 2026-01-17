import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { PortfolioContext } from "../store/PortfolioContext";
import heroImage from "../assets/hero2.svg";
import { TypeAnimation } from "react-type-animation";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Home() {
  const { setTab } = useContext(PortfolioContext);
  return (
    <div className="flex  justify-center mt-[50px] w-[88vw]">
      <div className="flex max-xl:flex-col gap-[30px]">
        <div className=" flex flex-col p-[20px] justify-center max-xl:w-[100%] w-[50%] max-xl:items-center">
          <p className="text-[rgb(145,75,241)] max-xl:text-center text-xl font-bold">
            Hello! I'm
          </p>
          <h1 className="text-7xl max-md:text-5xl max-xl:text-center font-bold text-white">
            Yaman <span className="text-[rgb(145,75,241)]">Gahlout</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "",
              700,
              "MERN Stack Developer",
              2000,
              "",
              700,
              "MCA Student",
              2000,
              "",
              700,
            ]}
            speed={45}
            repeat={Infinity}
            className="text-3xl max-md:text-xl font-extralight mt-[10px] max-xl:text-center text-[#94a3b8] opacity-80"
          />

          <p className="text-xl max-md:text-lg max-xl:text-center  mt-[20px] text-[#94a3b8] opacity-90">
            Building elegant solutions to complex problems with modern
            technologies.
          </p>

          <div className="flex max-sm:flex-col max-sm:gap-[15px] gap-[30px] max-xl:justify-center max-xl:w-[100%]">
            <a
              href="/Yaman_Gahlout_Resume.pdf"
              download
              className="px-[20px] flex items-center gap-2 justify-center py-[10px] mt-[20px] text-xl rounded-xl text-white bg-[rgb(145,75,241)]"
            >
              <span>Download Resume</span>
              <IoMdDownload />
            </a>
            <a
              href="/Yaman_Gahlout_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-[20px] flex items-center gap-2 justify-center py-[10px] mt-[20px] text-xl rounded-xl text-white border-2 border-[rgb(145,75,241)] hover:bg-[rgb(145,75,241)] transition duration-300 ease-in"
            >
              <span>View Resume</span>
              <MdOutlineRemoveRedEye />
            </a>
          </div>

          <div className="mt-[30px] flex gap-[20px] max-xl:justify-center text-2xl text-white">
            <a
              href="https://github.com/Yaman-Gahlout"
              className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yaman-gahlout-751349260/"
              className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yamangahlout123@gmail.com"
              className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        <div className=" max-xl:w-[100%] w-[50%]">
          <img src={heroImage} alt="" className="min-md:h-[500px]  w-[100%]" />
        </div>
      </div>
    </div>
  );
}
