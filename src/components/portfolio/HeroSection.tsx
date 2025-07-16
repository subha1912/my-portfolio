import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Code, Palette } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  const [logoFlipped, setLogoFlipped] = useState(false);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient Blur Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-spin-slow" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex items-center justify-between min-h-screen">
          
          {/* Animated Logo on Left */}
          <motion.div
            className="hidden lg:block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-32 h-32 cursor-pointer"
              onClick={() => setLogoFlipped(!logoFlipped)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-cosmic p-4 shadow-cosmic"
                animate={{ rotateY: logoFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {!logoFlipped ? (
                  <motion.div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-primary-foreground animate-pulse" />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="w-full h-full flex flex-col items-center justify-center text-primary-foreground text-center"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <div className="text-xs font-bold">Creative</div>
                    <div className="text-xs">Developer</div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            
            {logoFlipped && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  Crafting digital experiences with code & creativity
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left lg:ml-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-6xl lg:text-8xl font-black mb-6 text-glow"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(262 83% 70% / 0.8)",
                    "0 0 40px hsl(262 83% 70% / 0.6)",
                    "0 0 20px hsl(262 83% 70% / 0.8)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Creative
                <br />
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Transforming ideas into stunning digital experiences through 
                innovative web development and creative design
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button 
                  className="btn-cosmic group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Projects
                </button>
                <button 
                  className="btn-accent group"
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Palette className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  My Skills
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Icons on Right */}
          <motion.div
            className="hidden xl:block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-lg bg-gradient-cosmic shadow-cosmic mb-6 flex items-center justify-center"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              <motion.div
                className="w-16 h-16 rounded-lg bg-gradient-accent shadow-accent mb-6 flex items-center justify-center ml-8"
                animate={{ rotateX: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
              >
                <Palette className="w-8 h-8 text-accent-foreground" />
              </motion.div>
              
              <motion.div
                className="w-12 h-12 rounded-lg bg-secondary shadow-glow flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator onClick={scrollToNext} />
    </section>
  );
};

export default HeroSection;