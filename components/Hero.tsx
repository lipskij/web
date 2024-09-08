"use client";
import React from "react";
import { AboutCard, ContactsCard, WorkCard } from "./CardComponents";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero flex-grow flex flex-col justify-evenly py-8 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-8 h-half">
          <h1 className="hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <AboutCard />
          </div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <WorkCard />
          </div>
          <div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <ContactsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
