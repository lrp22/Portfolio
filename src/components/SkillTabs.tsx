"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React/Native",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Hono", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Figma", "Shadcn", "Vercel"],
  },
];

const SkillTabs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Skills
          </h3>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Here are some of the technologies and tools I work with.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, technologies }, index) => (
            <motion.div
              key={category}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.15 },
              }}
            >
              <Card className="border-primary h-full">
                {" "}
                {/* Ensures Card is full height */}
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <li key={tech}>
                        <Badge className="text-foreground">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTabs;
