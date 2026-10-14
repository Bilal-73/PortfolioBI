import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const socialLinks = [
  { name: "GitHub", url: profile.github, className: "bg-pop-lime" },
  { name: "LinkedIn", url: profile.linkedin, className: "bg-pop-blue text-paper" },
  { name: "Instagram", url: profile.instagram, className: "bg-pop-yellow" },
  { name: "Facebook", url: profile.facebook, className: "bg-pop-pink" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 text-center md:py-32">
      <div className="container-wide">
        <Reveal>
          <span className="sticker -rotate-[4deg] bg-pop-pink">open to new opportunities ✦</span>
          <h2 className="mt-7 text-[3.25rem] font-extrabold leading-[0.95] sm:text-7xl md:text-[8rem]">
            Let's build
            <br />
            something <span className="hl">smart.</span>
          </h2>
        </Reveal>

        <div className="pop-box mx-auto mt-10 inline-flex max-w-full flex-col items-center gap-3 rounded-[18px] p-3.5 sm:flex-row sm:rounded-full sm:py-2.5 sm:pl-6 sm:pr-2.5">
          <a href={`mailto:${profile.email}`} className="break-all font-mono text-base font-semibold sm:text-xl">
            {profile.email}
          </a>
          <button
            onClick={copy}
            className="rounded-full border-[2.5px] border-foreground bg-pop-lime px-4 py-2.5 text-sm font-bold text-onpop"
            aria-live="polite"
          >
            {copied ? "Copied ✓" : "Copy ✂"}
          </button>
        </div>

        <ul className="mt-7 flex flex-wrap justify-center gap-3.5">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`sticker px-[18px] py-2.5 text-[15px] transition-transform hover:-rotate-6 hover:scale-110 ${s.className}`}
              >
                {s.name} ↗
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-9 font-hand text-2xl">
          or got a paid project?{" "}
          <Link to="/paid-projects" className="link">
            here's how I work →
          </Link>
        </p>
      </div>

      <svg aria-hidden className="absolute left-[6%] top-32 hidden lg:block" width="110" height="80" viewBox="0 0 110 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M5 60 C 30 5, 70 5, 100 40" />
        <path d="M88 28 l12 12 -16 4" />
      </svg>
      <svg aria-hidden className="absolute right-[8%] top-24 hidden lg:block" width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M35 5 L42 28 L65 35 L42 42 L35 65 L28 42 L5 35 L28 28 Z" />
      </svg>
    </section>
  );
}
