import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to see its current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/HTML-5.svg"
              width={96}
              height={96}
              alt=""
              className="  border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">85%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/CSS.svg"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">80%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/JavaScript.svg"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">75%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/Next-js.svg"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">70%</p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/Node-JS.svg"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">60%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/github.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">90%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/react.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-white opacity-100">60%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/tailwind.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">80%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/git.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">75%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/wordpress.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">80%</p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/linux.png"
              width={96}
              height={96}
              alt=""
              className="border-gray-500 object-cover xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">85%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
