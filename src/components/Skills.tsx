import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, skillCategories } from "@/data/skills";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const groupedSkills = {
    programming: skills.filter((s) => s.category === "programming"),
    "ai-ml": skills.filter((s) => s.category === "ai-ml"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">// My Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building AI-powered applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {(Object.keys(groupedSkills) as Array<keyof typeof groupedSkills>).map(
            (category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent" />
                  {skillCategories[category]}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedSkills[category].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <skill.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="ml-auto text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}


