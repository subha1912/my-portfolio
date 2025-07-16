import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 btn-cosmic rounded-full p-4 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="w-6 h-6 text-primary-foreground group-hover:text-accent-glow transition-colors" />
    </motion.button>
  );
};

export default ScrollIndicator;