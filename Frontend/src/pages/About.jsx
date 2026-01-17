import { MdLibraryBooks } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import AboutImage from "../assets/YamanGahlout.jpg";

export default function About() {
  const academicDetails = [
    {
      program: "MCA - (Master of Computer Applications)",
      college: "JIIT (Jaypee Institute of Information Technology), Noida",
      duration: "July 2025 - May 2027",
      cgpa: "9.65 CGPA",
    },
    {
      program: "BCA - (Bachelor of Computer Applications)",
      college: "DIST (Disha institute of Science & Technology)",
      duration: "July 2022 - June 2025",
      cgpa: "8.0 CGPA",
    },
  ];
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
        About me
        <div className="w-[60px] h-[5px] rounded-2xl bg-[#914bf1]"></div>
      </h1>
      <div className="flex gap-[30px] w-[90%]  max-md:flex-col max-md:items-center ">
        <div className="mt-[50px]">
          <div className="flex gap-[10px]  items-center text-[#914bf1] text-2xl font-bold">
            <MdLibraryBooks /> <span className="text-white">Bio</span>
          </div>
          <p className="text-[#94a3b8] text-xl">
            MCA student and MERN stack developer with a strong interest in
            full-stack web development. I enjoy building end-to-end
            applications, writing clean code, and learning new technologies.
          </p>
          <div className="mt-[20px]">
            <div className="flex gap-[10px]  items-center text-[#914bf1] text-2xl ">
              <LuGraduationCap />
              <span className="text-white">Academic Details</span>
            </div>
            <div className="flex max-md:flex-col  gap-[20px] mt-[20px] ">
              {academicDetails.map((i) => (
                <div className="w-full flex justify-center px-4">
                  <div
                    className="
        bg-[#111827] text-white 
        rounded-2xl 
        border border-purple-500/40 
        shadow-lg shadow-purple-500/20 
        p-5 sm:p-6 
        w-full max-w-[420px] 
        hover:scale-105 transition-all duration-300
      "
                  >
                    {/* MCA */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-purple-300">
                        {i.program}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {i.college}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {i.duration} | CGPA: {i.cgpa}
                      </p>
                    </div>

                    <div className="border-t border-purple-500/30 my-3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[50%] max:md:w-[100%] flex flex-col items-center max-md:justify-center max-md:items-center">
          <div className="mt-[50px] h-[225px] w-[225px] rounded-full border-[2px] border-[#914bf1] flex items-center justify-center">
            <img
              src={AboutImage}
              alt=""
              className="h-[200px] w-[200px] rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-[10px]">
            <h1 className="text-2xl text-white">Yaman Gahlout</h1>
            <p className="text-xl text-[#94a3b8] text-center">
              MCA Student @ JIIT, Noida
            </p>
            <div className="h-[2px] w-[200px] mt-[10px] bg-[#914bf1] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
