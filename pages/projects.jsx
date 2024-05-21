import React from "react";
import Head from "next/head";
import Image from "next/image";
import VloggersTvImg from "../public/assets/projects/VloggersTv.png";
import CameraRentalImg from "../public/assets/projects/CameraRental.png";
import LhanleeSalonImg from "../public/assets/projects/LhanleeSalon.png";

const projects = () => {
  return (
    <>
      <Head>
        <title>Gabriel’s | Projects</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div
        id="projects"
        className="xss:px-10 lg:px-0 pb-12 max-w-[1400px] mx-auto pt-[120px]"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mb-2 text-2xl font-bold">VloggersTv</h2>
              </a>

              <p className="text-gray-800">
                This project was created using Tailwind, SCSS, HTML, and JS.
                Tailwind provided a customizable CSS framework, while SCSS was
                used for maintainable and organized CSS. HTML structured the web
                pages, and JS added interactivity and dynamic behavior. These
                tools enabled the creation of a modern, responsive, and
                functional web application. The application was deployed using
                GitHub Pages, which hosts static websites directly from a GitHub
                repository, allowing for easy and free deployment.
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
                href="https://camera-rental-fe.vercel.app/"
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
        </div>
      </div>
    </>
  );
};

export default projects;
