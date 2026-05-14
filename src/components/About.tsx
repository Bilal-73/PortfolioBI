import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Zap, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Brain, value: "15+", label: "ML Models Deployed" },
  { icon: Zap, value: "3+", label: "Years Experience" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -rotate-6 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl rotate-3 scale-102" />
              
              {/* Profile Image Placeholder */}
                <div className="relative bg-card rounded-2xl overflow-hidden aspect-square border border-border shadow-card">
                <img
                  // src={profileImage}
                  src="ProfessionalPicture.png"
                  alt="Bilal Imran - AI Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono text-sm">// About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
                Crafting Intelligence,{" "}
                <span className="gradient-text">One Algorithm at a Time</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm an AI Developer and Machine Learning Engineer with a passion for 
                building intelligent systems that solve real-world problems. With expertise 
                in deep learning, natural language processing, and computer vision, I transform 
                complex data into actionable insights.
              </p>
              <p>
                My journey in AI began during my university years, where I fell in love with 
                the potential of neural networks. Since then, I've worked on diverse projects 
                ranging from chatbots to predictive analytics platforms, always pushing the 
                boundaries of what's possible with machine learning.
              </p>
              <p>
                When I'm not training models or optimizing algorithms, you'll find me 
                contributing to open-source projects, writing technical blogs, or exploring 
                the latest research papers in AI.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card border border-border"
                >
                  <stat.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
