import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Typescript from "../public/assets/skills/typescript.png";
import Mongo from "../public/assets/skills/mongo.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Node from "../public/assets/skills/node.png";
import Angular from "../public/assets/skills/angular.png";
import Vue from "../public/assets/skills/vue.png";
import Express from "../public/assets/skills/express.png";
import Sass from "../public/assets/skills/sass.png";
import Figma from "../public/assets/skills/figma.png";
import Postman from "../public/assets/skills/postman.png";
import Bootsrap from "../public/assets/skills/bootsrap.png";
import Php from "../public/assets/skills/php.png";
import Laravel from "../public/assets/skills/laravel.png";
import Mysql from "../public/assets/skills/mysql.png";
import Insomnia from "../public/assets/skills/insomnia.png";
import Nest from "../public/assets/skills/nest.png";
import ReactNative from "../public/assets/skills/react-native.png";
import Render from "../public/assets/skills/render.png";
import Vercel from "../public/assets/skills/vercel.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-full px-2 py-6 bg-[#34495e]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-semibold text-center text-6xl pb-4 tracking-widest text-[#7795b4]">
          Skills
        </p>
        <h2 className="pt-4 pb-8 font-normal text-center text-white">
          What I Can Do
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Typescript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Angular} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Vue} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vue</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Sass} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sass</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Figma} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Bootsrap} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootsrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Postman} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Php} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Php</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Laravel} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Mysql} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mysql</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Insomnia} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Insomnia</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Nest} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nest</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={ReactNative} width="90px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Render} width="100px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Render</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in bg-white shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Vercel} width="90px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vercel</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
