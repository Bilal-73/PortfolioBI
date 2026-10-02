import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Section } from "./Section";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Selected work">
      <ol className="divide-y divide-border">
        {featured.map((project, i) => {
          const [primary, ...secondary] = project.links;
          return (
            <li key={project.id} className="py-8 first:pt-0">
              {/* The title link stretches over the whole row; secondary links sit above it. */}
              <div className="group relative grid gap-3 sm:grid-cols-[48px_1fr] sm:gap-6">
                <span className="font-mono text-xs leading-8 text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[1.75rem] leading-tight transition-colors group-hover:text-accent">
                      <a
                        href={primary.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="eyebrow mt-1">{project.area}</p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    {project.technologies.join(" / ")}
                  </p>
                  {secondary.length > 0 && (
                    <p className="relative z-10 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link inline-flex items-center gap-0.5 text-muted-foreground"
                        >
                          {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-14">
        <p className="eyebrow">Smaller projects</p>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {other.map((project) => (
            <li key={project.id}>
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-medium transition-colors group-hover:text-accent sm:w-64 sm:shrink-0">
                  {project.title}
                </span>
                <span className="flex-1 text-sm text-muted-foreground">{project.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-6 inline-flex items-center gap-0.5 text-sm text-muted-foreground"
        >
          All repositories on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  );
}
