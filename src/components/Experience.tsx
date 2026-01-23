// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, Calendar, MapPin } from "lucide-react";

// const experiences = [
//   {
//     role: "AI/ML Developer Intern",
//     company: "TechCorp AI",
//     location: "Remote",
//     duration: "Jan 2024 - Present",
//     highlights: [
//       "Developed and deployed ML models for customer churn prediction with 92% accuracy",
//       "Built automated data pipelines using Python and Apache Airflow",
//       "Collaborated with cross-functional teams to integrate AI solutions into existing products",
//       "Reduced model inference time by 40% through optimization techniques",
//     ],
//   },
//   {
//     role: "Machine Learning Research Assistant",
//     company: "University AI Lab",
//     location: "Lahore, Pakistan",
//     duration: "Jun 2023 - Dec 2023",
//     highlights: [
//       "Conducted research on transformer architectures for NLP tasks",
//       "Published research paper on efficient attention mechanisms",
//       "Developed custom dataset preprocessing pipelines for large-scale experiments",
//       "Mentored junior students in machine learning fundamentals",
//     ],
//   },
//   {
//     role: "Full Stack Developer",
//     company: "StartupXYZ",
//     location: "Lahore, Pakistan",
//     duration: "Jan 2023 - May 2023",
//     highlights: [
//       "Built responsive web applications using React and Node.js",
//       "Integrated AI-powered chatbot using OpenAI API",
//       "Implemented CI/CD pipelines for automated deployments",
//       "Improved application performance by 35% through code optimization",
//     ],
//   },
// ];

// export function Experience() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="experience" className="section-padding">
//       <div className="container-narrow" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <span className="text-primary font-mono text-sm">// Experience</span>
//           <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
//             My <span className="gradient-text">Journey</span>
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Professional experience and internships in AI and software development
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative grid md:grid-cols-2 gap-8 ${
//                   index % 2 === 0 ? "" : "md:text-right"
//                 }`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow -translate-x-1/2 md:translate-x-[-8px]" />

//                 {/* Content */}
//                 <div
//                   className={`pl-8 md:pl-0 ${
//                     index % 2 === 0
//                       ? "md:pr-12"
//                       : "md:col-start-2 md:pl-12 md:text-left"
//                   }`}
//                 >
//                   <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300">
//                     <div className="flex flex-wrap items-center gap-2 mb-3">
//                       <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
//                         <Briefcase className="w-4 h-4" />
//                         {exp.company}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-display font-semibold text-foreground mb-2">
//                       {exp.role}
//                     </h3>

//                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                       <span className="inline-flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {exp.duration}
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         {exp.location}
//                       </span>
//                     </div>

//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       {exp.highlights.map((highlight, i) => (
//                         <li key={i} className="flex gap-2">
//                           <span className="text-primary mt-1.5 flex-shrink-0">•</span>
//                           <span className="text-left">{highlight}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Empty space for alternating layout */}
//                 {index % 2 === 0 && <div className="hidden md:block" />}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Nueroticure",
    location: "Hybrid",
    duration: "Jun 2025 - Aug 2025",
    highlights: [
      "Developed AI features for internal applications using Python and ML frameworks",
      "Integrated backend AI models with React frontend for real-time use",
      "Worked on automation pipelines using n8n and cloud services",
      "Collaborated with senior engineers to optimize AI workflows",
    ],
  },
  {
    role: "Tech Intern",
    company: "Forhopp",
    location: "Remote",
    duration: "Jun 2025 -  Aug 2025",
    highlights: [
      "Assisted in building React applications and web dashboards",
      "Worked with backend APIs and database integration",
      "Learned and implemented workflow automation using n8n",
      "Optimized application performance and user experience",
    ],
  },
  {
    role: "FYP Leader – NS-VQA",
    company: "Arid Agriculture University",
    location: "Rawalpindi, Pakistan",
    duration: "7th & 8th Sem",
    highlights: [
      "Led the team developing Neuro-Symbolic VQA project for visual question answering",
      "Implemented AI models combining neural networks and symbolic reasoning",
      "Designed project architecture and supervised team coding standards",
      "Presented project results to faculty and participated in research discussions",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">// Experience</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional experience and internships in AI and software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow -translate-x-1/2 md:translate-x-[-8px]" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12"
                      : "md:col-start-2 md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span className="text-left">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
