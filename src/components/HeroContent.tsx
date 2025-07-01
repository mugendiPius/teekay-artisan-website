
import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/TypingAnimation';

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Decorative elements */}
      <div className="mb-8 flex justify-center items-center space-x-4">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-antique-brass"></div>
        <div className="w-2 h-2 bg-clay-pot rounded-full"></div>
        <div className="w-8 h-0.5 bg-antique-brass"></div>
        <div className="w-2 h-2 bg-sage-leaf rounded-full"></div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-antique-brass"></div>
      </div>
      
      {/* Main heading with crafty styling */}
      <div className="mb-6">
        <h1 className="text-6xl md:text-8xl font-pacifico text-charcoal mb-2 drop-shadow-lg relative">
          <span className="relative">
            Teekay
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-clay-pot via-antique-brass to-rust rounded-full"></div>
          </span>
        </h1>
        <div className="text-sm md:text-base text-weathered-wood font-medium tracking-widest uppercase mb-4">
          Artisan • Craftsman • Storyteller
        </div>
      </div>

      {/* Typing animation tagline */}
      <div className="mb-8 h-16 flex items-center justify-center">
        <TypingAnimation 
          text="Crafting Stories in Every Thread & Frame"
          className="text-xl md:text-3xl text-charcoal font-medium drop-shadow-md"
          delay={1000}
          speed={80}
        />
      </div>

      {/* Descriptive text */}
      <p className="text-lg md:text-xl text-forest-green mb-8 max-w-2xl mx-auto leading-relaxed font-light">
        Where traditional craftsmanship meets modern artistry. Each piece tells a story, 
        every moment captures a memory.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          className="bg-clay-pot hover:bg-rust text-linen px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-antique-brass"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore My Craft
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-clay-pot text-clay-pot hover:bg-clay-pot hover:text-linen px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Commission a Piece
        </Button>
      </div>

      {/* Decorative bottom elements */}
      <div className="mt-12 flex justify-center items-center space-x-6">
        <div className="flex items-center space-x-2 text-weathered-wood">
          <div className="w-3 h-3 border border-clay-pot rounded-full"></div>
          <span className="text-sm font-medium">Handcrafted</span>
        </div>
        <div className="w-px h-4 bg-sage-leaf"></div>
        <div className="flex items-center space-x-2 text-weathered-wood">
          <div className="w-3 h-3 border border-sage-leaf rounded-full"></div>
          <span className="text-sm font-medium">Authentic</span>
        </div>
        <div className="w-px h-4 bg-clay-pot"></div>
        <div className="flex items-center space-x-2 text-weathered-wood">
          <div className="w-3 h-3 border border-antique-brass rounded-full"></div>
          <span className="text-sm font-medium">Unique</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
