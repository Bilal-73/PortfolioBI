import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="container-narrow pb-16 pt-28 md:pb-24 md:pt-40">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_240px] md:gap-16">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {profile.currentRole} at {profile.currentCompany} · {profile.location}
          </p>

          <h1 className="mt-6 max-w-[16ch] font-serif text-[2.75rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl md:text-[4.5rem]">
            I build retrieval systems, agents and{" "}
            <em className="text-accent">computer-vision</em> tools.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            I'm Bilal Imran, an AI engineer working with LangChain, RAG pipelines and
            FastAPI services, from the model through to the interface people use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-85"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
            <a href={`mailto:${profile.email}`} className="link text-muted-foreground">
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-0.5 text-muted-foreground"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-0.5 text-muted-foreground"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <Link
            to="/paid-projects"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Open to freelance projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <figure className="w-40 md:w-full">
          <img
            src="/ProfessionalPicture.webp"
            alt="Portrait of Bilal Imran"
            className="aspect-[4/5] w-full rounded-sm object-cover grayscale-[15%]"
          />
        </figure>
      </div>
    </section>
  );
}
