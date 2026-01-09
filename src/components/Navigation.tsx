import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-parchment/95 backdrop-blur-sm z-50 border-b border-sage-leaf/20">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-pacifico text-clay-pot">Teekay</h1>
          
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-forest-green hover:text-clay-pot transition-colors text-sm lg:text-base">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-forest-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sage-leaf/20 pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-forest-green hover:text-clay-pot transition-colors py-2"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
