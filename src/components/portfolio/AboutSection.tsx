import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Coffee, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated Gradient Blurs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-8 text-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="bg-gradient-cosmic bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="card-cosmic p-6 group hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Heart className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Passionate</h3>
              <p className="text-muted-foreground">
                Driven by the love for creating beautiful, functional digital experiences
              </p>
            </motion.div>
            
            <motion.div 
              className="card-cosmic p-6 group hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: -5 }}
            >
              <Code2 className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Innovative</h3>
              <p className="text-muted-foreground">
                Always exploring cutting-edge technologies and creative solutions
              </p>
            </motion.div>
            
            <motion.div 
              className="card-cosmic p-6 group hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Coffee className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Dedicated</h3>
              <p className="text-muted-foreground">
                Committed to delivering exceptional results with attention to detail
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="prose prose-lg prose-invert mx-auto text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I'm a creative developer who bridges the gap between design and technology. 
              With expertise in modern web technologies like React, Three.js, and Framer Motion, 
              I craft immersive digital experiences that captivate and engage users.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey combines technical proficiency with artistic vision, allowing me to 
              create websites and applications that are not just functional, but truly memorable. 
              Every project is an opportunity to push boundaries and explore new possibilities 
              in the digital realm.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;