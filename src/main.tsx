import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/caveat/600.css";
import "@fontsource/jetbrains-mono/400.css";

createRoot(document.getElementById("root")!).render(<App />);
