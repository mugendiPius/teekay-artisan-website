
import { Camera, Video, Palette } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
