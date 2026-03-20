export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  notes?: string;
}

export const experience: Experience[] = [
  {
    company: "Apex Financial Technologies",
    role: "Staff Software Engineer",
    period: "2022 – Present",
    description: "Leading security infrastructure and AI platform engineering for a top-10 US bank.",
    highlights: [
      "Architected enterprise IdP serving 50K+ users with FIDO2 passwordless auth",
      "Built zero-trust security mesh across multi-cloud infrastructure",
      "Led RAG-powered document intelligence platform processing 100K+ docs/day",
    ],
  },
  {
    company: "RoboLogix Inc.",
    role: "Principal Perception Engineer",
    period: "2019 – 2022",
    description: "Led perception and sensor fusion for autonomous mobile robots in warehouse operations.",
    highlights: [
      "Built multi-modal perception stack deployed on 200+ robots",
      "Achieved 99.7% obstacle detection accuracy with <100ms latency",
      "Managed team of 8 engineers across perception and planning",
    ],
  },
  {
    company: "CloudScale Systems",
    role: "Senior Software Engineer",
    period: "2017 – 2019",
    description: "Cloud infrastructure and security engineering for enterprise SaaS platform.",
    highlights: [
      "Designed multi-tenant architecture serving 500+ enterprise customers",
      "Implemented zero-downtime deployment pipeline with blue-green strategy",
      "Reduced infrastructure costs by 40% through auto-scaling optimization",
    ],
  },
  {
    company: "GenomicsAI Research",
    role: "Software Engineer",
    period: "2014 – 2017",
    description: "Built data infrastructure for pharmaceutical R&D and genomic analysis.",
    highlights: [
      "Designed HIPAA-compliant data lake for petabyte-scale genomic data",
      "Built federated query engine across 15+ heterogeneous data sources",
      "Automated clinical trial data pipeline reducing processing time by 70%",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Stanford University",
    degree: "M.S. Computer Science (Systems & Security)",
    period: "2012 – 2014",
    notes: "Focus: Distributed systems, applied cryptography",
  },
  {
    institution: "UC Berkeley",
    degree: "B.S. Electrical Engineering & Computer Science",
    period: "2008 – 2012",
    notes: "Magna Cum Laude",
  },
];

export const certifications = [
  "AWS Solutions Architect Professional",
  "Certified Kubernetes Administrator (CKA)",
  "CISSP",
  "Google Cloud Professional Security Engineer",
];
