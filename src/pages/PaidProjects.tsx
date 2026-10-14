import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

const services = [
  {
    title: "AI & ML development",
    description:
      "RAG systems, agents, classifiers and computer-vision pipelines, delivered as a documented API you can run yourself.",
    color: "bg-pop-lime",
  },
  {
    title: "Web applications",
    description: "React front ends wired to your models or data, built to be maintained after I hand them over.",
    color: "bg-pop-pink",
  },
  {
    title: "Data analysis",
    description: "Cleaning, exploring and modelling your data, with a write-up of what it does and doesn't show.",
    color: "bg-pop-yellow",
  },
  {
    title: "Consultation",
    description: "A call to scope an idea, pick a stack, or sanity-check whether ML is the right tool at all.",
    color: "bg-pop-sky",
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
      <Navbar />

      <main className="container-wide">
        <header className="pb-16 pt-10 md:pb-24 md:pt-16">
          <span className="sticker -rotate-3 bg-pop-lime">Freelance</span>
          <h1 className="mt-6 max-w-[16ch] text-5xl font-extrabold leading-[1.02] md:text-[5rem]">
            Have a project that needs an <span className="hl">AI engineer?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I take on paid projects in AI, web and data. Tell me what you're trying to build and I'll tell you
            honestly whether I'm a good fit.
          </p>
          <a href={mailto} className="btn-pop btn-pop-orange mt-9">
            Email me about a project
          </a>
        </header>

        <section className="pb-16">
          <h2 className="section-title mb-10">What I do</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 0.06}>
                <div className={`pop-box h-full p-6 ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <span className={`sticker mb-3 ${service.color}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-extrabold">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <h2 className="section-title mb-10">How it works</h2>
          <dl className="pop-box grid gap-x-8 gap-y-5 bg-pop-yellow p-7 text-onpop sm:grid-cols-2">
            {terms.map((term) => (
              <div key={term.label}>
                <dt className="font-mono text-xs uppercase opacity-70">{term.label}</dt>
                <dd className="mt-1 text-lg font-bold">{term.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <Footer />
    </div>
  );
}
