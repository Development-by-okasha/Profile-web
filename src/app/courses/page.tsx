"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";

function page() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-slate-950  max-w-lg bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        Courses Page coming soon – stay tuned!
      </motion.h1>
    </LampContainer>
  );
}

export default page;
