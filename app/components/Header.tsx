import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex sticky top-0 flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center pt-2"
      >
        {/* Social Icons */}
        <div className="px-2 hover:bg-[#F7AB0A]/50">
          <SocialIcon
            url="https://github.com/DimitrisNtarl"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="px-2 hover:bg-[#F7AB0A]/50">
          <SocialIcon
            url="https://linkedin.com/in/dimitrios-ntarlagiannis"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="px-2 hover:bg-[#F7AB0A]/50">
          <SocialIcon
            url="https://facebook.com/dimitrisntarl"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="px-2 hover:bg-[#F7AB0A]/50">
          <SocialIcon
            url="https://open.spotify.com/user/21ziaephe5cy6dedyukdceowi?si=0e3cf35ac6b843b2"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="px-2 hover:bg-[#F7AB0A]/50">
          <SocialIcon
            url="https://twitter.com/DNtarlagiannis"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center text-gray-300 px-2"
      >
        <Link href="#contact">
          <p className="uppercase md:inline-flex text-lg text-gray-400 p-2  hover:bg-[#F7AB0A]/50">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
