import { skillGroups } from "@/data/skills";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const colors = ["bg-pop-lime", "bg-pop-orange", "bg-pop-pink", "bg-pop-yellow", "bg-pop-sky"];
// Fixed, slightly uneven tilts so the stickers look hand-placed but don't jump between renders.
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "rotate-0", "-rotate-2", "rotate-1"];

export function Skills() {
  let n = 0;

  return (
    <Section id="skills" index="04" title="Toolbox" note="hover a sticker ✌">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={(gi % 3) * 0.06}>
            <div className={`pop-box relative h-full p-5 pt-6 ${gi % 2 ? "rotate-1" : "-rotate-1"}`}>
              <span aria-hidden className="absolute -top-3 left-1/2 h-[22px] w-[22px] -translate-x-1/2 rounded-full border-[2.5px] border-foreground bg-pop-orange" />
              <h3 className="mb-4 text-xl font-extrabold">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const k = n++;
                  return (
                    <li key={item} className={tilts[(k * 3) % tilts.length]}>
                      <span className={`sticker inline-block hover:animate-wiggle ${colors[k % colors.length]}`}>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
