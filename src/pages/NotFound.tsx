import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#050d1f] flex items-center justify-center relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-portfolio-bright-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-portfolio-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 px-6">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          <p className="text-[9rem] md:text-[12rem] font-bold leading-none bg-gradient-to-br from-portfolio-bright-blue via-portfolio-purple to-portfolio-pink bg-clip-text text-transparent select-none">
            404
          </p>
          <div className="absolute inset-0 text-[9rem] md:text-[12rem] font-bold leading-none bg-gradient-to-br from-portfolio-bright-blue via-portfolio-purple to-portfolio-pink bg-clip-text text-transparent blur-2xl opacity-30 select-none">
            404
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-3 mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">Page Not Found</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Looks like this page got lost in the neural network. Let's get you back on track.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-portfolio-bright-blue hover:bg-portfolio-bright-blue/90 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-portfolio-bright-blue/20 hover:shadow-portfolio-bright-blue/40 transition-all duration-300"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
