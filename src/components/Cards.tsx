import React from "react";
import { Meteors } from "../components/ui/meteors";
const CardsData = [
  {
    title: "Master Web Development",
    pera: "Unlock the power of web development with our comprehensive courses.",
  },
  {
    title: "Master Mobile App Development",
    pera: "Discover the world of mobile app development with our specialized courses.",
  },
  {
    title: "Dive into Game Development",
    pera: "Explore the exciting world of game development with our immersive courses.",
  },
  {
    title: "Master 2D Designing Skills",
    pera: "Explore the creative world of 2D designing with our comprehensive courses.",
  },
  {
    title: "Explore 3D Modeling Mastery",
    pera: "Delve into the world of 3D modeling with our specialized courses.",
  },
  {
    title: "Master Content Writing Skills",
    pera: "Explore the art and science of content creation with our specialized courses.",
  },
];
function Cards() {
  return (
    <div>
      <div>
        <p className="text-center text-xl  text-teal-500  font-semibold">
          Our Courses
        </p>
        <h1 className="text-5xl  font-bold text-center pt-8">
          Learn With the Best
        </h1>
      </div>
      <div className="grid grid-cols-3 mob:grid-cols-1 gap-y-10 p-10 pl-20">
        {CardsData.map((data) => {
          return (
            <div className="" key={data.title}>
              <div className=" w-full h-full relative max-w-xs">
                <div className="absolute inset-0 w-full  bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border h-[20rem] pt-10 border-gray-800  px-4   overflow-hidden rounded-2xl  justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-10">
                      {data.title}
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-10">
                      {data.pera}
                    </p>

                    <button className="border px-4 py-1 rounded-lg hover:bg-white hover:text-black transition-all duration-150  border-gray-500 text-gray-300">
                      Explore
                    </button>
                  </div>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cards;