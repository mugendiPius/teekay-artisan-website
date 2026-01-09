import { motion } from 'framer-motion';
import { Camera, Video, Palette } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-linen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-8 sm:mb-12">
              About Me
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <motion.img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80"
                alt="Teekay Portrait"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover border-4 border-sage-leaf/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-forest-green mb-4 sm:mb-6 leading-relaxed">
                Hello! I'm Teekay, a passionate artist and craftsman who finds joy in creating beautiful, 
                handcrafted bracelets and capturing life's most precious moments through photography and video.
              </p>
              <p className="text-base sm:text-lg text-forest-green mb-4 sm:mb-6 leading-relaxed">
                My journey began with a simple love for working with my hands and creating something meaningful. 
                Each bracelet I craft tells a story, and every photograph I take preserves a memory that will last forever.
              </p>
              <p className="text-base sm:text-lg text-forest-green leading-relaxed">
                Whether I'm weaving intricate patterns into jewelry or editing cinematic videos, 
                I pour my heart into every project, ensuring that each piece reflects the beauty and 
                authenticity that makes life truly special.
              </p>
              <motion.div 
                className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-clay-pot mx-auto mb-2" />
                  <span className="text-xs sm:text-sm text-forest-green font-medium">Bracelet Design</span>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-clay-pot mx-auto mb-2" />
                  <span className="text-xs sm:text-sm text-forest-green font-medium">Photography</span>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Video className="w-6 h-6 sm:w-8 sm:h-8 text-clay-pot mx-auto mb-2" />
                  <span className="text-xs sm:text-sm text-forest-green font-medium">Video Editing</span>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
