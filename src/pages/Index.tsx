import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Video, Palette, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Scissors, Hammer } from 'lucide-react';
import TypingAnimation from '@/components/TypingAnimation';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Handwoven Bracelet Collection",
      category: "Bracelets",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
      description: "Artisan-crafted bracelets using traditional techniques"
    },
    {
      id: 2,
      title: "Portrait Photography",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763096?auto=format&fit=crop&w=800&q=80",
      description: "Capturing authentic moments and emotions"
    },
    {
      id: 3,
      title: "Nature Documentary",
      category: "Video",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      description: "Cinematic storytelling through video"
    },
    {
      id: 4,
      title: "Leather & Bead Designs",
      category: "Bracelets",
      image: "https://images.unsplash.com/photo-1603561596112-6a132309c76e?auto=format&fit=crop&w=800&q=80",
      description: "Combining natural materials with modern aesthetics"
    },
    {
      id: 5,
      title: "Street Photography",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      description: "Urban life through an artistic lens"
    },
    {
      id: 6,
      title: "Brand Video Content",
      category: "Video",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80",
      description: "Professional video content for brands"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Teekay's bracelets are absolutely stunning! The attention to detail and craftsmanship is incredible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "The photography session was amazing. Teekay captured moments I'll treasure forever.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      text: "Professional video editing with an artistic touch. Exceeded all my expectations!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-parchment font-lato">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        {/* Main content */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-clay-pot rounded-full flex justify-center">
            <div className="w-1 h-3 bg-clay-pot rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-linen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-12 animate-fade-in">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80"
                  alt="Teekay Portrait"
                  className="rounded-lg shadow-lg w-full h-96 object-cover border-4 border-sage-leaf/20"
                />
              </div>
              <div className="animate-fade-in">
                <p className="text-lg text-forest-green mb-6 leading-relaxed">
                  Hello! I'm Teekay, a passionate artist and craftsman who finds joy in creating beautiful, 
                  handcrafted bracelets and capturing life's most precious moments through photography and video.
                </p>
                <p className="text-lg text-forest-green mb-6 leading-relaxed">
                  My journey began with a simple love for working with my hands and creating something meaningful. 
                  Each bracelet I craft tells a story, and every photograph I take preserves a memory that will last forever.
                </p>
                <p className="text-lg text-forest-green leading-relaxed">
                  Whether I'm weaving intricate patterns into jewelry or editing cinematic videos, 
                  I pour my heart into every project, ensuring that each piece reflects the beauty and 
                  authenticity that makes life truly special.
                </p>
                <div className="flex space-x-6 mt-8">
                  <div className="text-center">
                    <Palette className="w-8 h-8 text-clay-pot mx-auto mb-2" />
                    <span className="text-sm text-forest-green font-medium">Bracelet Design</span>
                  </div>
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-clay-pot mx-auto mb-2" />
                    <span className="text-sm text-forest-green font-medium">Photography</span>
                  </div>
                  <div className="text-center">
                    <Video className="w-8 h-8 text-clay-pot mx-auto mb-2" />
                    <span className="text-sm text-forest-green font-medium">Video Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-pacifico text-terracotta text-center mb-12 animate-fade-in">
            My Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium bg-terracotta px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-olive mb-2">{item.title}</h3>
                  <p className="text-sage">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-warm-gold">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-pacifico text-terracotta text-center mb-12 animate-fade-in">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-lg bg-cream animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-muted-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-olive mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-terracotta">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-pacifico text-terracotta text-center mb-12 animate-fade-in">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-olive mb-6">Let's Create Something Beautiful</h3>
              <p className="text-olive mb-8 leading-relaxed">
                I'd love to hear about your project! Whether you're looking for custom bracelet designs, 
                professional photography, or video editing services, let's discuss how we can bring your vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-terracotta" />
                  <span className="text-olive">teekay.artistry@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-terracotta" />
                  <span className="text-olive">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-terracotta" />
                  <span className="text-olive">Creative Studio, Artisan District</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-terracotta hover:text-clay transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-terracotta hover:text-clay transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-terracotta hover:text-clay transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <Card className="p-8 shadow-lg bg-cream animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-olive mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-sage/30 focus:border-terracotta"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-olive mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-sage/30 focus:border-terracotta"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-olive mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border-sage/30 focus:border-terracotta"
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-terracotta hover:bg-clay text-cream py-3 font-semibold rounded-full transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-pacifico text-cream mb-4">Ready to Start Your Project?</h3>
          <p className="text-cream/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something unique and meaningful. Whether it's a custom bracelet, 
            a photography session, or video content, I'm here to bring your vision to life.
          </p>
          <Button 
            className="bg-cream text-terracotta hover:bg-sand px-8 py-3 font-semibold rounded-full transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Collaborate
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-pacifico text-cream mb-4">Teekay</h4>
              <p className="text-cream/80">
                Crafting beautiful bracelets and capturing life's precious moments through artistry and passion.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-cream/80 hover:text-cream transition-colors">Home</a></li>
                <li><a href="#about" className="text-cream/80 hover:text-cream transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-cream/80 hover:text-cream transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Me</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-8 text-center">
            <p className="text-cream/80">
              © 2024 Teekay. All rights reserved. Crafted with love and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
