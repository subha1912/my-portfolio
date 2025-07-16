import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-white",
      bgColor: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    }
  ];

  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'd put your actual resume file here
    link.download = 'Creative_Developer_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-spin-slow" />
      
      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect & <span className="bg-gradient-cosmic bg-clip-text text-transparent">Collaborate</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Follow my journey and connect with me across various platforms
          </motion.p>

          {/* Resume Download */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleDownloadResume}
              className="btn-cosmic text-lg px-8 py-4 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "var(--shadow-glow)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  zIndex: 10
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center ${social.bgColor} transition-all duration-300 group-hover:shadow-cosmic`}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <social.icon className={`w-8 h-8 text-foreground ${social.color} transition-colors duration-300`} />
                </motion.div>
                
                {/* Tooltip */}
                <motion.span
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-card px-2 py-1 rounded-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.name}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 p-8 card-cosmic max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 text-accent-glow"
              animate={{
                textShadow: [
                  "0 0 20px hsl(290 84% 70% / 0.8)",
                  "0 0 40px hsl(290 84% 70% / 0.6)",
                  "0 0 20px hsl(290 84% 70% / 0.8)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Work Together?
            </motion.h3>
            <p className="text-muted-foreground mb-6">
              Let's turn your vision into reality with cutting-edge technology and creative design.
            </p>
            <motion.button 
              className="btn-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;