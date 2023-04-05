import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about-me/gab-pic.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-semibold text-center text-5xl pb-4 tracking-widest text-[#5651e5]">
            About Myself
          </p>
          <p className="py-2 text-gray-600 italic font-medium text-justify">
            As a passionate learner in the field of web development, I have been
            exploring various aspects of this exciting industry. My primary
            focus has been on front-end development, where I have honed my
            skills in creating visually appealing and responsive user
            interfaces. However, I have also taken a keen interest in back-end
            development to ensure that my projects have a solid foundation and
            optimal performance.
          </p>
          <p className="py-2 text-gray-600 italic font-medium text-justify">
            In my free time, I have been delving into the world of web3, the
            decentralized web, to gain a better understanding of how this
            emerging technology can revolutionize the way we interact with the
            internet. Through my studies and hands-on experience, I have
            developed a strong understanding of blockchain technology and its
            potential applications in web development.
          </p>
          <p className="py-2 text-gray-600 italic font-medium text-justify">
            As I continue on my learning journey, I am eager to explore new
            technologies and push the boundaries of what is possible in web
            development. I am excited to apply my knowledge and skills to create
            innovative solutions and deliver exceptional user experiences.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
