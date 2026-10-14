/**
 * Long-form write-ups for projects flagged `caseStudy` in projects.ts.
 * Only state what the project actually does; no invented metrics. When numbers
 * arrive, add them to `results`.
 */
export interface CaseStudy {
  id: string;
  headline: string;
  role: string;
  timeline: string;
  stack: string;
  badges: string[];
  problem: string;
  approach: string;
  /** Pipeline stages, drawn left to right as a flow. */
  flow: { label: string; detail?: string }[];
  decisions: { title: string; body: string }[];
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ns-vqa",
    headline: "Helping blind users ask questions about what their camera sees.",
    role: "Team lead & architect",
    timeline: "Final year project",
    stack: "Flask · YOLO · Whisper · React Native",
    badges: ["Best FYP Award", "Computer vision"],
    problem:
      "Blind and visually impaired users want to ask short, specific questions like “is there a chair in front of me?” and hear a fast answer they can trust. End-to-end VQA models tend to guess. This system reasons from what it actually detected, so it can say “I don't see one” instead of inventing an answer.",
    approach:
      "The phone captures a frame and the user asks a question out loud. Whisper turns speech into text, YOLO detects objects, and a scene graph records the objects and their spatial relations. A hybrid reasoner answers from that graph and the reply is spoken back.",
    flow: [
      { label: "Camera frame + voice" },
      { label: "Whisper + YOLO" },
      { label: "Scene graph" },
      { label: "Reasoner", detail: "grammar → pattern → ML" },
      { label: "Spoken answer" },
    ],
    decisions: [
      {
        title: "Symbolic first",
        body: "A grammar parser handles common question shapes deterministically. Pattern matching and an ML model are fallbacks, not the default.",
      },
      {
        title: "Scene graph",
        body: "Objects and relations go into a graph, so “left of”, “how many” and “is there” questions are answered from structure.",
      },
      {
        title: "Temporal mode",
        body: "With a fixed camera, the system watches the scene over time and reports who comes and goes.",
      },
    ],
    results: [
      "Won the Best Final Year Project Award at PMAS Arid Agriculture University.",
      "Shipped as a Flask backend and a React Native mobile app, both on GitHub.",
    ],
  },
  {
    id: "medical-rag",
    headline: "Cited answers over medical research, where a wrong answer is costly.",
    role: "Personal project",
    timeline: "Code on GitHub",
    stack: "Docling · Qdrant · Azure OpenAI · RAGAS",
    badges: ["Multimodal RAG"],
    problem:
      "Ten research papers on metformin and glycaemic control. Much of the evidence lives in tables and figures, not running text, and a plausible-sounding but wrong answer is worse than no answer.",
    approach:
      "Docling parses each paper into text, tables and figure captions, and all three are indexed. Retrieval combines dense and sparse search in Qdrant, then reranks. Azure OpenAI writes the answer, and every claim carries a citation back to its source chunk.",
    flow: [
      { label: "PDF papers" },
      { label: "Docling parse", detail: "text · tables · captions" },
      { label: "Hybrid search", detail: "dense + sparse" },
      { label: "Rerank" },
      { label: "Cited answer" },
    ],
    decisions: [
      {
        title: "Tables are first-class",
        body: "Tables and figure captions are chunked and embedded alongside prose, so numeric results can be retrieved.",
      },
      {
        title: "Hybrid retrieval",
        body: "Sparse search catches exact drug and measure names; dense search catches paraphrases. A reranker picks the final context.",
      },
      {
        title: "Evaluate in two halves",
        body: "Retrieval and generation are scored separately against a golden QA set with RAGAS, so a failure can be traced to the right stage.",
      },
    ],
    results: [
      "Every answer cites the chunks it used.",
      "Evaluated with a golden QA set and RAGAS, scoring retrieval and generation separately.",
    ],
  },
];

export const getCaseStudy = (id: string) => caseStudies.find((c) => c.id === id);
