import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
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
        src="/webdev.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">Test</p>
        <div className="flex space-x-2 my-2">
          <Image src="/HTML-5.svg" alt="html5" width={40} height={40} />
          <Image src="/CSS.svg" alt="html5" width={40} height={40} />
          <Image src="/Javascript.svg" alt="html5" width={40} height={40} />
          <Image src="/Typescript.svg" alt="html5" width={40} height={40} />
          <Image src="/Next-js.svg" alt="html5" width={40} height={40} />
          <Image src="/Npm.svg" alt="html5" width={40} height={40} />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...-Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
