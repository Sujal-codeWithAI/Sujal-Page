import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MousePointerClick } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/documents/Sujal_Raut_CV.pdf');
      if (!response.ok) {
        throw new Error('CV file not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sujal_Raut_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('CV downloaded successfully!', {
        icon: '📄',
        description: 'Thank you for your interest in my work!'
      });
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download CV. Please try again later.', {
        icon: '❌',
        description: 'If the problem persists, please contact me directly.'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 pb-10 flex flex-col justify-center relative overflow-hidden gradient-bg">
      {/* Mouse-following gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(175px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 md:right-20 w-16 h-16 rounded-full bg-portfolio-bright-blue/20 blur-sm"
        />
        <motion.div 
          animate={{
            y: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-portfolio-purple/15 blur-sm"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-center md:text-left space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-portfolio-bright-blue font-semibold tracking-wide uppercase text-sm inline-block px-4 py-1 rounded-full bg-portfolio-bright-blue/10 backdrop-blur-sm border border-portfolio-bright-blue/20">
                  <span className="mr-2">👋</span> Welcome to my portfolio
                </p>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glow-text"
              >
                Hello, I&apos;m <span className="gradient-text relative inline-block">
                  Sujal
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 max-w-2xl"
              >
                A dedicated B.Tech candidate specializing in Artificial Intelligence Engineering, with a strong enthusiasm for web development and algorithmic problem-solving.
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-base md:text-lg text-gray-300 font-light max-w-2xl"
            >
              Skilled in designing intelligent systems and developing efficient web applications, with a passion for applying AI principles to create practical and impactful solutions. Committed to continuous improvement and contributing to innovative projects.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-300 font-medium"
            >
              Currently studying at <span className="text-portfolio-bright-blue glow-text">G.H. Raisoni College of Engineering, Nagpur</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
            >
              <Button 
                onClick={handleDownloadCV}
                className="group bg-portfolio-bright-blue hover:bg-portfolio-blue text-white px-6 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-portfolio-bright-blue/20"
              >
                Download CV 
                <Download className="h-4 w-4 group-hover:animate-bounce" />
              </Button>
              
              <ScrollLink to="projects" smooth={true} duration={500}>
                <button 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-6 py-3 rounded-lg border-2 border-portfolio-bright-blue text-portfolio-bright-blue hover:bg-portfolio-bright-blue/10 transform hover:scale-105 transition-all duration-300 flex items-center shadow-lg hover:shadow-portfolio-bright-blue/20 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    See my work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div 
                    className={`absolute inset-0 bg-portfolio-bright-blue/10 transform origin-left transition-transform duration-300 ${
                      isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              </ScrollLink>
            </motion.div>

            {/* New: Tech stack pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10 text-gray-300 hover:border-portfolio-bright-blue/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:col-span-5 relative flex justify-center md:justify-end"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80 group">
              {/* Animated rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-portfolio-bright-blue/20 group-hover:border-portfolio-bright-blue/40 transition-colors duration-300"></div>
              <div className="absolute -inset-8 rounded-full border border-portfolio-bright-blue/10 group-hover:border-portfolio-bright-blue/20 transition-colors duration-300"></div>
              
              {/* Profile image container with hover effects */}
              <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm border-2 border-portfolio-bright-blue/30 shadow-xl shadow-portfolio-bright-blue/10 transition-all duration-300 group-hover:border-portfolio-bright-blue/50 group-hover:shadow-portfolio-bright-blue/30">
                <img 
                  src="https://i.postimg.cc/W1TTGXLt/Whats-App-Image-2025-04-22-at-1-46-07-PM.jpg"
                  alt="Sujal R Raut" 
                  className="w-full h-full object-cover scale-105 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-portfolio-bright-blue/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-portfolio-purple/20 rounded-full blur-sm animate-pulse delay-150"></div>
            </div>

            {/* Social media icons */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
            >
              {[
                { href: "https://www.linkedin.com/in/sujal-raut", icon: "linkedin", color: "#0466c8" },
                { href: "https://github.com/Sujal0987", icon: "github", color: "#0a1128" },
                { href: "mailto:sujalraut.dev@gmail.com", icon: "mail", color: "#7209b7" }
              ].map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/90 p-2.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-portfolio-bright-blue/20"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <span className="absolute -left-24 transform -translate-y-1/2 top-1/2 px-2 py-1 bg-white/90 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.icon === 'mail' ? 'Email' : social.icon.charAt(0).toUpperCase() + social.icon.slice(1)}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={social.color} viewBox="0 0 24 24" className="transform group-hover:scale-110 transition-transform">
                    {social.icon === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                    {social.icon === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>}
                    {social.icon === 'mail' && <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-sm mb-2 text-gray-400 animate-pulse">Scroll down</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
