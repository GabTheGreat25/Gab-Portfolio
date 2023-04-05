import Image from "next/image";
import React from "react";
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
import HomeImg from "../public/assets/about-me/Gab-Laptop.jpg";
const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-[#34495e] text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center sm: pt-20">
        <div className="w-1/2 hidden md:block">
          <div className="w-full h-full mt-2">
            <Image
              src={HomeImg}
              alt="Gab"
              height="100%"
              width="100%"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="w-1/2">
          <span className="lg:text-lg lg:tracking-widest md:text-sm md:tracking-normal">
            Hi Stranger, Welcome To My Portfolio
          </span>
          <span className="relative top-1 left-1">
            <Image
              src="/assets/about-me/blob-sunglasses.gif"
              alt="Blink"
              height="25%"
              width="25%"
            />
          </span>
          <h1 className="lg:text-6xl lg:py-4 text-2xl py-1">
            I’m <span className="text-[#7795b4]"> Gabriel</span>
          </h1>
          <h1 className="lg:text-6xl lg:py-2 text-2xl">
            A Front-End Web Developer
          </h1>
          <p className="py-4 sm:max-w-[70%] m-auto text-lg md:text-2xl">
            I’m a third-year college student at Technological University of the
            Philippines in Taguig City
          </p>

          <div className="hidden md:grid grid-cols-4 items-center justify-between m-auto max-w-[18rem] gap-4">
            <a
              href="https://www.linkedin.com/in/gabriel-mendoza-218a07252/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/GabTheGreat25"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.instagram.com/gabthegreat25/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.facebook.com/Codeeee_is_Lifeeee"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebookF />
              </div>
            </a>
            <a href="https://t.me/Gabz092501" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTelegram />
              </div>
            </a>
            <a
              href="https://stackoverflow.com/users/19642389/gabthegreat"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaStackOverflow />
              </div>
            </a>
            <a
              href="https://twitter.com/Gaabsyy25"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a
              href="https://discord.com/users/433106513280892928"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaDiscord />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
