import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Column */}
          <div className="text-left space-y-5 order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-medium">
              🟢 Available for Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">
                Hi, I'm
              </span>

              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}Ricardo
              </span>

              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Garcia
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-primary font-medium opacity-0 animate-fade-in-delay-2">
              Software Engineer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              Software Engineer focused on ASP.NET Core, React and SQL Server.
              I enjoy building practical web applications and continuously
              improving my development skills through real-world projects.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 opacity-0 animate-fade-in-delay-4">
              <a
                href="https://linkedin.com/in/TU_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/TU_USUARIO"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                GitHub
              </a>

              <a
                href="mailto:tu_correo@gmail.com"
                className="px-5 py-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 opacity-0 animate-fade-in-delay-3">
            <img
              src="/Foto-Perfil.jpeg"
              alt="Ricardo Garcia"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-primary font-semibold tracking-wider mb-2">
          EXPERIENCE
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};