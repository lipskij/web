"use client";
import React from "react";
import { AboutCard, ContactsCard, WorkCard } from "./CardComponents";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-6 text-white">
            Hello, my name is{" "}
            <div className="name">
              <span>E</span>
              <span>m</span>
              <span>i</span>
              <span>l</span>
            </div>
          </h1>
          <p className="hero__subtitle text-lg md:text-xl text-gray-600">
            Front-end developer based in Lithuania, Vilnius.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="transition-all duration-200 ease-in-out pt-4 hover:scale-105 hover:shadow-xl">
            <AboutCard />
          </div>
          <div className="transition-all duration-200 ease-in-out pt-4 hover:scale-105 hover:shadow-xl">
            <WorkCard />
          </div>
          <div className="transition-all duration-200 ease-in-out pt-4 hover:scale-105 hover:shadow-xl">
            <ContactsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
