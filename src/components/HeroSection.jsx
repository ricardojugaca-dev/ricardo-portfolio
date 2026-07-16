import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Mail,
} from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Lógica del Typewriter Effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i === current.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(current.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTyping(true);
        }
      }
    }, typing ? 65 : 35);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  const socials = [
    { icon: <Github size={22} />, href: "https://github.com/TU_USUARIO", label: "GitHub" },
    { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/TU_LINKEDIN", label: "LinkedIn" },
    { icon: <Youtube size={22} />, href: "https://youtube.com/@TU_CANAL", label: "YouTube" },
    { icon: <Facebook size={22} />, href: "https://facebook.com/TU_FACEBOOK", label: "Facebook" },
    { icon: <Mail size={22} />, href: "mailto:tu_correo@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-[80px] pb-[120px]"
    >
      {/* Background Orbes Flotantes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] -top-[10%] -left-[15%] animate-[pulse_18s_ease-in-out_infinite]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] -bottom-[5%] -right-[10%] animate-[pulse_22s_ease-in-out_infinite_3s]" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.14)_0%,transparent_70%)] top-[40%] left-[55%] animate-[pulse_14s_ease-in-out_infinite_6s]" />
      </div>

      {/* Grid Overlay Decorativo */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} 
      />

      {/* Contenido Principal */}
      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Badge de Disponibilidad */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-md mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-primary font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Glow de Fondo para el Nombre */}
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-blue-500/20 blur-[150px] pointer-events-none" />

            <h1 className="relative font-black leading-none">
              <span className="block text-lg md:text-2xl text-muted-foreground mb-4 font-normal">
                Hi, I'm
              </span>
              {/* NOMBRE CON EFECTO NEÓN FLUIDO DESDE TU ARCHIVO CSS */}
              <span className="block text-5xl sm:text-7xl md:text-8xl animate-neon-text font-black tracking-tight">
                Ricardo Garcia
              </span>
            </h1>
          </div>

          {/* Typewriter Role Animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl md:text-2xl font-bold min-h-[2rem] flex items-center justify-center font-mono text-foreground"
          >
            <span className="text-cyan-500 mr-2">&gt;</span>
            {displayed}
            <span className="animate-[pulse_1s_infinite] text-violet-500">|</span>
          </motion.div>

          {/* Descripción / Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Building modern web applications using{" "}
            <span className="text-primary font-semibold">ASP.NET Core</span>,{" "}
            <span className="text-primary font-semibold">React</span> and{" "}
            <span className="text-primary font-semibold">SQL Server</span>. Passionate about creating scalable, efficient and user-friendly software solutions.
          </motion.p>

          {/* BOTONES CON EFECTO NEÓN FLUIDO SINCRONIZADO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <a
              href="#projects"
              className="px-10 py-4 rounded-xl text-sm md:text-base font-bold animate-neon-btn"
            >
              View Projects
            </a>
            <a
              href="/Ricardo-Garcia-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 rounded-xl text-sm md:text-base font-bold animate-neon-btn"
            >
              Download CV
            </a>
          </motion.div>

          {/* Iconos de Redes Sociales */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.label}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Animado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center"
      >
        <span className="uppercase tracking-[8px] text-[10px] text-muted-foreground mb-1">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};