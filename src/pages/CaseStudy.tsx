import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const nodeColors = ["bg-pop-yellow", "bg-pop-pink", "bg-pop-lime", "bg-pop-orange", "bg-pop-sky"];
const sections = [
  { id: "problem", label: "Problem" },
  { id: "how", label: "How it works" },
  { id: "decisions", label: "Key decisions" },
  { id: "results", label: "Results" },
];

export default function CaseStudy() {
  const { id = "" } = useParams();
  const study = getCaseStudy(id);
  const project = projects.find((p) => p.id === id);
  if (!study || !project) return <NotFound />;

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const nextProject = projects.find((p) => p.id === next.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar active="projects" />

      <header className="relative overflow-hidden border-b-[2.5px] border-foreground bg-pop-blue py-12 text-paper md:py-16">
        <div className="container-wide">
          <Link to="/#projects" className="font-mono text-[13px] font-semibold hover:underline">
            ← back to projects
          </Link>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="sticker -rotate-3 bg-pop-lime">CASE STUDY · {String(index + 1).padStart(2, "0")}</span>
            {study.badges.map((b, i) => (
              <span key={b} className={`sticker bg-pop-yellow ${i % 2 ? "-rotate-2" : "rotate-[4deg]"}`}>
                {b}
              </span>
            ))}
          </div>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl md:text-[5.25rem]">
            {study.headline}
          </h1>
          <dl className="mt-9 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
            {[
              ["Project", project.title],
              ["Role", study.role],
              ["Timeline", study.timeline],
              ["Stack", study.stack],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[14px] border-[2.5px] border-[hsl(var(--on-pop))] bg-paper px-3.5 py-3 text-onpop shadow-[3px_3px_0_hsl(var(--on-pop))]">
                <dt className="font-mono text-[11px] uppercase opacity-60">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className="container-wide grid gap-0 py-10 md:grid-cols-[190px_1fr] md:gap-12 md:py-16">
        <nav aria-label="On this page" className="sticky top-[72px] z-10 -mx-5 mb-6 flex gap-1.5 overflow-x-auto bg-background px-5 py-2 md:top-28 md:mx-0 md:flex-col md:self-start md:px-0">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-lg border-2 border-transparent px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:border-foreground hover:bg-pop-yellow hover:text-onpop">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="min-w-0 space-y-16">
          <Reveal>
            <section id="problem">
              <h2 className="mb-4 text-3xl font-extrabold md:text-[2.5rem]">The problem</h2>
              <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground">{study.problem}</p>
              {project.image && (
                <img src={project.image} alt={`Screenshot of ${project.title}`} className="pop-box mt-6 w-full object-cover" />
              )}
            </section>
          </Reveal>

          <Reveal>
            <section id="how">
              <h2 className="mb-4 text-3xl font-extrabold md:text-[2.5rem]">How it works</h2>
              <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground">{study.approach}</p>
              <ol className="pop-box mt-6 flex flex-col items-stretch gap-2.5 p-6 text-center md:flex-row md:flex-wrap md:items-center md:text-left">
                {study.flow.map((step, i) => (
                  <Fragment key={step.label}>
                    {i > 0 && (
                      <li aria-hidden className="font-display text-2xl font-extrabold md:rotate-0">
                        <span className="inline-block rotate-90 md:rotate-0">→</span>
                      </li>
                    )}
                    <li className={`rounded-xl border-[2.5px] border-foreground px-3.5 py-3 text-sm font-bold text-onpop shadow-pop-sm ${nodeColors[i % nodeColors.length]}`}>
                      {step.label}
                      {step.detail && <small className="block font-medium">{step.detail}</small>}
                    </li>
                  </Fragment>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal>
            <section id="decisions">
              <h2 className="mb-6 text-3xl font-extrabold md:text-[2.5rem]">Key decisions</h2>
              <div className="grid gap-4 lg:grid-cols-3">
                {study.decisions.map((d) => (
                  <div key={d.title} className="pop-box p-5">
                    <h3 className="mb-1.5 text-xl font-extrabold">{d.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="results">
              <h2 className="mb-4 text-3xl font-extrabold md:text-[2.5rem]">Results</h2>
              <ul className="max-w-[42rem] space-y-2.5 text-lg text-muted-foreground">
                {study.results.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden className="text-pop-orange">★</span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-pop">
                    {link.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </section>
          </Reveal>

          {next.id !== study.id && (
            <Link
              to={`/work/${next.id}`}
              data-cursor="NEXT"
              className="pop-box flex flex-col items-start justify-between gap-4 bg-pop-lime p-7 text-onpop transition-transform hover:-translate-y-1 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-mono text-xs">NEXT CASE STUDY</p>
                <p className="font-display text-3xl font-extrabold tracking-[-0.02em]">{nextProject?.title} →</p>
              </div>
              <span className="sticker bg-paper">{nextProject?.area}</span>
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
