import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/TypingAnimation';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Decorative Kenyan-inspired pattern */}
      <div className="mb-8 flex justify-center items-center space-x-3">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-antique-brass to-rust rounded-full"></div>
        <div className="w-3 h-3 bg-linen rotate-45"></div>
        <div className="w-10 h-1 bg-antique-brass rounded-full"></div>
        <div className="w-3 h-3 bg-linen rotate-45"></div>
        <div className="w-16 h-1 bg-gradient-to-l from-transparent via-antique-brass to-rust rounded-full"></div>
      </div>
      
      {/* Main heading with high contrast */}
      <div className="mb-6">
        <h1 className="text-7xl md:text-9xl font-pacifico text-linen mb-3 drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>
          Teekay
        </h1>
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-antique-brass"></div>
          <span className="text-sm md:text-base text-linen font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            Kenyan Visual Artist
          </span>
          <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-antique-brass"></div>
        </div>
      </div>

      {/* Services as simple text badges */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        <span className="px-4 py-2 bg-linen/90 text-charcoal text-sm font-bold rounded-full shadow-lg">
          Photography
        </span>
        <span className="px-4 py-2 bg-rust text-linen text-sm font-bold rounded-full shadow-lg">
          Videography
        </span>
        <span className="px-4 py-2 bg-antique-brass text-charcoal text-sm font-bold rounded-full shadow-lg">
          Handmade Bracelets
        </span>
      </div>

      {/* Typing animation tagline with high contrast */}
      <div className="mb-8 h-16 flex items-center justify-center bg-charcoal/80 backdrop-blur-md rounded-lg px-6 py-3 mx-auto max-w-fit shadow-xl">
        <TypingAnimation 
          text="Capturing Kenya's Soul Through Lens & Craft"
          className="text-xl md:text-2xl text-linen font-semibold"
          delay={800}
          speed={60}
        />
      </div>

      {/* Descriptive text with improved readability */}
      <p className="text-lg md:text-xl text-linen/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
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
          className="border-2 border-linen text-linen hover:bg-linen hover:text-charcoal px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 bg-charcoal/30 backdrop-blur-sm"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Work With Me
        </Button>
      </div>

      {/* Kenyan-inspired decorative footer */}
      <div className="mt-14 flex flex-wrap justify-center items-center gap-6 md:gap-8">
        <div className="flex items-center space-x-2 text-linen/90">
          <div className="w-2 h-2 bg-rust rotate-45"></div>
          <span className="text-sm font-bold tracking-wide drop-shadow-md">Nairobi Based</span>
        </div>
        <div className="w-1 h-1 bg-antique-brass rounded-full hidden md:block"></div>
        <div className="flex items-center space-x-2 text-linen/90">
          <div className="w-2 h-2 bg-antique-brass rotate-45"></div>
          <span className="text-sm font-bold tracking-wide drop-shadow-md">African Inspired</span>
        </div>
        <div className="w-1 h-1 bg-antique-brass rounded-full hidden md:block"></div>
        <div className="flex items-center space-x-2 text-linen/90">
          <div className="w-2 h-2 bg-linen rotate-45"></div>
          <span className="text-sm font-bold tracking-wide drop-shadow-md">Handcrafted</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
