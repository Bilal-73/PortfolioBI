import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { profile } from "@/data/profile";

const services = [
  {
    title: "AI & ML development",
    description:
      "RAG systems, agents, classifiers and computer-vision pipelines, delivered as a documented API you can run yourself.",
  },
  {
    title: "Web applications",
    description: "React front ends wired to your models or data, built to be maintained after I hand them over.",
  },
  {
    title: "Data analysis",
    description: "Cleaning, exploring and modelling your data, with a write-up of what it does and doesn't show.",
  },
  {
    title: "Consultation",
    description: "A call to scope an idea, pick a stack, or sanity-check whether ML is the right tool at all.",
  },
];

const terms = [
  { label: "First call", value: "Free" },
  { label: "Planning", value: "Fixed quote after scoping" },
  { label: "Development", value: "Priced per project" },
  { label: "Support", value: "Available after delivery" },
];

export default function PaidProjects() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`;

  return (
    <div className="min-h-screen bg-background">
      <nav className="container-narrow flex h-16 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Bilal Imran
        </Link>
        <DarkModeToggle />
      </nav>

      <main className="container-narrow">
        <header className="pb-16 pt-16 md:pb-24 md:pt-24">
          <p className="eyebrow">Freelance</p>
          <h1 className="mt-4 max-w-[18ch] font-serif text-5xl leading-[1.04] md:text-[4.25rem]">
            Have a project that needs an AI engineer?
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            I take on paid projects in AI, web and data. Tell me what
            you're trying to build and I'll tell you honestly whether I'm a good fit.
          </p>
          <a
            href={mailto}
            className="mt-10 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Email me about a project
          </a>
        </header>

        <section className="grid gap-6 border-t border-border py-16 md:grid-cols-[180px_1fr] md:gap-10">
          <h2 className="font-serif text-3xl leading-none">What I do</h2>
          <dl className="divide-y divide-border">
            {services.map((service) => (
              <div key={service.title} className="grid gap-1 py-5 first:pt-0 sm:grid-cols-[200px_1fr] sm:gap-8">
                <dt className="font-medium">{service.title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted-foreground">{service.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-6 border-t border-border py-16 md:grid-cols-[180px_1fr] md:gap-10">
          <h2 className="font-serif text-3xl leading-none">How it works</h2>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {terms.map((term) => (
              <div key={term.label}>
                <dt className="eyebrow">{term.label}</dt>
                <dd className="mt-1 text-[15px]">{term.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="container-narrow">
        <p className="border-t border-border py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  );
}
