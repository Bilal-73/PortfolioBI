import { useEffect, useRef, useState } from "react";

/**
 * A dot that follows the pointer and grows into a labelled bubble over any element
 * with `data-cursor="LABEL"`. Only mounts on precise pointers without reduced motion,
 * so touch devices and keyboard users keep the system cursor.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setVisible(true);
      if (ref.current) ref.current.style.translate = `${e.clientX}px ${e.clientY}px`;
      const target = e.target instanceof Element ? e.target.closest<HTMLElement>("[data-cursor]") : null;
      setLabel(target?.dataset.cursor ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[9999] -ml-[37px] -mt-[37px] grid h-[74px] w-[74px] place-items-center rounded-full border-2 border-[hsl(var(--on-pop))] text-[11px] font-bold text-onpop transition-[transform,background-color,opacity] duration-200 ${
        label ? "scale-100 bg-pop-lime" : "scale-[0.25] bg-pop-orange"
      } ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {label}
    </div>
  );
}
