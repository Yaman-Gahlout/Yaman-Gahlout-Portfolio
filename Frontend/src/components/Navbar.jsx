import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/skills", label: "SKILLS" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "text-[#914bf1] font-bold" : "text-white font-bold ";

  return (
    <div className="w-screen flex justify-center relative">
      <div className="w-[76%] h-[70px] flex items-center justify-between mt-2">
        {/* LOGO */}
        <NavLink to="/" className="text-3xl text-[#914bf1] ">
          YG.
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex bg-[rgb(39_40_41)] gap-6 px-10 py-4 rounded-2xl">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex"></div>

        {/* MOBILE HAMBURGER */}
        <RxHamburgerMenu
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed  inset-0 z-50 bg-[rgb(39_40_41)] text-white flex flex-col p-6">
          <div className="flex justify-between items-center border-b pb-4 border-[#914bf1]">
            <NavLink
              to="/"
              className="text-3xl text-[#914bf1]"
              onClick={() => setOpen(false)}
            >
              YG.
            </NavLink>
            <IoCloseSharp
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="mt-8 flex flex-col gap-6 text-xl">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
