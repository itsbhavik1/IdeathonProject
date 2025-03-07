"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import {  Highlight } from "./ui/hero-highlight";

const HeroHighlightDemo = () => {
  return (

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="pb-[18vw] text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Books That Inspire, Conversations That Connect,
        {" "}
        <Highlight className="text-black dark:text-white">
        Your Literary Haven Awaits!
        </Highlight>
      </motion.h1>
   
  );
};

export default HeroHighlightDemo;
