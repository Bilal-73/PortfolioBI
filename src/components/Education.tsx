import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const education = {
  degree: "BS Computer Science, AI specialisation",
  institution: "PMAS Arid Agriculture University",
  years: "2022 – 2026",
  gpa: "3.89 / 4.0",
  achievements: [
    "Best Final Year Project Award",
    "Runner-up, university coding competition",
    "Scholarship recipient",
  ],
};

const certifications = [
  {
    name: "Designing Agentic Systems with LangChain",
    file: "/Certifcates/Designing Agentic Systems with LangChain.pdf",
  },
  {
    name: "Fine-Tuning with Llama 3",
    file: "/Certifcates/Fine-Tuning with Llama 3.pdf",
  },
  {
    name: "Understanding Cloud Computing",
    file: "/Certifcates/Understanding Cloud Computing.pdf",
  },
  {
    name: "Introduction to Python, DataCamp",
    file: "/Certifcates/IntroductionToPythonDataCamp.pdf",
  },
];

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="grid gap-2 sm:grid-cols-[130px_1fr] sm:gap-8">
        <p className="font-mono text-xs leading-6 text-muted-foreground">{education.years}</p>
        <div>
          <h3 className="text-[17px] font-medium leading-6">{education.degree}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {education.institution} · GPA {education.gpa}
          </p>
          <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
            {education.achievements.map((achievement) => (
              <li key={achievement} className="relative pl-4">
                <span className="absolute left-0 top-[0.7em] h-px w-2 bg-muted-foreground/60" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <p className="eyebrow">Certificates</p>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <a
                href={encodeURI(cert.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-3.5 text-[15px]"
              >
                <span className="transition-colors group-hover:text-accent">{cert.name}</span>
                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                  PDF <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
