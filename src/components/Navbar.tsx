import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="text-[15px] font-medium tracking-tight">
          Bilal Imran
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <DarkModeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="container-narrow pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-t border-border py-3 text-[15px]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
