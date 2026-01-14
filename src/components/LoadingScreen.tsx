import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-green"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Artistic beaded circle loader */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        {/* Outer rotating beads */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full"
              style={{
                background: i % 3 === 0 ? '#C56A30' : i % 3 === 1 ? '#D4A574' : '#F4E9D8',
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateY(-50px)`,
                transformOrigin: '0 0',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Inner rotating beads - opposite direction */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{
                background: i % 2 === 0 ? '#8B4513' : '#FFD700',
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateY(-28px)`,
                transformOrigin: '0 0',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.3, 0.8] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Center camera lens effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal border-4 border-linen flex items-center justify-center">
            <motion.div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rust"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Brand name with typing effect */}
      <motion.h1
        className="mt-8 text-3xl sm:text-4xl font-pacifico text-linen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Teekay
      </motion.h1>

      <motion.p
        className="mt-2 text-sm sm:text-base text-linen/70 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading artistry...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
