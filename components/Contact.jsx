import Image from "next/image";
import Link from "next/link";
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
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Gab from "../public/assets/about-me/gab-1x1.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="font-semibold text-center text-5xl pb-4 tracking-widest text-[#5651e5]">
          Contact Me
        </p>
        <h3 className="py-4 text-3xl font-medium text-center">Get In Touch</h3>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4 ">
              <div className="flex justify-center">
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src={Gab}
                  alt="Gab"
                />
              </div>
              <div>
                <h2 className="py-2 text-center">Gabriel Mendoza</h2>
                <p className="text-center ">Full Stack Developer</p>
                <p className="py-4 text-center">
                  I am available for freelance or part-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 pb-2 font-semibold text-center">
                  Connect With Me
                </p>
                <div className="hidden md:grid grid-cols-4 m-auto max-w-[18rem] gap-4">
                  <a
                    href="https://www.linkedin.com/in/gabriel-mendoza-218a07252/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/GabTheGreat25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/gabthegreat25/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/Codeeee_is_Lifeeee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaFacebookF />
                    </div>
                  </a>
                  <a
                    href="https://t.me/Gabz092501"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaTelegram />
                    </div>
                  </a>
                  <a
                    href="https://stackoverflow.com/users/19642389/gabthegreat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaStackOverflow />
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/Gaabsyy25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaTwitter />
                    </div>
                  </a>
                  <a
                    href="https://discord.com/users/433106513280892928"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#f1f2f6]">
                      <FaDiscord />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/66bad9b1-3e7b-445e-a0a5-add0122bc6a3"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-lg">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-lg">Phone Number</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-lg">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-lg">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-lg">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="12"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
