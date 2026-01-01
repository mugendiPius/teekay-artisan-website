
import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/TypingAnimation';
import { Camera, Film, Sparkles } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Decorative Kenyan-inspired pattern */}
      <div className="mb-8 flex justify-center items-center space-x-3">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-rust to-clay-pot rounded-full"></div>
        <div className="w-3 h-3 bg-antique-brass rotate-45"></div>
        <div className="w-10 h-1 bg-clay-pot rounded-full"></div>
        <div className="w-3 h-3 bg-rust rotate-45"></div>
        <div className="w-16 h-1 bg-gradient-to-l from-transparent via-rust to-clay-pot rounded-full"></div>
      </div>
      
      {/* Main heading with enhanced legibility */}
      <div className="mb-6">
        <h1 className="text-7xl md:text-9xl font-pacifico text-charcoal mb-3 relative" style={{ textShadow: '2px 2px 4px rgba(139, 90, 43, 0.3)' }}>
          <span className="relative bg-gradient-to-b from-charcoal to-weathered-wood bg-clip-text">
            Teekay
          </span>
        </h1>
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-antique-brass"></div>
          <span className="text-sm md:text-base text-charcoal font-semibold tracking-[0.3em] uppercase">
            Kenyan Visual Artist
          </span>
          <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-antique-brass"></div>
        </div>
      </div>

      {/* Craft icons */}
      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="flex flex-col items-center text-clay-pot">
          <Camera className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium tracking-wide">Photography</span>
        </div>
        <div className="flex flex-col items-center text-rust">
          <Film className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium tracking-wide">Videography</span>
        </div>
        <div className="flex flex-col items-center text-antique-brass">
          <Sparkles className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium tracking-wide">Bracelets</span>
        </div>
      </div>

      {/* Typing animation tagline with better contrast */}
      <div className="mb-8 h-16 flex items-center justify-center bg-charcoal/5 backdrop-blur-sm rounded-lg px-6 py-3 mx-auto max-w-fit">
        <TypingAnimation 
          text="Capturing Kenya's Soul Through Lens & Craft"
          className="text-xl md:text-2xl text-charcoal font-semibold"
          delay={800}
          speed={60}
        />
      </div>

      {/* Descriptive text with improved readability */}
      <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
        From the vibrant streets of Nairobi to serene landscapes, I capture authentic moments 
        and handcraft unique bracelets that tell stories of African heritage.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          className="bg-rust hover:bg-clay-pot text-linen px-10 py-5 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-antique-brass"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Portfolio
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-linen px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 bg-linen/50 backdrop-blur-sm"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Work With Me
        </Button>
      </div>

      {/* Kenyan-inspired decorative footer */}
      <div className="mt-14 flex justify-center items-center space-x-8">
        <div className="flex items-center space-x-2 text-charcoal/70">
          <div className="w-2 h-2 bg-rust rotate-45"></div>
          <span className="text-sm font-semibold tracking-wide">Nairobi Based</span>
        </div>
        <div className="w-1 h-1 bg-antique-brass rounded-full"></div>
        <div className="flex items-center space-x-2 text-charcoal/70">
          <div className="w-2 h-2 bg-clay-pot rotate-45"></div>
          <span className="text-sm font-semibold tracking-wide">African Inspired</span>
        </div>
        <div className="w-1 h-1 bg-antique-brass rounded-full"></div>
        <div className="flex items-center space-x-2 text-charcoal/70">
          <div className="w-2 h-2 bg-antique-brass rotate-45"></div>
          <span className="text-sm font-semibold tracking-wide">Handcrafted</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
