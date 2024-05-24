import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaStackOverflow,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import NavLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState("#2c3e50");
  const [linkColor] = useState("#ecf0f3");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="175"
              height="150"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2c3e50] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-end w-full">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-[#ecf0f3] hover:scale-110 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <hr className="border-b border-gray-300 my-4 text-[#ecf0f3]" />
          </div>
          <div className="xss:relative xss:right-6 py-4 flex flex-col text-[#ecf0f3]">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  Contact
                </li>
              </Link>
              <Link href="/projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b w-fit"
                >
                  Resume
                </li>
              </Link>
            </ul>
            <br />
            <div className="pt-6">
              <p className=" tracking-widest text-[#ecf0f3]">
                Let&#39;s Connect
              </p>

              <div className="xss:gap-x-14 xss:gap-y-4 xs:max-w-[12rem] gap-2 grid grid-cols-4 pt-2 max-w-[15rem]">
                <a
                  href="https://www.linkedin.com/in/gabriel-mendoza-218a07252/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </a>
                <a
                  href="https://github.com/GabTheGreat25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaGithub />
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/gabthegreat25/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaInstagram />
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/Codeeee_is_Lifeeee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaFacebookF />
                    </span>
                  </div>
                </a>
                <a
                  href="https://t.me/Gabz092501"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaTelegram />
                    </span>
                  </div>
                </a>
                <a
                  href="https://stackoverflow.com/users/19642389/gabthegreat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaStackOverflow />
                    </span>
                  </div>
                </a>
                <a
                  href="https://twitter.com/Gaabsyy25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaTwitter />
                    </span>
                  </div>
                </a>
                <a
                  href="https://discord.com/users/433106513280892928"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="xss:max-h-1 xs:max-h-[1rem] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                    <span className="xss:bottom-[.5rem] xss:right-[.5rem] xs:right-2 xs:bottom-2 relative right-1 text-[#34495e]">
                      <FaDiscord />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
