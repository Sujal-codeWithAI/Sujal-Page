import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      className={`relative flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Inner content */}
        <motion.div
          className="relative z-10 font-bold text-xl bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          SR
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-portfolio-bright-blue"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-portfolio-purple"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo; 