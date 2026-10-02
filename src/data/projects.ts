export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  area: string;
  description: string;
  /** First link is the primary one the title points to. */
  links: ProjectLink[];
  technologies: string[];
  featured?: boolean;
}

const gh = (repo: string) => `https://github.com/Bilal-73/${repo}`;

export const projects: Project[] = [
  {
    id: "ns-vqa",
    title: "Neuro-Symbolic Visual Question Answering",
    area: "Computer vision · Final-year project",
    description:
      "A voice-driven assistant for blind and visually impaired users. The phone captures a frame, the user asks a question out loud, and a hybrid engine answers from a scene graph built over YOLO detections, falling back across grammar, pattern and ML-based reasoning. A temporal mode watches a fixed camera and reports who comes and goes.",
    links: [
      { label: "Backend", url: gh("NueroSymbolicVisualQuestionAnwering-Backend") },
      { label: "Mobile app", url: gh("NueroSymbolicVisualQuestionAnwering-FrontEnd") },
    ],
    technologies: ["Flask", "YOLO", "Whisper", "Knowledge graphs", "React Native", "SQL Server"],
    featured: true,
  },
  {
    id: "medical-rag",
    title: "Medical RAG",
    area: "Multimodal RAG",
    description:
      "Question answering over ten research papers on metformin and glycaemic control, where a wrong answer is costly. Text, tables and figure captions are all retrievable through hybrid dense and sparse search with reranking, every answer carries citations, and retrieval and generation are evaluated separately with a golden QA set and RAGAS.",
    links: [{ label: "Code", url: gh("DiabetesMedicalRAG") }],
    technologies: ["Docling", "Qdrant", "Azure OpenAI", "RAGAS", "Streamlit"],
    featured: true,
  },
  {
    id: "doculens",
    title: "Doculens",
    area: "Multimodal RAG",
    description:
      "Chat with PDFs, including their tables and figures, not just the text. Every answer comes with retrieval logs, so you can see why a chunk was or wasn't picked.",
    links: [{ label: "Code", url: gh("doculens") }],
    technologies: ["Docling", "CLIP", "Qdrant", "Redis", "Azure OpenAI", "FastAPI"],
    featured: true,
  },
  {
    id: "gatekeeper-ai",
    title: "Gate Keeper AI",
    area: "Computer vision",
    description:
      "A contactless identity-verification kiosk. It matches a face against enrolled users, rejects spoofing attempts with a liveness check, and asks for a hand gesture to confirm.",
    links: [{ label: "Code", url: gh("gatekeeper-ai") }],
    technologies: ["FastAPI", "InsightFace", "Qdrant", "MediaPipe"],
    featured: true,
  },
  {
    id: "phishing-spam",
    title: "Phishing & Spam Detection",
    area: "NLP",
    description:
      "Classifies emails as phishing, spam or legitimate. SMOTE rebalances the skewed classes before training, and predictions are served in real time through a FastAPI endpoint.",
    links: [{ label: "Code", url: gh("Phishing-and-Spam-Detection") }],
    technologies: ["FastAPI", "scikit-learn", "TF-IDF", "SMOTE", "Random Forest"],
    featured: true,
  },
  {
    id: "resume-classification",
    title: "Resume Classification & Extraction",
    area: "NLP",
    description: "An API that pulls contact details and skills out of a résumé and predicts its job category.",
    links: [{ label: "Code", url: gh("Resume-Classification-and-Details-Extraction") }],
    technologies: ["FastAPI", "TF-IDF", "Random Forest"],
  },
  {
    id: "langchain-agents",
    title: "LangChain Agents",
    area: "Agents",
    description: "A tool-using LangChain assistant with calculator and search tools and separate prompt modules.",
    links: [{ label: "Code", url: gh("langchain-agents") }],
    technologies: ["LangChain", "OpenAI"],
  },
  {
    id: "yolov8-video",
    title: "YOLOv8 Video Object Detection",
    area: "Computer vision",
    description: "Upload a video and get it back with detected objects labelled, frame by frame.",
    links: [{ label: "Code", url: gh("YOLOv8-Video-Object-Detection") }],
    technologies: ["Flask", "YOLOv8"],
  },
  {
    id: "streamlit-fastapi-course",
    title: "Streamlit & FastAPI Workshop",
    area: "Teaching",
    description: "Live-coding demos for a Streamlit and FastAPI session, ending with a Streamlit client calling a FastAPI RAG-style backend.",
    links: [{ label: "Code", url: gh("StreamlitBasicCourse") }],
    technologies: ["Streamlit", "FastAPI"],
  },
  {
    id: "neural-mt",
    title: "Neural Machine Translation",
    area: "NLP",
    description: "English, German and French translation with pretrained MarianMT models from Hugging Face.",
    links: [
      {
        label: "Code",
        url: gh("MultiLang-Translator-Neural-Machine-Translation-with-HuggingFace-Transformers"),
      },
    ],
    technologies: ["Transformers", "PyTorch"],
  },
  {
    id: "chatbot-faqs",
    title: "ChatBotFAQs",
    area: "NLP",
    description: "An FAQ bot that answers with the closest matching question by cosine similarity.",
    links: [{ label: "Code", url: gh("ChatBotFAQs") }],
    technologies: ["Flask", "TF-IDF", "scikit-learn"],
  },
  {
    id: "multilang-translator",
    title: "Multi-language Translator",
    area: "Web",
    description: "A Flask app translating between English, French, German, Spanish, Italian and Hindi.",
    links: [{ label: "Code", url: gh("MultiLang-Translator-using-DeepTranslator") }],
    technologies: ["Flask", "deep-translator"],
  },
];
