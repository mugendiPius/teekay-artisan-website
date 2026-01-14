import { motion } from 'framer-motion';
import { Camera, Video, Sparkles, Palette, Film, Heart, Gem, Scissors, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography capturing authentic Kenyan moments - portraits, events, wildlife, and cultural celebrations.",
      skills: ["Portrait Photography", "Event Coverage", "Wildlife Shots", "Cultural Documentation"]
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic video production from weddings to documentaries, telling compelling visual stories.",
      skills: ["Wedding Films", "Music Videos", "Documentaries", "Corporate Videos"]
    },
    {
      icon: Gem,
      title: "Handmade Bracelets",
      description: "Authentic Maasai-inspired beaded bracelets and accessories crafted with traditional techniques.",
      skills: ["Beaded Bracelets", "Anklets", "Custom Designs", "Wholesale Orders"]
    }
  ];

  const professionalSkills = [
    { icon: Film, name: "Video Editing", level: 95 },
    { icon: Palette, name: "Color Grading", level: 90 },
    { icon: Camera, name: "Photo Retouching", level: 92 },
    { icon: Sparkles, name: "Creative Direction", level: 88 },
    { icon: Scissors, name: "Craftsmanship", level: 95 },
    { icon: Users, name: "Client Relations", level: 90 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-linen">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pacifico text-clay-pot text-center mb-4">
            Services & Skills
          </h2>
          <p className="text-center text-sage-leaf mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            From capturing moments to crafting memories - here's what Teekay brings to the table
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-leaf/10"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rust to-clay-pot rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-linen" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-green mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-sage-leaf mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-3 py-1 bg-parchment text-forest-green rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills */}
        <AnimatedSection>
          <h3 className="text-2xl sm:text-3xl font-pacifico text-clay-pot text-center mb-8">
            Professional Skills
          </h3>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {professionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-warm-amber/20 rounded-lg flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-rust" />
                </div>
                <span className="font-semibold text-forest-green text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
              <div className="relative h-2 bg-parchment rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-rust to-warm-amber rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs text-sage-leaf mt-1 block text-right">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        {/* What Sets Teekay Apart */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-forest-green to-charcoal rounded-2xl p-6 sm:p-10 text-center">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-warm-amber mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-pacifico text-linen mb-4">
              Why Work With Teekay?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-linen/90 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-warm-amber mb-1">Authentic Vision</p>
                <p>Celebrating Kenyan culture and beauty in every project</p>
              </div>
              <div>
                <p className="font-semibold text-warm-amber mb-1">Quality Craftsmanship</p>
                <p>Attention to detail in both digital and handmade work</p>
              </div>
              <div>
                <p className="font-semibold text-warm-amber mb-1">Personal Touch</p>
                <p>Every client gets a unique, tailored experience</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
