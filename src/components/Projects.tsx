import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
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

const Projects = () => {
  // Custom projects array with unique data for each project
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS",
      image: "/images/portfolio.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio",
      demoUrl: "https://your-portfolio-website.com"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing online store products and orders",
      image: "/images/dashboard.jpg",
      technologies: ["React", "Redux", "Material UI"],
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
      id: 3,
      title: "Recipe App",
      description: "Mobile-friendly recipe finder with search and filtering",
      image: "/images/recipe-app.jpg",
      technologies: ["React", "Firebase", "Styled Components"],
      githubUrl: "https://github.com/yourusername/recipe-app",
      demoUrl: "https://your-recipe-app.com"
    }
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
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-all hover:scale-105"
                    width={400}
                    height={200}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={project.demoUrl ? "flex justify-between" : "flex justify-center"}>
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
              </Card>
            ))}
          </div>
          <Button variant="outline" asChild>
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