"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Unlock Your Potential with Comprehensive Courses",
    description:
      "Explore a diverse range of  Courses tailored to meet both beginner and advanced skill levels. Whether you're venturing into coding, cybersecurity, or data science, our expert-led curriculum ensures you gain practical skills and industry insights.",
    content: (
      <div className="h-full w-full  bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Unlock Your Potential
      </div>
    ),
  },
  {
    title: "Empower Your Career with Cutting-Edge Technology Training",
    description:
      "Stay ahead in the rapidly evolving tech industry with our courses on cloud computing, mobile app development, and AI. Learn from professionals and sharpen your abilities through hands-on projects that mirror real-world scenarios",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover text-center"
          alt="Technology Training"
        />
      </div>
    ),
  },
  {
    title: "Master In-Demand Skills with Expert Guidance",
    description:
      "From web development fundamentals to advanced game design techniques, our courses are designed to equip you with the skills employers seek. Join our community of learners and transform your passion into a successful career",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Master In-Demand Skills
      </div>
    ),
  },
  //   {
  //     title: "Running out of content",
  //     description:
  //       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //         Running out of content
  //       </div>
  //     ),
  //   },
];
function Scrolling() {
  return (
    <div className="py-16 scrollbar">
      <StickyScroll content={content} />
    </div>
  );
}

export default Scrolling;
