"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m <span className="">Lucas</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  An upcoming software developer based in Brazil, building
                  functional websites and applications.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-card bg-muted md:w-[350px]">
                <Image
                  src="/portfolio.jpg?height=400&width=400"
                  alt="Developer portrait"
                  className="object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
