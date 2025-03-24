"use client";
import AnimatedPhoto from "@/components/AnimatedPhoto";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <main className="flex-1">
        <section className="w-full py-12 md:py-34 lg:py-42 xl:py-58">
          <div className="px-4">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    Hi, I&apos;m{" "}
                    <motion.span
                      className="text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
                        type: "spring",
                      }}
                    >
                      Lucas
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-muted-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  >
                    An upcoming software developer based in Brazil, building
                    functional websites and applications.
                  </motion.p>
                </motion.div>
              </div>
              <AnimatedPhoto
                imageSrc="/portfolio.jpg"
                imageAlt="Developer portrait"
              />
            </div>
          </div>
        </section>
      </main>
  );
};

export default Hero;
