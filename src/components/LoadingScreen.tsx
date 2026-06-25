import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#050d1f] flex flex-col items-center justify-center z-50 gap-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-20 h-20 flex items-center justify-center"
    >
      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-portfolio-bright-blue border-r-portfolio-bright-blue/30"
      />
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-3 rounded-full border border-portfolio-purple/40 border-b-portfolio-purple"
      />
      {/* Center text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-bold bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple bg-clip-text text-transparent"
      >
        SR
      </motion.span>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-gray-500 text-xs tracking-widest uppercase"
    >
      Loading portfolio...
    </motion.p>
  </div>
);

export default LoadingScreen;
