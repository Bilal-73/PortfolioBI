import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, FileText } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "PMAS ARID University",
    location: "Lahore, Pakistan",
    year: "2022 - 2026",
    gpa: "3.89/4.0",
    achievements: [
      "Specialization in Artificial Intelligence",
      "Scholarship",
      "Best Final Year Project Award",
      "Runner Up for Coding Competition",
    ],
  },
  
];

const certifications = [
  {
    name: "Designing Agentic Systems with LangChain",
    issuer: "Professional Certificate",
    file: "/Certifcates/Designing Agentic Systems with LangChain.pdf",
  },
  {
    name: "Fine-Tuning with Llama 3",
    issuer: "Professional Certificate",
    file: "/Certifcates/Fine-Tuning with Llama 3.pdf",
  },
  {
    name: "Introduction To Python (DataCamp)",
    issuer: "Professional Certificate",
    file: "/Certifcates/IntroductionToPythonDataCamp.pdf",
  },
  {
    name: "Understanding Cloud Computing",
    issuer: "Professional Certificate",
    file: "/Certifcates/Understanding Cloud Computing.pdf",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">// Education</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My educational journey and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    GPA: {edu.gpa}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Achievements:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>

            <div className="grid gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-visible"
                >
                  {/* Hover preview (hidden until card hovered) */}
                  <div className="absolute -top-2 right-20 opacity-0 pointer-events-none scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
                    <div className="w-72 h-44 rounded-md shadow-lg border border-border bg-card overflow-hidden">
                      <object
                        data={encodeURI(cert.file)}
                        type="application/pdf"
                        className="w-full h-full"
                        aria-label={cert.name + " preview"}
                      >
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                          PDF preview
                        </div>
                      </object>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
                      <FileText className="w-3.5 h-3.5" />
                      PDF
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
