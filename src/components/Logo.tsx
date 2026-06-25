import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4cc9f0" />
            <stop offset="100%" stopColor="#4361ee" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4361ee" />
            <stop offset="100%" stopColor="#7209b7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon border */}
        <motion.polygon
          points="18,2 32,10 32,26 18,34 4,26 4,10"
          stroke="url(#logoGrad)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Inner hexagon fill */}
        <motion.polygon
          points="18,6 29,12 29,24 18,30 7,24 7,12"
          fill="url(#logoGrad2)"
          opacity="0.12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Neural network nodes */}
        {/* Center node */}
        <motion.circle
          cx="18" cy="18" r="2.5"
          fill="url(#logoGrad)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        />

        {/* Surrounding nodes */}
        {[
          { cx: 18, cy: 9 },
          { cx: 25, cy: 13.5 },
          { cx: 25, cy: 22.5 },
          { cx: 18, cy: 27 },
          { cx: 11, cy: 22.5 },
          { cx: 11, cy: 13.5 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="1.8"
            fill="url(#logoGrad)"
            opacity="0.85"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}
          />
        ))}

        {/* Connection lines from center to nodes */}
        {[
          { x1: 18, y1: 18, x2: 18, y2: 9 },
          { x1: 18, y1: 18, x2: 25, y2: 13.5 },
          { x1: 18, y1: 18, x2: 25, y2: 22.5 },
          { x1: 18, y1: 18, x2: 18, y2: 27 },
          { x1: 18, y1: 18, x2: 11, y2: 22.5 },
          { x1: 18, y1: 18, x2: 11, y2: 13.5 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke="url(#logoGrad)"
            strokeWidth="0.8"
            opacity="0.45"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
          />
        ))}

        {/* Animated pulse ring */}
        <motion.circle
          cx="18" cy="18" r="2.5"
          stroke="#4cc9f0"
          strokeWidth="1"
          fill="none"
          animate={{ r: [2.5, 6, 2.5], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};

export default Logo;
