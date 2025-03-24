"use client";

import SkillTabs from "@/components/SkillTabs";

const About = () => {
  return (
    <main id="about" className="flex-1 bg-muted/35">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 grid-rows-1">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  My story
                </h1>
                <p className="text-xl text-muted-foreground">
                  At 32, I’m embarking on a new adventure. One that I’ve always
                  been curious about but only recently decided to pursue:
                  becoming a software developer.
                </p>

                <p className="text-xl text-muted-foreground mt-4">
                  With a background in Business Administration, I’ve spent years
                  navigating different industries, even running my own
                  businesses. Through these experiences, I developed a
                  problem-solving mindset, adaptability, and a passion for
                  creating solutions.
                </p>

                <p className="text-xl text-muted-foreground mt-4">
                  Now, with the advancement of AI tools learning how to code
                  became possible and more accessible. I am Eager to build and
                  contribute to meaningful projects. Breaking into tech isn’t
                  easy, but I believe that dedication, curiosity, and
                  perseverance can open doors.
                </p>

                <p className="text-xl text-muted-foreground mt-4">
                  I’m looking for that first opportunity. If you’re willing to
                  take a chance on a motivated self-starter with a fresh
                  perspective, let’s connect!
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col items-center">
              <SkillTabs />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
