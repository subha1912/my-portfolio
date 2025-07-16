import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Sparkles } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
  githubLink?: string;
  delay: number;
}

const ProjectCard = ({ title, description, tech, demoLink, githubLink, delay }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="card-cosmic p-6 h-full relative overflow-hidden"
        whileHover={{ 
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, hsl(262 83% 58%), hsl(217 91% 60%))",
              "linear-gradient(135deg, hsl(217 91% 60%), hsl(142 76% 36%))",
              "linear-gradient(135deg, hsl(142 76% 36%), hsl(262 83% 58%))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.h3 
              className="text-xl font-bold group-hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="group-hover:text-accent transition-colors"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <motion.span
                key={item}
                className="px-3 py-1 bg-muted/30 rounded-full text-xs font-medium"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.1 * index }}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent) / 0.2)" }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {githubLink && (
              <motion.button 
                className="btn-accent w-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                Source
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "3D Interactive Portfolio",
      description: "A stunning portfolio website built with React, Three.js, and Framer Motion featuring immersive 3D elements and smooth animations.",
      tech: ["React", "Three.js", "Framer Motion", "TypeScript"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AI-Powered Dashboard",
      description: "Modern analytics dashboard with real-time data visualization, built using React and integrated with machine learning APIs.",
      tech: ["React", "Python", "Power BI", "API Integration"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Creative Design System",
      description: "Comprehensive design system and component library with extensive documentation and interactive examples.",
      tech: ["React", "Storybook", "CSS-in-JS", "Design Tokens"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover my latest work showcasing creativity and technical excellence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              delay={0.2 * index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button 
            className="btn-cosmic"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;