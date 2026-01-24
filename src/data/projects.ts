// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   categories: string[];
//   image: string;
//   githubUrl: string;
//   liveUrl?: string;
//   technologies: string[];
//   featured?: boolean;
// }

// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "Neural Vision AI",
//     description: "Deep learning-based computer vision system for real-time object detection and tracking with 98% accuracy.",
//     categories: ["AI", "Computer Vision", "Python"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     liveUrl: "https://demo.example.com",
//     technologies: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "AI Chatbot Platform",
//     description: "Enterprise-grade conversational AI platform with multi-language support and custom training capabilities.",
//     categories: ["AI", "NLP", "React"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     liveUrl: "https://demo.example.com",
//     technologies: ["OpenAI", "LangChain", "React", "Node.js"],
//     featured: true,
//   },
//   {
//     id: "3",
//     title: "ML Pipeline Orchestrator",
//     description: "Automated machine learning pipeline for data preprocessing, model training, and deployment with CI/CD integration.",
//     categories: ["AI", "MLOps", "Python"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     technologies: ["Kubeflow", "MLflow", "Airflow", "Kubernetes"],
//     featured: true,
//   },
//   {
//     id: "4",
//     title: "Sentiment Analysis Dashboard",
//     description: "Real-time social media sentiment analysis with interactive visualizations and trend predictions.",
//     categories: ["AI", "NLP", "Data Science"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     liveUrl: "https://demo.example.com",
//     technologies: ["BERT", "Transformers", "React", "D3.js"],
//   },
//   {
//     id: "5",
//     title: "Workflow Automation Hub",
//     description: "No-code automation platform connecting 100+ apps with AI-powered workflow suggestions.",
//     categories: ["n8n", "Automation", "React"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     technologies: ["n8n", "React", "PostgreSQL", "Redis"],
//   },
//   {
//     id: "6",
//     title: "Predictive Analytics Engine",
//     description: "Time-series forecasting system for business metrics with automated model selection.",
//     categories: ["AI", "Data Science", "Python"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     technologies: ["Prophet", "XGBoost", "Pandas", "Plotly"],
//   },
//   {
//     id: "7",
//     title: "Smart Document Parser",
//     description: "AI-powered document extraction system using OCR and NLP for automated data entry.",
//     categories: ["AI", "NLP", "Computer Vision"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     liveUrl: "https://demo.example.com",
//     technologies: ["Tesseract", "spaCy", "FastAPI", "React"],
//   },
//   {
//     id: "8",
//     title: "Portfolio Dashboard",
//     description: "Modern React dashboard for tracking investments with real-time market data integration.",
//     categories: ["React", "TypeScript", "Finance"],
//     image: "/placeholder.svg",
//     githubUrl: "https://github.com/bilalimran",
//     technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
//   },
// ];

// export const allCategories = [
//   "AI",
//   "NLP",
//   "Computer Vision",
//   "Python",
//   "React",
//   "TypeScript",
//   "Data Science",
//   "MLOps",
//   "n8n",
//   "Automation",
//   "Finance",
// ];


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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
    title: "YOLOv8 Video Object Detection",
    description:
      "A Flask-based web application that performs real-time object detection on uploaded videos using YOLOv8.",
    categories: ["AI", "Yolo", "Object-Detection", "Python", "Flask"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/Bilal-73/YOLOv8-Video-Object-Detection",
    liveUrl: "",
    technologies: ["Python", "Flask", "YOLO"],
  }
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
