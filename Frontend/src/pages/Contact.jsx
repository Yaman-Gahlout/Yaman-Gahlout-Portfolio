import { MdEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const nameEle = useRef("");
  const emailEle = useRef("");
  const subjectEle = useRef("");
  const messageEle = useRef("");
  const [loading, setLoading] = useState(false);

  async function submitHandler(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const messageInfo = {
        name: nameEle.current.value,
        email: emailEle.current.value,
        subject: subjectEle.current.value,
        message: messageEle.current.value,
      };
      console.log(messageInfo);
      const response = await axios.post(
        "https://portfolio-backend-abh1.onrender.com/api/send-email",
        messageInfo,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      toast.success("Message sent successfully");
      setLoading(false);
      nameEle.current.value = "";
      emailEle.current.value = "";
      subjectEle.current.value = "";
      messageEle.current.value = "";
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
          Get In Touch
          <div className="w-15 h-1.25 rounded-2xl bg-[#914bf1]"></div>
        </h1>
        <div className="mt-2.5 text-center text-xl text-[#94a3b8]">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </div>
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-[40px] gap-[30px] mt-[40px]">
        <div className="flex flex-col gap-[10px]">
          <div>
            <h1 className="text-2xl text-white">Contact Information</h1>
            <p className="text-lg text-[#94a3b8]">
              Fill up the form and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-[10px] text-xl">
              <MdOutlineMail className="text-[#914bf1] mt-[5px]" />
              <div className="flex flex-col ">
                <p className="text-white">Email</p>
                <p className="text-[#94a3b8] text-lg">
                  yamangahlout123@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-[10px] text-xl">
              <LuPhone className="text-[#914bf1] mt-[5px]" />
              <div className="flex flex-col ">
                <p className="text-white">Phone</p>
                <p className="text-[#94a3b8] text-lg">+91 9548905852</p>
              </div>
            </div>
            <div className="flex gap-[10px] text-xl">
              <IoLocationOutline className="text-[#914bf1]  mt-[5px]" />
              <div className="flex flex-col ">
                <p className="text-white">Location</p>
                <p className="text-[#94a3b8] text-lg">Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-[20px] gap-[10px]">
            <p className="text-xl text-white">Connect with me</p>
            <div className=" flex gap-[20px] text-2xl text-[rgb(145,75,241)]">
              <a
                href="https://github.com/Yaman-Gahlout"
                className="hover:text-[rgb(145,75,241)] cursor-pointer transition duration-150 ease-in"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yaman-gahlout-751349260/"
                className="hover:text-[rgb(145,75,241)] cursor-pointer transition duration-150 ease-in"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:yamangahlout123@gmail.com"
                className="hover:text-[rgb(145,75,241)] cursor-pointer transition duration-150 ease-in"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div className="p-[20px] border-[1px] border-[#94a3b8] rounded-2xl">
          <form
            onSubmit={submitHandler}
            action=""
            className="flex flex-col items-center justify-center gap-[20px]"
          >
            <div className="flex max-lg:flex-col gap-[20px]">
              <div className="flex flex-col  gap-[10px]">
                <label
                  htmlFor="name"
                  className="text-xl text-[rgb(145,75,241)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  ref={nameEle}
                  placeholder="John Deo"
                  className="w-[250px] text-lg max-lg:w-[320px] h-[40px] px-[10px] rounded-xl  border-[1px] border-[#94a3b8] outline-none text-white"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="email"
                  className="text-xl text-[rgb(145,75,241)]"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  ref={emailEle}
                  placeholder="john@example.com"
                  className="w-[250px] text-lg max-lg:w-[320px] h-[40px] px-[10px] rounded-xl  border-[1px] border-[#94a3b8] outline-none text-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="subject"
                className="text-xl text-[rgb(145,75,241)]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                ref={subjectEle}
                placeholder="How can I help you?"
                className="w-[520px] text-lg max-lg:w-[320px] h-[40px] px-[10px] rounded-xl  border-[1px] border-[#94a3b8] outline-none text-white"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="message"
                className="text-xl text-[rgb(145,75,241)]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                ref={messageEle}
                placeholder="Write Message..."
                className="w-[520px] text-lg max-lg:w-[320px] h-[100px] p-[10px] rounded-xl  border-[1px] border-[#94a3b8] outline-none text-white"
              ></textarea>
            </div>
            <button className="h-[40px] px-[25px] bg-[rgb(145,75,241)] text-xl cursor-pointer text-white rounded-2xl">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
