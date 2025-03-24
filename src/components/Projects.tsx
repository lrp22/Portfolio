import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todoist",
      description: "Personal Todo App",
      image:
        "https://github.com/lrp22/Todo/blob/main/screenshots/1.png?raw=true",
      technologies: ["ReactNative", "Expo", "NativeWind"],
      githubUrl: "https://github.com/lrp22/Todo/tree/main",
      //demoUrl: "https://your-portfolio-website.com",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for managing online store products and orders",
      image: "site.png",
      technologies: ["React", "Redux", "Material UI"],
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      demoUrl: "",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 justify-center items-center"
    >
      <div>
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
          <div className="grid max-w-5xl gap-6 py-4 md:grid-cols-1 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Fixed-height image container to ensure alignment */}
                <div className="h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain align-middle justify-center items-center"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pt-0 pb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter
                    className={
                      project.demoUrl
                        ? "flex justify-between pt-2"
                        : "flex justify-center pt-2"
                    }
                  >
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    {project.demoUrl && (
                      <Button size="sm" asChild>
                        <Link href={project.demoUrl} target="_blank">
                          Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          <Button variant="outline" asChild className="mt-4">
            <Link href="#">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
