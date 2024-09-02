"use client";
import React from "react";
import FloatingParticles from "./FloatingParticles";
import { AboutCard, ContactsCard, WorkCard } from "./CardComponents";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero flex-grow flex flex-col justify-evenly py-8 px-4 md:px-8">
        <FloatingParticles count={50} />
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <h1 className="hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hello, my name is Emil
          </h1>
          <p className="hero__subtitle text-lg md:text-xl text-gray-600">
            Front-end developer based in Lithuania, Vilnius.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <AboutCard />
          <WorkCard />
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
