import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TITLES = ["Backend Developer", "AI Engineer", "Python Developer", "ML Enthusiast"];

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/documents/Sujal_Raut_CV.pdf');
      if (!response.ok) throw new Error('CV file not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sujal_Raut_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success('CV downloaded successfully!', { icon: '📄' });
    } catch {
      toast.error('Failed to download CV. Please try again later.');
    }
  };

  const techStack = ['Python', 'Django', 'FastAPI', 'React', 'AWS', 'ML'];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden gradient-bg pt-20 pb-12">

      {/* Mouse-following glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{ background: `radial-gradient(250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(76,201,240,0.07), transparent 80%)` }}
      />

      {/* Background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-portfolio-bright-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-16 w-14 h-14 rounded-full bg-portfolio-bright-blue/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 left-12 w-16 h-16 rounded-full bg-portfolio-purple/15 blur-sm"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-center md:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-portfolio-bright-blue/10 border border-portfolio-bright-blue/25 text-portfolio-bright-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-portfolio-bright-blue animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="space-y-2">
              <p className="text-gray-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                <span className="gradient-text glow-text">Sujal Raut</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium mt-2">
                <span className="text-portfolio-bright-blue">{displayed}</span>
                <span className="inline-block w-0.5 h-5 bg-portfolio-bright-blue ml-0.5 animate-pulse align-middle" />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base leading-relaxed max-w-xl"
            >
              Motivated <span className="text-white font-medium">Artificial Intelligence</span> student with hands-on experience in Django, FastAPI, machine learning, and AWS. Currently interning at <span className="text-white font-medium">Negals Technologies</span> building production-grade backend systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <Button
                onClick={handleDownloadCV}
                className="group bg-portfolio-bright-blue hover:bg-portfolio-bright-blue/90 text-white px-7 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-portfolio-bright-blue/20 hover:shadow-portfolio-bright-blue/40 transition-all duration-300"
              >
                Download CV
                <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <ScrollLink to="projects" smooth duration={500} offset={-80}>
                <button className="group px-7 py-3 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:border-portfolio-bright-blue/50 hover:bg-portfolio-bright-blue/8 flex items-center gap-2 font-semibold transition-all duration-300 w-full sm:w-auto justify-center">
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollLink>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-400 hover:border-portfolio-bright-blue/40 hover:text-gray-200 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-5 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Rings */}
              <div className="absolute -inset-3 rounded-full border border-portfolio-bright-blue/15 group-hover:border-portfolio-bright-blue/30 transition-colors duration-500" />
              <div className="absolute -inset-7 rounded-full border border-portfolio-bright-blue/8 group-hover:border-portfolio-bright-blue/15 transition-colors duration-500" />

              {/* Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-portfolio-bright-blue/30 shadow-2xl shadow-portfolio-bright-blue/20 group-hover:border-portfolio-bright-blue/60 group-hover:shadow-portfolio-bright-blue/40 transition-all duration-500">
                <img
                  src="https://i.postimg.cc/W1TTGXLt/Whats-App-Image-2025-04-22-at-1-46-07-PM.jpg"
                  alt="Sujal Raut"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-portfolio-bright-blue/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-portfolio-purple/30 rounded-full blur-sm animate-pulse delay-300" />


            </div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3"
            >
              {[
                { href: "https://www.linkedin.com/in/sujal-raut", label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { href: "https://github.com/Sujal-codeWithAI", label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: "mailto:sujalraut.dev@gmail.com", label: "Email", path: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" },
              ].map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="bg-white/95 p-2.5 rounded-full shadow-lg hover:shadow-portfolio-bright-blue/30 transition-shadow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#0a1128" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-portfolio-bright-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
