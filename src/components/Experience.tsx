import { useState } from "react";
import { experiences } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const dotColors = ["bg-pop-lime", "bg-pop-orange", "bg-pop-pink", "bg-pop-yellow", "bg-pop-sky"];

export function Experience() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <Section id="experience" index="03" title="Experience" note="tap a card to open it">
      <ol className="relative before:absolute before:bottom-0 before:left-2 before:top-0 before:border-l-[3px] before:border-dashed before:border-foreground md:before:left-1/2">
        {experiences.map((job, i) => {
          const isOpen = open.has(i);
          const left = i % 2 === 0;
          const color = dotColors[i % dotColors.length];
          return (
            <li key={`${job.company}-${job.role}`} className={`relative mb-8 ml-9 md:ml-0 md:w-[calc(50%-40px)] ${left ? "md:mr-auto" : "md:ml-auto"}`}>
              <span
                aria-hidden
                className={`absolute -left-[37px] top-6 h-[18px] w-[18px] rounded-full border-[3px] border-foreground ${color} ${
                  left ? "md:-right-[51px] md:left-auto" : "md:-left-[51px]"
                }`}
              />
              <Reveal>
                <div className={`pop-box relative transition-transform duration-200 hover:rotate-0 ${left ? "md:-rotate-[0.8deg]" : "md:rotate-[0.8deg]"}`}>
                  <span className={`sticker absolute -top-3.5 right-4 ${color}`}>{job.duration}</span>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    data-cursor={isOpen ? "CLOSE" : "OPEN"}
                    className="w-full rounded-[16px] px-5 pb-4 pt-6 text-left"
                  >
                    <h3 className="text-[1.4rem] font-extrabold leading-tight">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {job.company} · {job.location}
                    </p>
                    <span className="mt-2.5 inline-block font-mono text-xs font-semibold">{isOpen ? "− less" : "+ more"}</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="list-disc space-y-1.5 overflow-hidden pl-10 pr-5 text-[15px] text-muted-foreground marker:text-foreground">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                      <li className="list-none pb-4" aria-hidden />
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
