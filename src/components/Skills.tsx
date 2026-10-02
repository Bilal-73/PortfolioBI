import { skillGroups } from "@/data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Toolkit">
      <dl className="divide-y divide-border">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-8"
          >
            <dt className="eyebrow leading-6">{group.label}</dt>
            <dd className="text-[15px] leading-6">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
