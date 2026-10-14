import { projects } from "@/data/projects";
import { education, experiences } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const roles = experiences.filter((e) => e.duration !== "Final year").length;

const stats = [
  { value: education.gpa, label: "GPA in BS CS (AI)", className: "-rotate-[1.5deg] bg-pop-yellow text-onpop" },
  { value: String(roles), label: "AI roles & internships", className: "rotate-1" },
  { value: String(projects.length), label: "projects on GitHub", className: "-rotate-[0.8deg] bg-pop-pink text-onpop" },
  { value: "1st", label: "Best Final Year Project", className: "rotate-[1.4deg]" },
];

export function About() {
  return (
    <Section id="about" index="01" title="About" note="the short version">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="font-bold text-foreground">
              Most of my work sits where language models meet real data.
            </span>{" "}
            At TEO I design RAG workflows and agentic systems with LangChain: retrieval that returns the right passage,
            and agents that plan and call tools reliably.
          </p>
          <p>
            Before that I spent four months at Systems Limited building NLP pipelines from raw text to LLM integration,
            running internal workshops, and migrating a bot from Azure Bot Framework to the Azure Agent SDK. At
            university I led our final-year project, a neuro-symbolic visual question answering system.
          </p>
          <p>
            I like small, well-scoped tools: a FastAPI service with a clear contract, a React front end on top, and logs
            that tell you why the model answered the way it did.
          </p>
        </Reveal>

        <div className="self-start">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div className={`pop-box p-5 ${stat.className}`}>
                  <p className="font-display text-[2.6rem] font-extrabold leading-none tracking-[-0.03em] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm opacity-80">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
