import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/SpotLight";
import { Button } from "../components/ui/moving-border";
function HeroSection() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full mt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  ">
          Empower your future with knowledge.
        </h1>
        <p className="mt-6 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
          Join our transformative IT courses, tailored for beginners and
          professionals alike. Dive into cutting-edge topics led by industry
          experts, gaining hands-on experience to unlock your potential in the
          evolving world of IT.
        </p>
        <div className="text-center mt-10">
          <Link href={"/courses"}>
            {" "}
            <Button
              borderRadius="1.85rem"
              className="bg-white dark:bg-black  text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
