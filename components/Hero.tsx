"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [slideUp, setSlideUp] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Remove the cz-shortcut-listen attribute if it exists
  useEffect(() => {
    const removeAttribute = () => {
      document.querySelectorAll("[cz-shortcut-listen]").forEach((el) => {
        el.removeAttribute("cz-shortcut-listen");
      });
    };
    removeAttribute();
  }, []);
  // when hovering should show the map
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      <div
        className={`overlay ${slideUp ? "bg-transparent hidden" : "bg-black"}`}
      >
        <Image
          className="wave"
          src="./hand2.svg"
          alt="hand"
          height={200}
          width={200}
        />
      </div>
      <div className="hero">
        <div className="flex-1 pt-36">
          <NameLabel />
          <p className="hero__subtitle">
            Web developer based in{" "}
            <span
              className="country"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              Lithuania
            </span>
            .
          </p>
        </div>
      </div>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: mousePosition.y + 10, // Adjust for cursor offset
            left: mousePosition.x + 10, // Adjust for cursor offset
            width: "300px",
            height: "300px",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Image src="/map.png" height={300} width={300} alt="map" />
        </div>
      )}
    </div>
  );
};
export default Hero;

const NameLabel = () => {
  return (
    <div className="div">
      <h1 className="hero__title">Hello, my name is NAME</h1>
    </div>
  );
};
