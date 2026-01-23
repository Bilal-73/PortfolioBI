import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Terminal,
  Cpu,
  BarChart3,
  Workflow,
  Globe,
  Layers,
  Zap
} from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ComponentType<{ className?: string }>;
  category: "programming" | "ai-ml" | "tools";
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, icon: Code2, category: "programming" },
  { name: "React JS", level: 90, icon: Code2, category: "programming" },
  { name: "JavaScript", level: 88, icon: Code2, category: "programming" },
  { name: "SQL", level: 85, icon: Database, category: "programming" },
  { name: "React Native", level: 85, icon: Database, category: "programming" },
  
  // AI/ML
  { name: "Machine Learning", level: 92, icon: Brain, category: "ai-ml" },
  { name: "Deep Learning", level: 88, icon: Cpu, category: "ai-ml" },
  { name: "NLP", level: 85, icon: Brain, category: "ai-ml" },
  { name: "Computer Vision", level: 82, icon: Layers, category: "ai-ml" },
  { name: "Data Science", level: 90, icon: BarChart3, category: "ai-ml" },
  
  // Tools & Technologies
  { name: "PyTorch", level: 90, icon: Zap, category: "tools" },
  { name: "TensorFlow", level: 85, icon: Layers, category: "tools" },
  { name: "React", level: 88, icon: Globe, category: "tools" },
  { name: "Docker", level: 80, icon: Cloud, category: "tools" },
  { name: "Git", level: 92, icon: GitBranch, category: "tools" },
  { name: "n8n", level: 85, icon: Workflow, category: "tools" },
  { name: "AWS", level: 78, icon: Cloud, category: "tools" },
  { name: "Linux", level: 85, icon: Terminal, category: "tools" },
];

export const skillCategories = {
  programming: "Programming Languages",
  "ai-ml": "AI & Machine Learning",
  tools: "Tools & Technologies",
};
