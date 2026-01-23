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
    title: "Smart Inventory & Order Management",
    description:
      "Automated workflow for small/medium businesses to manage inventory, prioritize orders, and send multi-channel notifications.",
    categories: ["n8n", "React", "Python", "Automation"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/smart-inventory-n8n",
    liveUrl: "https://demo.example.com",
    technologies: ["n8n", "React", "PostgreSQL", "Slack API", "Gmail API"],
    featured: true,
  },
  {
    id: "2",
    title: "Neural Vision AI",
    description:
      "Deep learning-based computer vision system for real-time object detection and tracking with 98% accuracy.",
    categories: ["AI", "Computer Vision", "Python"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/neural-vision-ai",
    liveUrl: "https://demo.example.com",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
    featured: true,
  },
  {
    id: "3",
    title: "AI Chatbot Platform",
    description:
      "Enterprise-grade conversational AI platform with multi-language support and custom training capabilities.",
    categories: ["AI", "NLP", "React"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/ai-chatbot-platform",
    liveUrl: "https://demo.example.com",
    technologies: ["OpenAI", "LangChain", "React", "Node.js"],
    featured: true,
  },
  {
    id: "4",
    title: "Workflow Automation Hub",
    description:
      "No-code automation platform connecting multiple apps with AI-powered workflow suggestions.",
    categories: ["n8n", "Automation", "React"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/workflow-automation-hub",
    technologies: ["n8n", "React", "PostgreSQL", "Redis"],
  },
  {
    id: "5",
    title: "Predictive Analytics Engine",
    description:
      "Time-series forecasting system for business metrics with automated model selection.",
    categories: ["AI", "Data Science", "Python"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/predictive-analytics-engine",
    technologies: ["Prophet", "XGBoost", "Pandas", "Plotly"],
  },
  {
    id: "6",
    title: "Smart Document Parser",
    description:
      "AI-powered document extraction system using OCR and NLP for automated data entry.",
    categories: ["AI", "NLP", "Computer Vision"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/smart-document-parser",
    liveUrl: "https://demo.example.com",
    technologies: ["Tesseract", "spaCy", "FastAPI", "React"],
  },
  {
    id: "7",
    title: "Portfolio Dashboard",
    description:
      "Modern React dashboard for tracking investments and projects with real-time market data integration.",
    categories: ["React", "TypeScript", "Finance"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/bilalimran/portfolio-dashboard",
    technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
  },
];

export const allCategories = [
  "AI",
  "NLP",
  "Computer Vision",
  "Python",
  "React",
  "TypeScript",
  "Data Science",
  "MLOps",
  "n8n",
  "Automation",
  "Finance",
];
