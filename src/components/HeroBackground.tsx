
import { Scissors, Palette, Hammer } from 'lucide-react';

const HeroBackground = () => {
  return (
    <>
      {/* Background with texture overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-weathered-wood/40 via-hemp/30 to-sage-leaf/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-parchment/20 via-transparent to-linen/20"></div>
      </div>
      
      {/* Floating craft elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Scissors className="w-8 h-8 text-antique-brass/60" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-32 right-16 animate-float">
        <Palette className="w-6 h-6 text-clay-pot/60" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-32 left-20 animate-float">
        <Hammer className="w-7 h-7 text-rust/60" style={{ animationDelay: '2s' }} />
      </div>
    </>
  );
};

export default HeroBackground;
