"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Github, Linkedin, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_ID || "";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post(`https://submit-form.com/${FORM_ID}`, formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
  id="contact"
  className="w-full py-12 md:py-24 lg:py-32 bg-muted/35"
>
  <div className="container mx-auto">
    <div className="space-y-2 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Get In Touch
      </h2>
      <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
        Have a project in mind or want to chat? Feel free to reach out!
      </p>
    </div>
    <div className="py-6 flex-col items-center justify-center space-y-4 text-center">
      <div className="mx-auto grid max-w-5xl gap-6 py-2 md:grid-cols-2">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can reach me through the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>lucaspraseldev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/lucasprasel/"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/lucasprasel/
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lrp22"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/lrp22
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your message"
                    />
                  </div>

                  {/* Submission Status Messages */}
                  {status === "success" && (
                    <p className="text-green-500">Message sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500">
                      Failed to send message. Try again.
                    </p>
                  )}

                  {/* Submit Button with Loading Spinner */}
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
