import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Wrench, Palette } from "lucide-react";

interface SkillCardProps {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; logo: string }[];
  delay: number;
}

const SkillCard = ({ category, icon, skills, delay }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-64 cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 card-cosmic p-6 flex flex-col items-center justify-center text-center group-hover:shadow-glow transition-all duration-300"
             style={{ backfaceVisibility: "hidden" }}>
          <motion.div
            className="text-primary mb-4"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-2">{category}</h3>
          <p className="text-muted-foreground text-sm">Click to explore</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 card-cosmic p-6 flex flex-col justify-center"
             style={{ 
               backfaceVisibility: "hidden", 
               transform: "rotateY(180deg)" 
             }}>
          <h3 className="text-lg font-bold mb-4 text-center text-accent">{category}</h3>
          <div className="space-y-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-muted/30 rounded-lg p-3 text-sm flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-lg">{skill.logo}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-12 h-12" />,
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "JavaScript", logo: "⚡" },
        { name: "TypeScript", logo: "🔷" },
        { name: "SQL", logo: "🗄️" },
        { name: "HTML/CSS", logo: "🎨" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Wrench className="w-12 h-12" />,
      skills: [
        { name: "React.js", logo: "⚛️" },
        { name: "Three.js", logo: "🎲" },
        { name: "Framer Motion", logo: "🎭" },
        { name: "Node.js", logo: "🟢" },
        { name: "Express.js", logo: "🚀" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Palette className="w-12 h-12" />,
      skills: [
        { name: "Power BI", logo: "📊" },
        { name: "Git", logo: "🔀" },
        { name: "Figma", logo: "🎯" },
        { name: "VS Code", logo: "💻" },
        { name: "Adobe Creative Suite", logo: "🎨" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      
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
            My <span className="bg-gradient-cosmic bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my technical expertise across different domains
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.category}
              category={category.category}
              icon={category.icon}
              skills={category.skills}
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
            <p className="text-muted-foreground mb-6">
              Ready to bring your ideas to life with cutting-edge technology?
            </p>
            <button 
              className="btn-accent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </button>
          </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;