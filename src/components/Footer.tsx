import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t-[2.5px] border-foreground">
      <div className="container-wide flex flex-col gap-2 py-6 font-mono text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>made with ☕ + too many stickers</p>
        <a href="/#top" className="link self-start sm:self-auto">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
