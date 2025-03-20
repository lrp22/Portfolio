"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

const SkillTabs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies and tools I work with.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-3 py-2 lg:grid-cols-1 xl:grid-cols-3">
            <Card className="border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="grid gap-1">
                  <CardTitle>Frontend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-foreground">HTML</Badge>
                  <Badge className="text-foreground">CSS</Badge>
                  <Badge className="text-foreground">JavaScript</Badge>
                  <Badge className="text-foreground">TypeScript</Badge>
                  <Badge className="text-foreground">React/Native</Badge>
                  <Badge className="text-foreground">Next.js</Badge>
                  <Badge className="text-foreground">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="grid gap-1">
                  <CardTitle>Backend</CardTitle>
                </div>
              </CardHeader>
              <CardContent> 
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-foreground">Node.js</Badge>
                  <Badge className="text-foreground">Express</Badge>
                  <Badge className="text-foreground">Hono</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="grid gap-1">
                  <CardTitle>Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-foreground">Git</Badge>
                  <Badge className="text-foreground">GitHub</Badge>
                  <Badge className="text-foreground">VS Code</Badge>
                  <Badge className="text-foreground">Figma</Badge>
                  <Badge className="text-foreground">Shadcn</Badge>
                  <Badge className="text-foreground">Vercel</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

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
                <p className="text-xl text-gray-400">
                  At 32, I’m embarking on a new adventure. One that I’ve always
                  been curious about but only recently decided to pursue:
                  becoming a software developer.
                </p>

                <p className="text-xl text-gray-400 mt-4">
                  With a background in Business Administration, I’ve spent years
                  navigating different industries, even running my own
                  businesses. Through these experiences, I developed a
                  problem-solving mindset, adaptability, and a passion for
                  creating solutions.
                </p>

                <p className="text-xl text-gray-400 mt-4">
                  Now, I’m channeling that same energy into learning how to
                  code, eager to build and contribute to meaningful projects. I
                  know breaking into tech isn’t easy, but I believe that
                  dedication, curiosity, and perseverance can open doors.
                </p>

                <p className="text-xl text-gray-400 mt-4">
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
