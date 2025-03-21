"use client";

import { motion, useAnimation } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

interface AnimatedPhotoProps {
  imageSrc: string;
  imageAlt: string;
  pathColor?: string;
  pathWidth?: number;
  animationDuration?: number;
  delay?: number;
  repeat?: boolean | number;
}

export default function AnimatedPhoto({
  imageSrc = "/portfolio.jpg",
  imageAlt = "Developer portrait",
  pathColor = "oklch(41.703% 0.099 251.473)",
  pathWidth = 3,
  animationDuration = 2,
  delay = 0.5,
  repeat = true,
}: AnimatedPhotoProps) {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        pathLength: 1,
        transition: {
          duration: animationDuration,
          ease: "easeInOut",
          delay: delay,
        },
      });

      if (repeat) {
        await controls.start({
          pathLength: 0,
          transition: { duration: 0 },
        });
        animate();
      }
    };

    animate();
  }, [controls, animationDuration, delay, repeat]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative aspect-square overflow-hidden rounded-full w-[220px] md:w-[300px] lg:w-[340px]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="object-cover"
          width={400}
          height={400}
        />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="50"
            stroke={pathColor}
            strokeWidth={pathWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={controls}
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
