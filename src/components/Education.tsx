import { ArrowUpRight } from "lucide-react";
import { certifications, education } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  const [award, ...otherAchievements] = education.achievements;

  return (
    <Section id="education" index="05" title="Education" note="school stuff">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="pop-box relative h-full p-6 sm:p-7">
            <div
              aria-label={award}
              role="img"
              className="absolute -top-7 right-5 grid h-[84px] w-[84px] animate-spin-slow place-items-center rounded-full border-[3px] border-foreground bg-pop-orange text-center font-display text-[11px] font-extrabold leading-[1.05] text-onpop shadow-pop sm:h-[110px] sm:w-[110px] sm:text-sm"
            >
              BEST
              <br />
              FYP ★<br />
              AWARD
            </div>
            <p className="font-mono text-xs text-muted-foreground">{education.years}</p>
            <h3 className="mt-1.5 max-w-[70%] text-[1.6rem] font-extrabold leading-tight">{education.degree}</h3>
            <p className="mt-1.5 text-muted-foreground">{education.institution}</p>
            <p className="mt-4 font-display text-6xl font-extrabold tracking-[-0.04em]">
              {education.gpa}
              <span className="text-2xl text-muted-foreground"> / 4.0 GPA</span>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherAchievements.map((a) => (
                <li key={a} className="chip">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="pop-box h-full bg-pop-yellow p-6 text-onpop sm:p-7">
            <h3 className="mb-2 text-[1.4rem] font-extrabold">Certificates</h3>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.name} className="border-b-2 border-dashed border-[hsl(var(--on-pop))] last:border-0">
                  <a
                    href={encodeURI(cert.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="flex items-center justify-between gap-3 py-3 text-[15px] hover:underline"
                  >
                    {cert.name} <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
