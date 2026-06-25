import { ArrowDown, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        
        {/* Glow Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-[120px]"></div>

          {/* Title */}
          <h1 className="relative text-5xl sm:text-6xl md:text-8xl font-black leading-none">
            <div>
              <span className="text-foreground">
                Hi, I'm
              </span>

              <span className="text-gradient">
                {" "}Ricardo
              </span>
            </div>

            <div className="mt-2">
              <span className="text-gradient">
                Garcia
              </span>
            </div>
        </h1>
        </div>

        {/* Description */}
        <p className="mt-10 max-w-2xl mx-auto text-lg md:text-2xl text-muted-foreground leading-relaxed">
          Building modern web applications with
          <span className="text-primary font-medium">
            {" "}ASP.NET Core
          </span>,
          <span className="text-primary font-medium">
            {" "}React
          </span>
          {" "}and
          <span className="text-primary font-medium">
            {" "}SQL Server
          </span>
          .
        </p>

        {/* Main Buttons */}
        <div className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto">
          <a
            href="#projects"
            className="
              py-4
              rounded-2xl
              bg-cyan-500
              hover:bg-cyan-400
              text-white
              font-semibold
              shadow-lg
              shadow-cyan-500/30
              transition-all
              duration-300
            "
          >
            View Projects
          </a>

          <a
            href="/Ricardo-Garcia-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              py-4
              rounded-2xl
              border
              border-primary/30
              hover:border-primary
              font-semibold
              transition-all
              duration-300
            "
          >
            Download CV
          </a>
        </div>

        {/* Social Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              border
              border-primary/20
              hover:border-primary
              transition-all
              duration-300
            "
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/TU_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              border
              border-primary/20
              hover:border-primary
              transition-all
              duration-300
            "
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-primary font-semibold tracking-widest mb-2">
          EXPERIENCE
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};