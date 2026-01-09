
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      <Navigation />
      <HeroSection />
      <AboutSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12 animate-fade-in">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs sm:text-sm font-medium bg-clay-pot px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-forest-green mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-sage-leaf">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-warm-amber/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12 animate-fade-in">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 text-center shadow-lg bg-linen animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warm-amber text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-forest-green mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-clay-pot text-sm sm:text-base">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-parchment">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12 animate-fade-in">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in">
              <h3 className="text-xl sm:text-2xl font-semibold text-forest-green mb-4 sm:mb-6">Let's Create Something Beautiful</h3>
              <p className="text-sm sm:text-base text-forest-green mb-6 sm:mb-8 leading-relaxed">
                I'd love to hear about your project! Whether you're looking for custom bracelet designs, 
                professional photography, or video editing services, let's discuss how we can bring your vision to life.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-clay-pot" />
                  <span className="text-sm sm:text-base text-forest-green">teekay.artistry@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-clay-pot" />
                  <span className="text-sm sm:text-base text-forest-green">+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-clay-pot" />
                  <span className="text-sm sm:text-base text-forest-green">Nairobi, Kenya</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6 sm:mt-8">
                <a href="#" className="text-clay-pot hover:text-rust transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-clay-pot hover:text-rust transition-colors">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-clay-pot hover:text-rust transition-colors">
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
            <Card className="p-5 sm:p-6 md:p-8 shadow-lg bg-linen animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-forest-green mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-sage-leaf/30 focus:border-clay-pot"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-green mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-sage-leaf/30 focus:border-clay-pot"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-green mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border-sage-leaf/30 focus:border-clay-pot"
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-clay-pot hover:bg-rust text-linen py-3 font-semibold rounded-full transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-12 md:py-16 bg-clay-pot">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-pacifico text-linen mb-3 sm:mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm sm:text-base text-linen/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something unique and meaningful.
          </p>
          <Button 
            className="bg-linen text-clay-pot hover:bg-parchment px-6 sm:px-8 py-3 font-semibold rounded-full transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Collaborate
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-linen py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-xl sm:text-2xl font-pacifico text-linen mb-3 sm:mb-4">Teekay</h4>
              <p className="text-sm sm:text-base text-linen/80">
                Crafting beautiful bracelets and capturing life's precious moments through artistry and passion.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-linen/80 hover:text-linen transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-linen/80 hover:text-linen transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-sm text-linen/80 hover:text-linen transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-sm text-linen/80 hover:text-linen transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-linen/80 hover:text-linen transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-linen/80 hover:text-linen transition-colors">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-linen/80 hover:text-linen transition-colors">
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-linen/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-linen/80">
              © 2024 Teekay. All rights reserved. Crafted with love in Nairobi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
