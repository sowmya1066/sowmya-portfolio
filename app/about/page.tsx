import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 gradient-text">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6">
              Hey there! I'm Alex, a creative developer with a passion for
              building beautiful, interactive web experiences. With 5 years of
              experience in the field, I love pushing the boundaries of what's
              possible on the web.
            </p>
            <p className="text-xl mb-6">
              When I'm not coding, you can find me experimenting with new
              technologies, contributing to open-source projects, or exploring
              the great outdoors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Alex"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-accent/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
