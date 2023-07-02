import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600pp] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/tray.jpg"
            alt=""
          />
          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Tray Server</h4>
            <p className="font-bold text-2xl mt-1">Giannoulis Hotel</p>
            {/* 
              <div className="flex space-x-2 my-2">
                <Image src="/HTML-5.svg" alt="html5" width={40} height={40} />
                <Image src="/CSS.svg" alt="html5" width={40} height={40} />
                <Image src="/Javascript.svg" alt="html5" width={40} height={40} />
                <Image src="/Typescript.svg" alt="html5" width={40} height={40} />
                <Image src="/Next-js.svg" alt="html5" width={40} height={40} />
                <Image src="/Npm.svg" alt="html5" width={40} height={40} />
              </div>
            */}
            <p className="uppercase py-5 text-gray-300">
              Jun 2019 - Sep 2019 (Seasonal)
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Multitasking</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600pp] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/tray.jpg"
            alt=""
          />
          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Lead Server</h4>
            <p className="font-bold text-2xl mt-1">Giannoulis Hotel</p>
            {/* 
            <div className="flex space-x-2 my-2">
              <Image src="/HTML-5.svg" alt="html5" width={40} height={40} />
              <Image src="/CSS.svg" alt="html5" width={40} height={40} />
              <Image src="/Javascript.svg" alt="html5" width={40} height={40} />
              <Image src="/Typescript.svg" alt="html5" width={40} height={40} />
              <Image src="/Next-js.svg" alt="html5" width={40} height={40} />
              <Image src="/Npm.svg" alt="html5" width={40} height={40} />
            </div>
            */}
            <p className="uppercase py-5 text-gray-300">
              Jun 2020 - Sep 2020 (Seasonal)
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Leadership Development</li>
              <li>Teamwork</li>
              <li>Multitasking</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600pp] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/hookah.png"
            alt=""
          />
          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Hookah Maker & Server</h4>
            <p className="font-bold text-2xl mt-1">Shisha Sensations</p>
            {/*
            <div className="flex space-x-2 my-2">
              <Image src="/HTML-5.svg" alt="html5" width={40} height={40} />
              <Image src="/CSS.svg" alt="html5" width={40} height={40} />
              <Image src="/Javascript.svg" alt="html5" width={40} height={40} />
              <Image src="/Typescript.svg" alt="html5" width={40} height={40} />
              <Image src="/Next-js.svg" alt="html5" width={40} height={40} />
              <Image src="/Npm.svg" alt="html5" width={40} height={40} />
            </div>
             */}
            <p className="uppercase py-5 text-gray-300">
              Jun 2021 - Sep 2021 (Seasonal)
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Pressure Handling</li>
              <li>Multitasking</li>
              <li>Communication</li>
              <li>Customer Relations</li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
