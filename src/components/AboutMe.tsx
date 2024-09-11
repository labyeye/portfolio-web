import React from "react";
import Image from "next/image";
import heroImage from "@/assets/Ahmed.jpeg";
import { Twitter, GithubIcon, Linkedin } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 md:col-span-3 lg:col-span-4">
      <div className="p-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
          <Image
            src={heroImage}
            alt="Ahmed's profile picture"
            className="h-32 w-32 rounded-full object-cover object-center shadow-md ring-4 ring-blue-500 dark:ring-blue-400"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              Labh Chandra Bothra
            </h1>
            <p className="mb-4 text-blue-600 dark:text-blue-400">@labyeye</p>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              Hey there, I&apos;m Labh, Skilled in JavaScript and web
              development, I craft efficient, user-focused web applications. In
              addition to web development, I have a passion for game
              development, where I apply my skills to create engaging and
              immersive experiences. With a commitment to high-quality solutions
              and a drive for continuous learning, I align technology with
              business goals and enhance user experiences in both web and game
              projects.
            </p>

            <div className="flex justify-center space-x-4 sm:justify-start">
              <a
                href="https://github.com/labyeye"
                target="_blank"
                className="text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/labh-bothra/"
                target="_blank"
                className="text-blue-700 transition-colors duration-300 hover:text-blue-800"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
