import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  /** Handwritten aside next to the section number. */
  note?: string;
  children: ReactNode;
}

export function Section({ id, index, title, note, children }: SectionProps) {
  return (
    <section id={id} className="container-wide py-20 md:py-28">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="section-num">{index}</span>
          {note && <span className="font-hand text-2xl leading-none">{note}</span>}
        </div>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
