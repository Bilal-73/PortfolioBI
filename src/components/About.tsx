import { Section } from "./Section";

const facts = [
  { label: "Now", value: "AI Associate Software Engineer, TEO" },
  { label: "Before", value: "Systems Limited, Nueroticure, Forhopp" },
  { label: "Studied", value: "BS Computer Science (AI), PMAS Arid University" },
  { label: "Based in", value: "Islamabad, Pakistan" },
];

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-muted-foreground">
        <p>
          <span className="text-foreground">
            Most of my work sits where language models meet real data.
          </span>{" "}
          At TEO I design RAG workflows and agentic systems with LangChain: retrieval
          that returns the right passage, and agents that plan and call tools reliably.
        </p>
        <p>
          Before that I spent four months at Systems Limited building NLP pipelines from
          raw text to LLM integration, running internal workshops, and migrating a bot from
          Azure Bot Framework to the Azure Agent SDK. At university I led our final-year
          project, a neuro-symbolic visual question answering system.
        </p>
        <p>
          I like small, well-scoped tools: a FastAPI service with a clear contract, a
          React front end on top, and logs that tell you why the model answered the way it did.
        </p>
      </div>

      <dl className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-1 text-[15px]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
