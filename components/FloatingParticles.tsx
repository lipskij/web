"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  angle: number;
  speed: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({
  x,
  y,
  size,
  angle,
  speed,
  delay,
}) => {
  const controls = useAnimationControls();

  const animate = useCallback(() => {
    const duration = 200 / speed; // Adjusted for slower movement
    controls.start({
      x: x + Math.cos(angle) * 2000,
      y: y + Math.sin(angle) * 2000,
      opacity: 0.5,
      transition: {
        x: { duration: duration, ease: "linear" },
        y: { duration: duration, ease: "linear" },
        opacity: { duration: 1, delay: delay },
      },
    });
  }, [x, y, angle, speed, delay, controls]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-50"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      initial={{ opacity: 0 }}
      animate={controls}
    />
  );
};

interface FloatingParticlesProps {
  count?: number;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 50,
}) => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const createParticle = useCallback(
    (index: number): ParticleProps => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1, // Slightly reduced max size
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 1.5 + 0.5, // Adjusted for a range of 0.5 to 2
      delay: index + 0.5,
    }),
    [dimensions]
  );

  const updateParticles = useCallback(() => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const newX = particle.x + Math.cos(particle.angle) * particle.speed;
        const newY = particle.y + Math.sin(particle.angle) * particle.speed;

        if (
          newX < -50 ||
          newX > dimensions.width + 50 ||
          newY < -50 ||
          newY > dimensions.height + 50
        ) {
          return createParticle(Math.floor(Math.random() * count));
        }

        return { ...particle, x: newX, y: newY };
      })
    );
  }, [dimensions.width, dimensions.height, createParticle, count]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setParticles(Array.from({ length: count }, createParticle));
    }
  }, [count, dimensions, createParticle]);

  useEffect(() => {
    const intervalId = setInterval(updateParticles, 50);
    return () => clearInterval(intervalId);
  }, [updateParticles]);

  const memoizedParticles = useMemo(
    () =>
      particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      )),
    [particles]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {memoizedParticles}
    </div>
  );
};

export default FloatingParticles;
