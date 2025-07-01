
const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-parchment/95 backdrop-blur-sm z-50 border-b border-sage-leaf/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-pacifico text-clay-pot">Teekay</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-forest-green hover:text-clay-pot transition-colors">Home</a>
            <a href="#about" className="text-forest-green hover:text-clay-pot transition-colors">About</a>
            <a href="#portfolio" className="text-forest-green hover:text-clay-pot transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-forest-green hover:text-clay-pot transition-colors">Testimonials</a>
            <a href="#contact" className="text-forest-green hover:text-clay-pot transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
