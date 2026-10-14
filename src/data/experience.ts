export interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export const experiences: Job[] = [
  {
    role: "AI Associate Software Engineer",
    company: "TEO",
    location: "Islamabad",
    duration: "Jun 2026 – Now",
    highlights: [
      "Building RAG workflows with a focus on retrieval and answer quality",
      "Designing LangChain pipelines meant to hold up in production",
      "Developing agentic systems with tool use, planning and orchestration",
      "Working with a Danish product team on applied AI delivery",
    ],
  },
  {
    role: "AI Intern",
    company: "Systems Limited",
    location: "Islamabad",
    duration: "Feb – May 2026",
    highlights: [
      "Built end-to-end NLP pipelines, from raw data to LLM integration",
      "Migrated an Azure Bot Framework bot to the Azure Agent SDK",
      "Ran NLP training sessions and workshops for the team",
      "Documented how NLP methods evolved and which practices to keep",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Nueroticure",
    location: "Hybrid",
    duration: "Jun – Aug 2025",
    highlights: [
      "Developed AI features for internal applications in Python",
      "Connected backend models to a React front end for real-time use",
      "Built automation pipelines with n8n and cloud services",
    ],
  },
  {
    role: "Tech Intern",
    company: "Forhopp",
    location: "Remote",
    duration: "Jun – Aug 2025",
    highlights: [
      "Built React applications and internal dashboards",
      "Integrated backend APIs and databases",
      "Set up workflow automation with n8n",
    ],
  },
  {
    role: "Final Year Project Lead, NS-VQA",
    company: "PMAS Arid Agriculture University",
    location: "Rawalpindi",
    duration: "Final year",
    highlights: [
      "Led the team building a neuro-symbolic visual question answering system",
      "Combined neural perception models with symbolic reasoning",
      "Owned the architecture and the team's coding standards",
    ],
  },
];

export const education = {
  degree: "BS Computer Science, AI specialisation",
  institution: "PMAS Arid Agriculture University",
  years: "2022 – 2026",
  gpa: "3.89",
  achievements: ["Best Final Year Project Award", "Runner-up, university coding competition", "Scholarship recipient"],
};

export const certifications = [
  { name: "Designing Agentic Systems with LangChain", file: "/Certifcates/Designing Agentic Systems with LangChain.pdf" },
  { name: "Fine-Tuning with Llama 3", file: "/Certifcates/Fine-Tuning with Llama 3.pdf" },
  { name: "Understanding Cloud Computing", file: "/Certifcates/Understanding Cloud Computing.pdf" },
  { name: "Introduction to Python, DataCamp", file: "/Certifcates/IntroductionToPythonDataCamp.pdf" },
];
