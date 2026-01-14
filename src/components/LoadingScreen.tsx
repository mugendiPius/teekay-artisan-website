import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const brandLetters = "TEEKAY".split("");
  const tagline = "Beading Dreams Into Art";
  
  // Colors inspired by Kenyan beadwork - burlywood palette
  const beadColors = [
    '#D2B48C', // burlywood
    '#C4A574', // antique brass
    '#8B7355', // darker wood
    '#DEB887', // burlywood light
    '#CD853F', // peru
    '#A0522D', // sienna
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#2D3A2E] via-[#1a2418] to-[#0f1510]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating decorative beads in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              background: beadColors[i % beadColors.length],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col items-center">
        
        {/* Bracelet string path - curved line */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] h-20"
          viewBox="0 0 400 80"
        >
          <motion.path
            d="M 30 40 Q 100 10, 200 40 Q 300 70, 370 40"
            fill="none"
            stroke="#8B7355"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Letters as beads forming bracelet */}
        <div className="relative flex items-center justify-center gap-1 sm:gap-2 mb-8">
          {brandLetters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ scale: 0, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {/* Bead shape behind letter */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${beadColors[index]}, ${beadColors[(index + 2) % beadColors.length]})`,
                  boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.3)`,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              />
              
              {/* Letter */}
              <span 
                className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-lg sm:text-2xl font-bold text-[#1a2418]"
                style={{ 
                  fontFamily: "'Pacifico', cursive",
                  textShadow: '1px 1px 2px rgba(255,255,255,0.3)',
                }}
              >
                {letter}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline with letter-by-letter reveal */}
        <div className="flex flex-wrap justify-center gap-1 mb-6 px-4">
          {tagline.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-[#DEB887] text-sm sm:text-base tracking-wider"
              style={{ fontFamily: "'Lato', sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 1 + index * 0.04,
                ease: "easeOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Artistic loading indicator - thread being woven */}
        <div className="relative h-1 w-48 sm:w-64 bg-[#8B7355]/30 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #D2B48C, #CD853F, #DEB887)',
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          
          {/* Small beads on the progress bar */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: beadColors[i] }}
              initial={{ left: "0%", opacity: 0 }}
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Poetic sub-text */}
        <motion.p
          className="mt-6 text-xs sm:text-sm text-[#C4A574]/60 tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          Stringing stories...
        </motion.p>
      </div>

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#D2B48C]/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#D2B48C]/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
