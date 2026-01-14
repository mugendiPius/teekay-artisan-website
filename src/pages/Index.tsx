import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Play, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AnimatedSection from '@/components/AnimatedSection';
import ServicesSection from '@/components/ServicesSection';
import LoadingScreen from '@/components/LoadingScreen';

// Import Kenyan portfolio images
import photoMaasai from '@/assets/portfolio-photo-1.jpg';
import photoElephants from '@/assets/portfolio-photo-2.jpg';
import photoPortrait from '@/assets/portfolio-photo-3.jpg';
import videoFisherman from '@/assets/portfolio-video-1.jpg';
import videoWedding from '@/assets/portfolio-video-2.jpg';
import bracelet1 from '@/assets/portfolio-bracelet-1.jpg';
import bracelet2 from '@/assets/portfolio-bracelet-2.jpg';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const preTypedMessage = `Hello Teekay!

My name is ${formData.name || '[Your Name]'}.
Email: ${formData.email || '[Your Email]'}

${formData.message || 'I would like to discuss a project with you.'}

Looking forward to hearing from you!`;
    
    const encodedMessage = encodeURIComponent(preTypedMessage);
    window.open(`https://wa.me/254798167973?text=${encodedMessage}`, '_blank');
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Maasai Warriors at Sunset",
      category: "Photography",
      image: photoMaasai,
      description: "Traditional Maasai culture captured in the golden savanna light"
    },
    {
      id: 2,
      title: "Lake Victoria Sunrise",
      category: "Video",
      image: videoFisherman,
      description: "Documentary cinematography of Kenyan fishing communities",
      isVideo: true
    },
    {
      id: 3,
      title: "Traditional Beaded Bracelets",
      category: "Bracelets",
      image: bracelet1,
      description: "Handcrafted Maasai-inspired beadwork"
    },
    {
      id: 4,
      title: "Amboseli Elephants",
      category: "Photography",
      image: photoElephants,
      description: "Wildlife photography with Mount Kilimanjaro backdrop"
    },
    {
      id: 5,
      title: "Kenyan Wedding Celebration",
      category: "Video",
      image: videoWedding,
      description: "Capturing joyful moments of traditional celebrations",
      isVideo: true
    },
    {
      id: 6,
      title: "Colorful Anklet Collection",
      category: "Bracelets",
      image: bracelet2,
      description: "Vibrant geometric patterns in traditional style"
    },
    {
      id: 7,
      title: "Nairobi Street Portrait",
      category: "Photography",
      image: photoPortrait,
      description: "Authentic portraits celebrating African beauty"
    }
  ];

  const testimonials = [
    {
      name: "Amina Wanjiku",
      text: "Teekay's bracelets are absolutely stunning! The attention to detail and craftsmanship is incredible.",
      rating: 5
    },
    {
      name: "David Ochieng",
      text: "The photography session was amazing. Teekay captured moments I'll treasure forever.",
      rating: 5
    },
    {
      name: "Grace Njeri",
      text: "Professional video editing with an artistic touch. Exceeded all my expectations!",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-parchment font-lato">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12">
              My Portfolio
            </h2>
          </AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card 
                  className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linen/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-clay-pot ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-warm-amber/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12">
              What Clients Say
            </h2>
          </AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-4 sm:p-6 text-center shadow-lg bg-linen h-full">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-warm-amber text-lg sm:text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-forest-green mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-clay-pot text-sm sm:text-base">- {testimonial.name}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-parchment">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12">
              Get In Touch
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
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
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card className="p-5 sm:p-6 md:p-8 shadow-lg bg-linen">
                <div className="flex items-center gap-2 mb-4 text-forest-green">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Message via WhatsApp</span>
                </div>
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-6">
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-10 sm:py-12 md:py-16 bg-clay-pot"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3 
            className="text-2xl sm:text-3xl font-pacifico text-linen mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p 
            className="text-sm sm:text-base text-linen/90 mb-6 sm:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let's collaborate to create something unique and meaningful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="bg-linen text-clay-pot hover:bg-parchment px-6 sm:px-8 py-3 font-semibold rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </div>
      </motion.section>

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
    </>
  );
};

export default Index;
