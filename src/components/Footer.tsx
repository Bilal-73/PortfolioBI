import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="container-narrow">
      <div className="flex flex-col gap-3 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top" className="link self-start sm:self-auto">
          Back to top
        </a>
      </div>
    </footer>
  );
}
