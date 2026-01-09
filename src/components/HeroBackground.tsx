import heroImage from '@/assets/hero-kenya.jpg';

const HeroBackground = () => {
  return (
    <>
      {/* Background with Kenyan imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70"></div>
      </div>
    </>
  );
};

export default HeroBackground;
