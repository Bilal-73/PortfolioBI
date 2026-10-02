import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";

const socialLinks = [
  { name: "GitHub", url: profile.github },
  { name: "LinkedIn", url: profile.linkedin },
  { name: "Instagram", url: profile.instagram },
  { name: "Facebook", url: profile.facebook },
];

export function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <p className="max-w-lg text-[17px] leading-relaxed text-muted-foreground">
        Hiring for an AI role, or have a project that needs retrieval, agents or vision?
        Email is the quickest way to reach me.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block break-all font-serif text-3xl underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-[2.75rem] sm:leading-tight"
      >
        {profile.email}
      </a>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-0.5 text-muted-foreground"
            >
              {social.name} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
