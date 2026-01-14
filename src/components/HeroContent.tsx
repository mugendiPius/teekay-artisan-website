import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Main heading */}
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-8xl font-pacifico text-linen mb-2 sm:mb-3 drop-shadow-2xl" 
        style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Teekay
      </motion.h1>
      
      <motion.p 
        className="text-sm sm:text-base text-linen/90 font-medium tracking-[0.2em] uppercase mb-6 sm:mb-8 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Kenyan Visual Artist
      </motion.p>

      {/* Services badges - simplified */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-linen/90 text-charcoal text-xs sm:text-sm font-bold rounded-full shadow-lg">
          Photography
        </span>
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-rust text-linen text-xs sm:text-sm font-bold rounded-full shadow-lg">
          Videography
        </span>
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-antique-brass text-charcoal text-xs sm:text-sm font-bold rounded-full shadow-lg">
          Bracelets
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-linen/90 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed font-medium drop-shadow-lg px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Capturing Kenya's soul through lens & craft
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Button 
          className="w-full sm:w-auto bg-rust hover:bg-clay-pot text-linen px-8 py-4 sm:py-5 text-base font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Portfolio
        </Button>
        <Button 
          variant="outline"
          className="w-full sm:w-auto border-2 border-linen text-linen hover:bg-linen hover:text-charcoal px-8 py-4 sm:py-5 text-base font-bold rounded-full transition-all duration-300 bg-charcoal/30 backdrop-blur-sm"
          onClick={() => {
            const message = encodeURIComponent("Hello Teekay! I'm interested in working with you. Let's discuss my project.");
            window.open(`https://wa.me/254798167973?text=${message}`, '_blank');
          }}
        >
          Work With Me
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
