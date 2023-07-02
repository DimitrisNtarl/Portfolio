import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* <motion.div
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg  "
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image src="/prof.png" alt="prof pic" height={96} width={80} />
  </motion.div> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]">Some</span> things
          about me
        </h4>
        <p className="text-xl">
          I am a highly motivated undergraduate Computer and Information
          Sciences student with a strong foundation in front-end development.
          Skilled in HTML, CSS, and JavaScript, with experience in creating
          responsive and visually appealing web interfaces. Passionate about
          user-centric design and staying updated with the latest front-end
          frameworks and technologies. Effective communicator and collaborator,
          adept at working in teams to deliver exceptional results. Eager to
          leverage my technical skills and enthusiasm for front-end development
          to contribute to innovative projects.
        </p>
        <p>
          <b>IONIAN UNIVERSITY</b> <br />
          <br /> Bachelor’s Degree, Computer and Information Sciences 2019 -
          Present (Expected 2023)
        </p>
        <br />
        <ul>
          <li>
            <b>CERTIFICATES</b>
          </li>
          <li>
            <br />
          </li>
          <li>
            PROGRAMMING FOUNDATIONS WITH JAVASCRIPT, HTML AND CSS (WITH HONORS)
            | COURSERA | 2020
          </li>
          <li>
            <br />
          </li>
          <li>RESPONSIVE WEB DESIGN | FREECODECAMP | 2022</li>
        </ul>
      </div>
    </motion.div>
  );
}
