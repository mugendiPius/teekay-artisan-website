
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
