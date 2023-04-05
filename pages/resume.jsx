import React from "react";
import Head from "next/head";
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

const resume = () => {
  return (
    <>
      <Head>
        <title>Gab | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Gabriel Mendoza</h2>
          <div className="flex">
            <p className="font-bold italic text-xl">09938465564</p>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Time Management <span className="px-1">|</span> Hard Working
              <span className="px-1">|</span> Communication Skills
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="text-justify">
          I am a hardworking and self-motivated individual who thrives in
          challenging and fast-paced environments. I believe that my dedication,
          passion, and enthusiasm for technology make me a valuable asset to any
          team. My ultimate goal is to leverage my knowledge and skills to
          contribute to the development of cutting-edge technologies that can
          make a positive impact on people’s lives.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Software Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next Js
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>Node Js
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span>Vue
            <span className="px-2">|</span>Sass
            <span className="px-2">|</span>Figma
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Postman
            <span className="px-2">|</span>PHP
            <span className="px-2">|</span>Laravel
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>Insomnia
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Yahu Delivery</span>
            <span className="px-2">|</span>Philippines | 2022-02 - 2022-06
          </p>
          <p className="py-1 italic">Front End Web Developer | UI/UX</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed a custom delivery website, leveraging
              front-end technologies to optimize the user experience for
              convenience and efficiency.
            </li>
            <li>
              Utilized Figma to design and develop intuitive and user-friendly
              UI/UX for both customer and rider delivery websites, optimizing
              the overall user experience.
            </li>
            <li>
              Used my expertise in Angular and Tailwind to enhance app
              performance, making it smoother and more enjoyable for users to
              navigate.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Web3 Hackathon</span>
            <span className="px-2">|</span>Philippines | 2022-12-11 - 2022-13-11
          </p>
          <p className="py-1 italic">Front End Web Developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Achieved a top 7 finalist position out of over 20 participants.
            </li>
            <li>
              Designed and developed UI/UX for an NFT voucher website using
              Figma.
            </li>
            <li>
              Leveraged skills in front-end web development to create a visually
              appealing and responsive user interface.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Freelancing</span>
            <span className="px-2">|</span>Philippines
          </p>
          <p className="py-1 italic">
            Front End Web Developer | Backend Developer
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              I have developed websites using MERN, Laravel, and PHP, showcasing
              my expertise in full-stack web development and delivering
              efficient and user-friendly digital solutions.
            </li>
            <li>
              Crafted and fulfilled various online commissions, ensuring
              adherence to client specifications and delivering exceptional
              outcomes consistently.
            </li>
            <li>
              Enhanced website functionality and user experience through the
              application of strong problem-solving and analytical skills,
              promptly addressing and resolving technical issues to ensure
              seamless operation.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
