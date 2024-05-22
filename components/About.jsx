import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about-me/gab-pic.jpg";
import MonaCatImg from "../public/assets/about-me/MonaCat.gif";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-semibold text-center text-5xl pb-4 tracking-widest text-[#5651e5]">
            About Myself{" "}
            <span className="relative top-[10px]">
              <Image width="75" height="60" src={MonaCatImg} alt="MonaCat" />
            </span>
          </p>
          <p className="py-2 italic font-medium text-justify text-gray-600">
            As a passionate learner in the field of web development, I have been
            exploring various aspects of this exciting industry. My primary
            focus has been on front-end development, where I have honed my
            skills in creating visually appealing and responsive user
            interfaces. However, I have also taken a keen interest in back-end
            development to ensure that my projects have a solid foundation and
            optimal performance.
          </p>
          <p className="py-2 italic font-medium text-justify text-gray-600">
            In my free time, I have been delving into the world of web3, the
            decentralized web, to gain a better understanding of how this
            emerging technology can revolutionize the way we interact with the
            internet. Through my studies and hands-on experience, I have
            developed a strong understanding of blockchain technology and its
            potential applications in web development.
          </p>
          <p className="py-2 italic font-medium text-justify text-gray-600">
            As I continue on my learning journey, I am eager to explore new
            technologies and push the boundaries of what is possible in web
            development. I am excited to apply my knowledge and skills to create
            innovative solutions and deliver exceptional user experiences.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image src={AboutImg} className="rounded-xl" alt="Gab" />
        </div>
      </div>
    </div>
  );
};

export default About;
