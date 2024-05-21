import React from "react";
import Head from "next/head";

const resume = () => {
  return (
    <>
      <Head>
        <title>Gabriel’s | Resume</title>
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
            <p className="text-xl italic font-bold">
              09938465564(DITO) | 09763743514(GOMO)
            </p>
          </div>
        </div>
        <div className="py-4 text-xl font-bold tracking-wider text-center uppercase">
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
        <div className="py-4 text-center">
          <h5 className="py-2 text-2xl text-center underline">Skills</h5>
          <p className="flex flex-wrap justify-center py-2">
            <span className="px-2 font-bold">Technical Skills</span>
            <span className="px-2">|</span>
            <span className="px-2">Software Developer</span>
            <span className="px-2">|</span>
            <span className="px-2">HTML</span>
            <span className="px-2">|</span>
            <span className="px-2">CSS</span>
            <span className="px-2">|</span>
            <span className="px-2">Javascript</span>
            <span className="px-2">|</span>
            <span className="px-2">TypeScript</span>
            <span className="px-2">|</span>
            <span className="px-2">Tailwind</span>
            <span className="px-2">|</span>
            <span className="px-2">MongoDB</span>
            <span className="px-2">|</span>
            <span className="px-2">React</span>
            <span className="px-2">|</span>
            <span className="px-2">Next Js</span>
            <span className="px-2">|</span>
            <span className="px-2">Express</span>
            <span className="px-2">|</span>
            <span className="px-2">Node Js</span>
            <span className="px-2">|</span>
            <span className="px-2">Angular</span>
            <span className="px-2">|</span>
            <span className="px-2">Vue</span>
            <span className="px-2">|</span>
            <span className="px-2">Sass</span>
            <span className="px-2">|</span>
            <span className="px-2">Figma</span>
            <span className="px-2">|</span>
            <span className="px-2">Bootstrap</span>
            <span className="px-2">|</span>
            <span className="px-2">Postman</span>
            <span className="px-2">|</span>
            <span className="px-2">PHP</span>
            <span className="px-2">|</span>
            <span className="px-2">Laravel</span>
            <span className="px-2">|</span>
            <span className="px-2">MySQL</span>
            <span className="px-2">|</span>
            <span className="px-2">Insomnia</span>
            <span className="px-2">|</span>
            <span className="px-2">Nest Js</span>
            <span className="px-2">|</span>
            <span className="px-2">React Native</span>
            <span className="px-2">|</span>
            <span className="px-2">Render</span>
            <span className="px-2">|</span>
            <span className="px-2">Vercel</span>
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}

        <div className="py-6">
          <p className="italic">
            <span className="italic font-bold">Yahu Delivery</span>
            <span className="px-2">|</span>Philippines | 2022-02 - 2022-06
          </p>
          <p className="py-1 italic">Front End Web Developer | UI/UX</p>
          <ul className="py-1 leading-relaxed list-disc list-outside px-7">
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
            <span className="italic font-bold">Web3 Hackathon</span>
            <span className="px-2">|</span>Philippines | 2022-12-11 - 2022-13-11
          </p>
          <p className="py-1 italic">Front End Web Developer</p>
          <ul className="py-1 leading-relaxed list-disc list-outside px-7">
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
            <span className="italic font-bold">Freelancing</span>
            <span className="px-2">|</span>Philippines
          </p>
          <p className="py-1 italic">
            Front End Web Developer | Backend Developer
          </p>
          <ul className="py-1 leading-relaxed list-disc list-outside px-7">
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
            <li>
              Experienced using Twilio SMS and PayMaya / Maya for payment.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
