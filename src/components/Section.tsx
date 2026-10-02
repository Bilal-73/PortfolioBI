import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="container-narrow">
      <div className="grid gap-6 border-t border-border py-16 md:grid-cols-[180px_1fr] md:gap-10 md:py-24">
        <header className="md:sticky md:top-24 md:self-start">
          <p className="eyebrow">{index}</p>
          <h2 className="mt-2 font-serif text-3xl leading-none md:text-[2.25rem]">{title}</h2>
        </header>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-w-0"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
