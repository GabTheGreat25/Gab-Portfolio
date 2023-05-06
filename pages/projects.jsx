import React from "react";
import Head from "next/head";
import Image from "next/image";
import HomeImg from "../public/assets/about-me/Gab-Laptop.jpg";

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
            <Image
              height="100%"
              width="100%"
              layout="responsive"
              src={HomeImg}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-2">Card Title</h2>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              height="100%"
              width="100%"
              layout="responsive"
              src={HomeImg}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-2">Card Title</h2>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              height="100%"
              width="100%"
              layout="responsive"
              src={HomeImg}
              alt="Placeholder Image"
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-2">Card Title</h2>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
