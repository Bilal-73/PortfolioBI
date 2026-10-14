import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { TerminalCard } from "./TerminalCard";

const words = ["sees", "reads", "reasons", "listens"];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  // The photo and stickers can be picked up and tossed around; they spring back to their spot on release.
  const drag = reduceMotion
    ? {}
    : { drag: true, dragSnapToOrigin: true, whileDrag: { scale: 1.06, zIndex: 30 } };

  return (
    <section id="top" className="relative pb-20 pt-6 md:pb-28 md:pt-12">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <span className="sticker -rotate-3 bg-pop-lime">
            ● {profile.currentRole} @ {profile.currentCompany}
          </span>

          <h1 className="mt-6 text-[3rem] font-extrabold leading-[1.02] sm:text-7xl xl:text-[6.25rem]">
            I build AI that{" "}
            <span className="hl">
              <span className="inline-block min-w-[3.6ch]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={words[wordIndex]}
                    className="inline-block"
                    initial={{ y: "40%", rotate: 8, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: "-40%", rotate: -8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <br />
            and actually
            <br />
            ships.
          </h1>

          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Hi, I'm Bilal, an AI engineer in {profile.location.split(",")[0]}. I work on RAG systems, agents and
            computer vision, from the notebook all the way to production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a href="#projects" className="btn-pop btn-pop-orange" data-cursor="GO">
              See my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-pop">
              Say hello
            </a>
            <span className="hidden font-hand text-2xl sm:inline">← pick one!</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a href="/resume.pdf" download className="link inline-flex items-center gap-1.5">
              <Download className="h-4 w-4" /> Résumé
            </a>
            <Link to="/paid-projects" className="link inline-flex items-center gap-1">
              Open to freelance projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col">
          <span className="absolute -top-9 left-5 hidden -rotate-3 font-hand text-2xl sm:block">ask me something ↘</span>
          <TerminalCard />
          <motion.figure
            {...drag}
            data-cursor="DRAG"
            style={{ rotate: 6 }}
            className="relative z-10 order-first mb-[-28px] ml-auto mr-6 w-28 touch-none rounded-md border-[2.5px] border-foreground bg-paper p-2 pb-1 shadow-pop sm:w-32 lg:absolute lg:-right-3 lg:-top-40 lg:order-none lg:m-0 lg:w-36"
          >
            <img
              src="/ProfessionalPicture.webp"
              alt="Portrait of Bilal Imran"
              draggable={false}
              className="aspect-square w-full rounded-sm border-2 border-[hsl(var(--on-pop))] object-cover"
            />
            <figcaption className="py-1 text-center font-hand text-xl leading-none text-onpop">that's me :)</figcaption>
          </motion.figure>
        </div>
      </div>

      <motion.span
        {...drag}
        data-cursor="DRAG"
        style={{ rotate: 10 }}
        className="sticker absolute left-[46%] top-2 hidden touch-none bg-pop-pink lg:inline-block"
      >
        📍 {profile.location}
      </motion.span>
      <motion.span
        {...drag}
        data-cursor="DRAG"
        style={{ rotate: -8 }}
        className="sticker absolute bottom-6 left-[42%] hidden touch-none bg-pop-yellow lg:inline-block"
      >
        ★ Best FYP Award
      </motion.span>
    </section>
  );
}
