import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

interface Answer {
  question: string;
  answer: string;
  link?: { label: string; to: string };
}

const answers: Answer[] = [
  {
    question: "whoami",
    answer: `${profile.name}, ${profile.currentRole} @ ${profile.currentCompany}, ${profile.location}. I build RAG systems, agents and computer-vision tools.`,
  },
  {
    question: "what are you building?",
    answer:
      "RAG workflows and LangChain pipelines that hold up in production, plus agentic systems with tool use and planning.",
  },
  {
    question: "best project?",
    answer: "NS-VQA, a voice assistant that lets blind users ask what their camera sees. It won Best FYP.",
    link: { label: "open the case study →", to: "/work/ns-vqa" },
  },
  {
    question: "can I hire you?",
    answer: `Yes! Email ${profile.email}, or hit the big orange button.`,
  },
];

/** A fake terminal that "types" a preset answer to whichever question is clicked. */
export function TerminalCard() {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState<Answer | null>(null);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!current) return;
    if (reduceMotion) {
      setTyped(current.answer.length);
      return;
    }
    setTyped(0);
    const id = setInterval(() => {
      setTyped((n) => {
        if (n >= current.answer.length) clearInterval(id);
        return Math.min(n + 1, current.answer.length);
      });
    }, 16);
    return () => clearInterval(id);
  }, [current, reduceMotion]);

  const done = current && typed >= current.answer.length;

  return (
    <div className="pop-box overflow-hidden shadow-pop-lg">
      <div className="flex items-center gap-1.5 border-b-[2.5px] border-foreground bg-pop-lime px-3.5 py-2.5 text-onpop">
        {[0, 1, 2].map((i) => (
          <i key={i} className="h-3 w-3 rounded-full border-2 border-[hsl(var(--on-pop))] bg-paper" />
        ))}
        <span className="ml-2 font-mono text-xs font-semibold">bilal@portfolio ~</span>
      </div>

      <div className="min-h-[190px] p-4 font-mono text-[13.5px] leading-relaxed" aria-live="polite">
        {current ? (
          <>
            <p className="text-pop-blue dark:text-pop-sky">$ {current.question}</p>
            <p className="mt-1">
              {current.answer.slice(0, typed)}
              {!done && <span className="ml-0.5 inline-block h-[15px] w-2 animate-blink bg-foreground align-[-2px]" />}
            </p>
            {done && current.link && (
              <Link to={current.link.to} className="link mt-2 inline-block text-pop-blue dark:text-pop-sky">
                {current.link.label}
              </Link>
            )}
          </>
        ) : (
          <p>
            <span className="text-pop-blue dark:text-pop-sky">$</span> click a question below{" "}
            <span className="inline-block h-[15px] w-2 animate-blink bg-foreground align-[-2px]" />
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 border-t-2 border-dashed border-foreground p-3.5">
        {answers.map((a) => (
          <button
            key={a.question}
            onClick={() => setCurrent(a)}
            aria-pressed={current === a}
            className={`rounded-full border-2 border-foreground px-2.5 py-1.5 font-mono text-xs transition-colors hover:bg-pop-yellow hover:text-onpop ${
              current === a ? "bg-pop-yellow text-onpop" : "bg-background"
            }`}
          >
            {a.question}
          </button>
        ))}
      </div>
    </div>
  );
}
