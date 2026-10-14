import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { DarkModeToggle } from "./DarkModeToggle";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Work", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

interface NavbarProps {
  /** On the home page links scroll in place; elsewhere they go back to "/#section". */
  home?: boolean;
  /** Highlights a link on pages that aren't the one-pager (e.g. "projects" on a case study). */
  active?: string;
}

export function Navbar({ home = false, active: forcedActive }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | undefined>(forcedActive);
  const reduceMotion = useReducedMotion();
  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...navLinks.map((l) => l.id), "skills", "education"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const activeLink = active === "skills" || active === "education" ? "experience" : active;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/85 py-3.5 backdrop-blur-md">
        <div className="container-wide flex items-center gap-4">
          {home ? (
            <a href="#top" data-cursor="HI!" aria-label="Back to top" className="logo">
              BI
            </a>
          ) : (
            <Link to="/" data-cursor="HOME" aria-label="Home" className="logo">
              BI
            </Link>
          )}

          <div className="ml-auto hidden gap-1 rounded-full border-[2.5px] border-foreground bg-card p-1.5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={href(link.id)}
                aria-current={activeLink === link.id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeLink === link.id ? "bg-foreground text-background" : "hover:bg-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border-[2.5px] border-foreground bg-card shadow-pop-sm md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <i className="block h-[2.5px] w-5 rounded bg-foreground" />
            <i className="block h-[2.5px] w-5 rounded bg-foreground" />
            <i className="block h-[2.5px] w-5 rounded bg-foreground" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 92% 4%)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "circle(150% at 92% 4%)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-pop-blue px-5 pb-8 pt-3.5 text-paper md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="logo">BI</span>
              <div className="flex gap-2.5">
                <DarkModeToggle />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border-[2.5px] border-[hsl(var(--on-pop))] bg-paper text-xl text-onpop"
                  aria-label="Close menu"
                  autoFocus
                >
                  ✕
                </button>
              </div>
            </div>
            <ol className="mt-8">
              {navLinks.map((link, i) => (
                <li key={link.id} className="border-b-[2.5px] border-[hsl(var(--on-pop))]">
                  <a
                    href={href(link.id)}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between py-3.5 font-display text-[2.5rem] font-extrabold tracking-[-0.02em]"
                  >
                    {link.name}
                    <small className="rounded-md bg-pop-lime px-2 py-0.5 font-mono text-[13px] font-semibold text-onpop">
                      {String(i + 1).padStart(2, "0")}
                    </small>
                  </a>
                </li>
              ))}
            </ol>
            {home && (
              <p className="mt-6 font-hand text-2xl">psst… the terminal up top answers questions</p>
            )}
            <div className="mt-auto flex flex-wrap gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="sticker bg-pop-lime">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="sticker bg-pop-yellow">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`} className="sticker bg-pop-pink">
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
