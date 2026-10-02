export interface Project {
  id: string;
  title: string;
  area: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "gatekeeper-ai",
    title: "Gate Keeper AI",
    area: "Computer vision",
    description:
      "A contactless identity-verification kiosk. It matches a face against enrolled users, rejects spoofing attempts with a liveness check, and asks for a hand gesture to confirm.",
    githubUrl: "https://github.com/Bilal-73/gatekeeper-ai",
    technologies: ["FastAPI", "InsightFace", "Qdrant", "MediaPipe"],
    featured: true,
  },
  {
    id: "doculens",
    title: "Doculens",
    area: "Multimodal RAG",
    description:
      "Chat with PDFs, including their tables and figures, not just the text. Every answer comes with retrieval logs, so you can see why a chunk was or wasn't picked.",
    githubUrl: "https://github.com/Bilal-73/doculens",
    technologies: ["Docling", "CLIP", "Qdrant", "Redis", "Azure OpenAI", "FastAPI"],
    featured: true,
  },
  {
    id: "resume-classification",
    title: "Resume Classification & Extraction",
    area: "NLP",
    description:
      "An API that reads a résumé, pulls out contact details and skills, and predicts the job category. Built to sit behind a résumé-matching front end.",
    githubUrl: "https://github.com/Bilal-73/Resume-Classification-and-Details-Extraction",
    technologies: ["FastAPI", "TF-IDF", "Random Forest"],
    featured: true,
  },
  {
    id: "phishing-spam",
    title: "Phishing & Spam Detection",
    area: "NLP",
    description:
      "Classifies emails as phishing, spam or legitimate, served through a FastAPI endpoint.",
    githubUrl: "https://github.com/Bilal-73/Phishing-and-Spam-Detection",
    technologies: ["FastAPI", "scikit-learn", "TF-IDF", "Random Forest"],
    featured: true,
  },
  {
    id: "yolov8-video",
    title: "YOLOv8 Video Object Detection",
    area: "Computer vision",
    description: "Upload a video and get it back with detected objects labelled, frame by frame.",
    githubUrl: "https://github.com/Bilal-73/YOLOv8-Video-Object-Detection",
    technologies: ["Flask", "YOLOv8"],
  },
  {
    id: "chatbot-faqs",
    title: "ChatBotFAQs",
    area: "NLP",
    description: "An FAQ bot that answers with the closest matching question by cosine similarity.",
    githubUrl: "https://github.com/Bilal-73/ChatBotFAQs",
    technologies: ["Flask", "TF-IDF", "scikit-learn"],
  },
  {
    id: "polyglot-translator",
    title: "Polyglot Translator",
    area: "Web",
    description: "A small multi-language text translator.",
    githubUrl: "https://github.com/Bilal-73/Polyglot-Translator",
    technologies: ["Flask", "Google Translate API"],
  },
];
