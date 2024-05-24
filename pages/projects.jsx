import React from "react";
import Head from "next/head";
import Image from "next/image";
import VloggersTvImg from "../public/assets/projects/VloggersTv.png";
import CameraRentalImg from "../public/assets/projects/CameraRental.png";
import LhanleeSalonImg from "../public/assets/projects/LhanleeSalon.png";
import BauchaImg from "../public/assets/projects/Baucha.png";
import LaravelPetCareImg from "../public/assets/projects/LaravelPetCare.png";
import PhpPetClinicImg from "../public/assets/projects/PhpPetClinic.png";
import VloggersImg from "../public/assets/projects/Vloggers.png";
import MayaCLIImg from "../public/assets/projects/MayaCLI.png";
import PromdiImg from "../public/assets/projects/Promdi.png";
import YahuImg from "../public/assets/projects/Yahu.png";

const projects = () => {
  return (
    <>
      <Head>
        <title>Gabriel’s | Projects</title>
        <meta
          name="description"
          content="I’m a full stack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div
        id="projects"
        className="xss:px-10 lg:px-0 pb-12 max-w-[1400px] mx-auto pt-[120px]"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a href="https://www.lhanlee-salon.com/" className="text-black ">
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={LhanleeSalonImg}
                alt="LhanleeSalon"
              />
            </a>
            <div className="p-4">
              <a
                href="https://www.lhanlee-salon.com/"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">Lhanlee Salon</h2>
              </a>

              <p className="text-gray-800">
                This project is built using the MERN stack (MongoDB, Express,
                React + Vite + Million.js, Node.js), enhanced with Redux Toolkit
                for state management and RTK Query for efficient data fetching.
                It features Tailwind CSS with DaisyUI for the User Interface,
                PayMaya (Maya) for payments, Twilio for notifications, and React
                Native for the mobile app. The backend is deployed using Render,
                and the frontend is deployed using Vercel.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://camera-rental-fe.vercel.app/"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={CameraRentalImg}
                alt="CameraRental"
              />
            </a>
            <div className="p-4">
              <a
                href="https://camera-rental-fe.vercel.app/"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">Camera Rental</h2>
              </a>

              <p className="text-gray-800">
                This project was created using MERN (MongoDB, Express, React, +
                Vite, Node.js) stack . It incorporates the powerful state
                management tools of Redux Toolkit and the streamlined data
                fetching capabilities of RTK Query. For the user interface,
                Material-UI was utilized, and for deployment, the backend is
                hosted on Render while the frontend is hosted on Vercel.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://gabthegreat25.github.io/Final-Project-ITOS322-T/"
              className="text-black"
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={VloggersTvImg}
                alt="VloggersTv"
              />
            </a>
            <div className="p-4">
              <a
                href="https://gabthegreat25.github.io/Final-Project-ITOS322-T/"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">
                  Final-Project-ITOS322-T
                </h2>
              </a>

              <p className="text-gray-800">
                This project was created using Tailwind, SCSS, HTML, and JS.
                Tailwind provided a customizable CSS framework, while SCSS was
                used for maintainable and organized CSS. HTML structured the web
                pages, and JS added interactivity and dynamic behavior. These
                tools enabled the creation of a modern, responsive, and
                functional web application. The application was deployed using
                GitHub Pages.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://www.figma.com/design/GuV6hEJOj63s1QcWl8GWZr/crypto-8?node-id=0-1&t=RBekDImdGqaM1r6P-0"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={BauchaImg}
                alt="Baucha"
              />
            </a>
            <div className="p-4">
              <a
                href="https://www.figma.com/design/GuV6hEJOj63s1QcWl8GWZr/crypto-8?node-id=0-1&t=RBekDImdGqaM1r6P-0"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">
                  BAUCHA Crypto Voucher
                </h2>
              </a>

              <p className="text-gray-800">
                This project was my first ever hackathon where I contributed to
                the frontend using React and helped with Figma for design. This
                experience gave me a hands-on opportunity to apply my skills in
                a collaborative environment and work with a dynamic team to
                build a functional web application.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/Mendoza-Medalla-Repository"
              className="text-black"
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={LaravelPetCareImg}
                alt="LaravelPetCare"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/Mendoza-Medalla-Repository"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">Pet Care</h2>
              </a>

              <p className="text-gray-800">
                This project was built using Laravel and Tailwind. Laravel
                provided a powerful and elegant PHP framework for backend
                development, while Tailwind offered a customizable CSS framework
                for styling. HTML structured the web pages, and JavaScript added
                interactivity and dynamic behavior. These tools enabled the
                creation of a modern and responsive web application.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/php_pet_clinic"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={PhpPetClinicImg}
                alt="PhpPetClinic"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/php_pet_clinic"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">Pet Clinic</h2>
              </a>

              <p className="text-gray-800">
                This project was built using PHP, HTML, CSS, and JavaScript. PHP
                provided a powerful and elegant framework for backend
                development, while CSS offered a customizable framework for
                styling. HTML structured the web pages, and JavaScript added
                interactivity and dynamic behavior. Together, these technologies
                ensured the creation of a modern and responsive web application.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/VloggersTV"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={VloggersImg}
                alt="Vloggers"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/VloggersTV"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">VloggersTV</h2>
              </a>

              <p className="text-gray-800">
                This project was created using Angular for the frontend, along
                with SCSS and Tailwind for styling. I contributed significantly
                to the frontend development in Angular, ensuring the web
                application was dynamic and responsive. Additionally, I played a
                key role in the design phase, using Figma to create a cohesive
                and visually appealing interface. This experience provided me
                with the opportunity to apply my skills in a collaborative
                environment, working with a dynamic team to build a functional
                and modern web application.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/cli"
              className="text-black"
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={MayaCLIImg}
                alt="MayaCLI"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/cli"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">MayaCLI Web</h2>
              </a>

              <p className="text-gray-800">
                This project utilized Angular for the frontend, complemented by
                SCSS and Tailwind for styling. I made substantial contributions
                to the frontend development, focusing on ensuring the web
                applications dynamism and responsiveness. Additionally, I played
                a pivotal role in the design phase, utilizing Figma to craft a
                cohesive and visually appealing interface. This experience
                afforded me the chance to apply my skills in a collaborative
                setting, collaborating with a dynamic team to construct a robust
                and cutting-edge web application.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/yahu-rider-web"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={YahuImg}
                alt="Yahu"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/yahu-rider-web"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">Yahu</h2>
              </a>

              <p className="text-gray-800">
                This project was developed using Angular for the frontend, with
                SCSS and Tailwind for styling. I played a major role in the
                Angular frontend development, ensuring the web application was
                dynamic and responsive. I also contributed significantly to the
                design phase, using Figma to create a cohesive and visually
                appealing interface. This experience enabled me to utilize my
                skills in a collaborative setting, working with a dedicated team
                to develop an effective and up-to-date web application.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/GabTheGreat25/prodifarm-web"
              className="text-black "
            >
              <Image
                height="100%"
                width="100%"
                layout="responsive"
                src={PromdiImg}
                alt="Promdi"
              />
            </a>
            <div className="p-4">
              <a
                href="https://github.com/GabTheGreat25/prodifarm-web"
                className="text-black hover:text-[#5651e5]"
              >
                <h2 className="mb-2 text-2xl font-bold">PromdiFarm</h2>
              </a>

              <p className="text-gray-800">
                This project was built using Angular and SCSS. Angular provided
                a powerful framework for frontend development, while SCSS
                offered a customizable framework for styling. I contributed by
                adding design elements and implementing logic, ensuring the
                creation of a responsive and dynamic web application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
