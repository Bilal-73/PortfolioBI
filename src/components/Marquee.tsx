const items = ["RAG", "Agents", "Computer vision", "NLP", "LangChain", "FastAPI", "Qdrant", "React"];

/** Tilted ink strip of skills that scrolls forever. Decorative, so hidden from screen readers. */
export function Marquee() {
  const run = items.map((item) => (
    <span key={item}>
      {item.toUpperCase()}
      <b className="mx-5 text-pop-lime">✦</b>
    </span>
  ));

  return (
    <div aria-hidden className="-mx-5 -rotate-[1.5deg] overflow-hidden whitespace-nowrap border-y-[2.5px] border-foreground bg-foreground text-background">
      <div className="inline-block animate-marquee py-3.5 font-display text-xl font-extrabold tracking-[-0.01em] sm:text-[1.65rem]">
        {run}
        {run}
      </div>
    </div>
  );
}
