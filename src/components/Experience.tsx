import { Section } from "./Section";

const experiences = [
  {
    role: "AI Associate Software Engineer",
    company: "TEO",
    location: "Islamabad",
    duration: "Jun 2026 – Now",
    highlights: [
      "Building RAG workflows with a focus on retrieval and answer quality",
      "Designing LangChain pipelines meant to hold up in production",
      "Developing agentic systems with tool use, planning and orchestration",
      "Working with a Danish product team on applied AI delivery",
    ],
  },
  {
    role: "AI Intern",
    company: "Systems Limited",
    location: "Islamabad",
    duration: "Feb – May 2026",
    highlights: [
      "Built end-to-end NLP pipelines, from raw data to LLM integration",
      "Migrated an Azure Bot Framework bot to the Azure Agent SDK",
      "Ran NLP training sessions and workshops for the team",
      "Documented how NLP methods evolved and which practices to keep",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Nueroticure",
    location: "Hybrid",
    duration: "Jun – Aug 2025",
    highlights: [
      "Developed AI features for internal applications in Python",
      "Connected backend models to a React front end for real-time use",
      "Built automation pipelines with n8n and cloud services",
    ],
  },
  {
    role: "Tech Intern",
    company: "Forhopp",
    location: "Remote",
    duration: "Jun – Aug 2025",
    highlights: [
      "Built React applications and internal dashboards",
      "Integrated backend APIs and databases",
      "Set up workflow automation with n8n",
    ],
  },
  {
    role: "Final Year Project Lead, NS-VQA",
    company: "PMAS Arid Agriculture University",
    location: "Rawalpindi",
    duration: "Final year",
    highlights: [
      "Led the team building a neuro-symbolic visual question answering system",
      "Combined neural perception models with symbolic reasoning",
      "Owned the architecture and the team's coding standards",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="divide-y divide-border">
        {experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.role}`}
            className="grid gap-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs leading-6 text-muted-foreground">{exp.duration}</p>
            <div>
              <h3 className="text-[17px] font-medium leading-6">
                {exp.role}
                <span className="text-muted-foreground"> · {exp.company}</span>
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{exp.location}</p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-4">
                    <span className="absolute left-0 top-[0.7em] h-px w-2 bg-muted-foreground/60" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
