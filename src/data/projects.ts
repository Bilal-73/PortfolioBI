import { match } from "assert/strict";

export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [

    {
    id: "1",
    title: "Gate Keeper AI",
    description: "Contactless multi-factor identity verification kiosk — face match + anti-spoof liveness + gesture confirmation. FastAPI, InsightFace, Qdrant, MediaPipe.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/gatekeeper-ai",
    liveUrl: "",
    technologies: ["Python", "FastAPI", "InsightFace", "Qdrant", "MediaPipe"],
    categories: ["AI", "NLP", "Python", "FastAPI"],
    featured: true,
  },
   {
    id: "2",
    title: "Doculens",
    description: "Multimodal RAG chatbot for PDFs — text, tables, and figures. Docling + CLIP + Qdrant + Redis + Azure OpenAI, with full retrieval-debugging logs.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/doculens",
    liveUrl: "",
    technologies: ["Python", "FastAPI", "Docling", "CLIP", "Qdrant", "Redis", "Azure OpenAI"],
    categories: ["AI", "NLP", "Python", "FastAPI"],
    featured: true,
  },
  {
    id: "3",
    title: "Resume Classification & Details Extraction",
    description:
      "AI-powered API that classifies resumes and extracts contact info, skills, and predicts job categories using TF-IDF and Random Forest. Integrates with frontend for resume matching.",
    categories: ["AI", "NLP", "Python", "FastAPI"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/Resume-Classification-and-Details-Extraction",
    liveUrl: "",
    technologies: ["Python", "FastAPI", "TF-IDF", "Random Forest"],
    featured: true,
  },
  {
    id: "4",
    title: "Phishing & Spam Detection",
    description:
      "Machine learning system that detects phishing, spam, and ham emails using TF-IDF vectorization and Random Forest classifier, with FastAPI API for deployment.",
    categories: ["AI", "NLP", "Python", "FastAPI"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/Phishing-and-Spam-Detection",
    liveUrl: "",
    technologies: ["Python", "FastAPI", "scikit-learn", "TF-IDF", "Random Forest"],
    featured: true,
  },
    {
    id: "5",
    title: "ChatBotFAQs",
    description:
      "FAQ chatbot web application that answers user questions using TF-IDF vectorization and cosine similarity. Built with Flask and a clean HTML/CSS UI.",
    categories: ["AI", "NLP", "Python", "Flask"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/ChatBotFAQs",
    liveUrl: "",
    technologies: ["Python", "Flask", "TF-IDF", "scikit-learn"],
  },
  {
    id: "6",
    title: "Polyglot Translator",
    description:
      "Web-based text translator supporting multiple languages using Python, Flask, and Google Translator API.",
    categories: ["AI", "NLP", "Python", "Flask"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/Polyglot-Translator",
    liveUrl: "",
    technologies: ["Python", "Flask", "Google Translator API"],
  },

   {
    id: "7",
    title: "YOLOv8 Video Object Detection",
    description:
      "A Flask-based web application that performs real-time object detection on uploaded videos using YOLOv8.",
    categories: ["AI", "Yolo", "Object-Detection", "Python", "Flask"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/YOLOv8-Video-Object-Detection",
    liveUrl: "",
    technologies: ["Python", "Flask", "YOLO"],
  },  


   
];

export const allCategories = [
  "AI",
  "NLP",
  "Python",
  "Flask",
  "FastAPI",
  "Web Development",
  "Object-Detection",
  "Yolo"
];
