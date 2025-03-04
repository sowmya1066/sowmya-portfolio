"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="gradient-text">Creative</span>
          <br />
          <span className="gradient-text">Developer</span>
          <motion.div
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary opacity-75 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting digital experiences with code and imagination
        </motion.p>
        <motion.div
          className="flex space-x-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center hover:bg-primary/80 transition-colors group"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/80 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex space-x-6 mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
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
      </motion.div>
      <motion.div
        className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 50 }}
      />
    </main>
  );
}
