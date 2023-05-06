import React from "react";
import Head from "next/head";
import Image from "next/image";
import VloggersTvImg from "../public/assets/projects/VloggersTv.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a
              href="https://gabthegreat25.github.io/Final-Project-ITOS322-T/"
              className="text-black hover:text-[#5651e5]"
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
                <h2 className="font-bold text-2xl mb-2">VloggersTv</h2>
              </a>

              <p className="text-gray-800">
                This project was created using a combination of Tailwind, SCSS,
                HTML, and JS. Tailwind provided a powerful and customizable CSS
                framework, while SCSS was used to write more maintainable and
                organized CSS. HTML was used to structure the content of the web
                pages, while JS was used to add interactivity and dynamic
                behavior to the user interface. Together, these tools enabled
                the creation of a modern, responsive, and functional web
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
