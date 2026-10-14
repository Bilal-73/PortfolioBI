import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project, ProjectCategory, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const filters: ("All" | ProjectCategory)[] = ["All", "RAG", "Computer vision", "NLP", "Agents", "Other"];

// Featured projects get loud colours and bigger tiles, in data order.
const featuredStyles = [
  { size: "md:col-span-2 lg:row-span-2", color: "bg-pop-blue text-paper" },
  { size: "md:col-span-2", color: "bg-pop-orange text-onpop" },
  { size: "", color: "bg-pop-lime text-onpop" },
  { size: "", color: "bg-pop-pink text-onpop" },
  { size: "md:col-span-2", color: "bg-pop-yellow text-onpop" },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" index="02" title="Projects" note="things I've built (and broken, then fixed)">
      <div className="-mx-5 mb-8 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter projects">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`shrink-0 rounded-full border-[2.5px] border-foreground px-4 py-2 text-sm font-bold transition-transform hover:-rotate-3 ${
                filter === f ? "bg-foreground text-background" : "bg-card"
              }`}
            >
              {f}
              <sup className="ml-0.5 font-mono text-[10px]">{count}</sup>
            </button>
          );
        })}
      </div>

      <div className="grid grid-flow-dense auto-rows-[minmax(150px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={(i % 4) * 0.05} className={styleFor(project, featured).size}>
            <ProjectCard project={project} style={styleFor(project, featured)} />
          </Reveal>
        ))}
      </div>

      <a
        href={`${profile.github}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pop mt-10"
      >
        All repositories on GitHub <ArrowUpRight className="h-4 w-4" />
      </a>
    </Section>
  );
}

function styleFor(project: Project, featured: Project[]) {
  const i = featured.indexOf(project);
  if (i < 0) return { size: "", color: "", big: false };
  const style = featuredStyles[i % featuredStyles.length];
  // A double-height tile only makes sense when there is a screenshot to fill it.
  const size = project.image ? style.size : style.size.replace("lg:row-span-2", "").trim();
  return { ...style, size, big: i === 0 };
}

function ProjectCard({ project, style }: { project: Project; style: ReturnType<typeof styleFor> }) {
  const [primary, ...secondary] = project.links;
  const { big } = style;
  const wide = style.size.includes("col-span-2");
  const titleLink = "after:absolute after:inset-0 after:rounded-[18px]";

  return (
    <article
      data-cursor={project.caseStudy ? "READ" : "VIEW"}
      className={`pop-box group relative flex h-full flex-col gap-2.5 p-5 transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:-rotate-[0.6deg] hover:shadow-[8px_8px_0_hsl(var(--foreground))] ${style.color}`}
    >
      {project.caseStudy && (
        <span className="sticker absolute -right-2 top-3.5 z-10 rotate-[8deg] bg-pop-lime">CASE STUDY →</span>
      )}
      <p className="font-mono text-[11px] uppercase tracking-[0.06em] opacity-75">{project.area}</p>
      <h3 className={`font-extrabold leading-[1.05] ${big ? "text-3xl lg:text-4xl" : "text-[1.4rem]"} ${project.caseStudy ? "pr-24" : ""}`}>
        {project.caseStudy ? (
          <Link to={`/work/${project.id}`} className={titleLink}>
            {project.title}
          </Link>
        ) : (
          <a href={primary.url} target="_blank" rel="noopener noreferrer" className={titleLink}>
            {project.title}
          </a>
        )}
      </h3>
      <p className={`text-sm leading-relaxed opacity-85 ${big ? "lg:text-base" : ""}`}>{project.description}</p>

      {project.image && (big || wide) && (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="mt-1 min-h-0 flex-1 rounded-xl border-[2.5px] border-[hsl(var(--on-pop))] object-cover"
        />
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.technologies.map((t) => (
          <span key={t} className={`chip ${style.color ? "border-[hsl(var(--on-pop))] bg-paper text-onpop" : ""}`}>
            {t}
          </span>
        ))}
      </div>

      {(project.caseStudy || secondary.length > 0) && (
        <p className="relative z-10 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 underline decoration-2 underline-offset-4"
            >
              {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </p>
      )}
    </article>
  );
}
