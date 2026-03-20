export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  industry: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "drm-data-analytics-platform",
    title: "Data Risk Management & Analytics Platform",
    description:
      "Enterprise-grade data risk management (DRM) and analytics platform integrating CI inventory systems with scalable ingestion pipelines and governance controls.",
    longDescription:
      "Led the end-to-end service delivery and architecture of an in-house CI Inventory Management platform enhanced with a data analytics layer. Designed and implemented a full DRM system including ingestion-curation pipelines, normalization middleware, indicator scoring models, and validation logic to support risk analytics use cases. Spearheaded a strategic DRM control initiative across multiple data domains to establish clear ownership, improve data usability, and ensure regulatory compliance. Modernized engineering practices by introducing Git-based workflows, CI/CD pipelines, and Data Version Control (DVC), significantly improving traceability and deployment reliability. Re-architected the ETL engine for regional Risk Analytics teams, achieving major gains in performance and data accuracy. Successfully led a large-scale data migration with controlled downtime, ensuring zero critical data loss and seamless transition.",
    tags: ["Data Engineering", "Risk Analytics", "Data Governance"],
    industry: "Financial Services",
    year: "2024",
    role: "Senior Software Engineer / Tech Lead",
    stack: ["Python", "SQL", "DVC", "Git", "Docker", "Oracle"],
    highlights: [
      "Processed daily data ingestion with <2hr end-to-end latency",
      "Improved ETL pipeline performance by 65% and reduced data inconsistencies by 80%",
      "Achieved 99.9% data integrity during large-scale migration with <1hr managed downtime",
      "Enabled regulatory compliance across 3+ data domains with standardized DRM controls",
      "Reduced deployment failures by 70% via CI/CD and version-controlled data pipelines",
      "Adopted across 5 regional teams supporting 100+ internal stakeholders",
    ],
  },
  // {
  //   slug: "vault-idp",
  //   title: "Vault IdP Platform",
  //   description: "Enterprise identity provider supporting SAML, OIDC, and FIDO2 across 50K+ users with zero-downtime migrations.",
  //   longDescription: "Designed and led development of a multi-tenant identity platform that unified authentication across legacy LDAP systems and modern cloud services. Implemented passwordless flows with FIDO2/WebAuthn, reducing credential-related incidents by 94%. The system handles 2M+ auth events daily with <50ms p99 latency.",
  //   tags: ["Security", "IdP", "Cloud"],
  //   industry: "Finance",
  //   year: "2023",
  //   role: "Tech Lead",
  //   stack: ["Go", "PostgreSQL", "Redis", "Kubernetes", "Terraform"],
  //   highlights: [
  //     "94% reduction in credential-related security incidents",
  //     "2M+ daily authentication events with <50ms p99",
  //     "Zero-downtime migration from legacy LDAP to modern IdP",
  //     "SOC 2 Type II and ISO 27001 certified",
  //   ],
  // },
  {
    slug: "perception-stack",
    title: "Multi-Modal Perception Stack",
    description:
      "Real-time sensor fusion system combining LiDAR, camera, and IMU data for autonomous mobile robots in warehouse environments.",
    longDescription:
      "Built a production-grade perception pipeline processing 30fps multi-sensor data streams for warehouse AMRs. Developed a novel late-fusion architecture combining 3D LiDAR point clouds with monocular depth estimation, achieving 99.7% obstacle detection accuracy. The system runs on edge compute with <100ms end-to-end latency.",
    tags: ["Robotics", "CV", "Sensor Fusion"],
    industry: "Manufacturing",
    year: "2019",
    role: "Software Engineer",
    stack: ["C++", "Python", "ROS2", "OpenCV", "CUDA", "TensorRT"],
    highlights: [
      "99.7% obstacle detection accuracy in dynamic environments",
      "30fps real-time processing on edge compute (Jetson AGX)",
      "Reduced collision incidents by 98% vs. previous system",
      "Deployed across 200+ robots in 12 warehouses",
    ],
  },
  // {
  //   slug: "cloud-security-mesh",
  //   title: "Cloud Security Mesh",
  //   description: "Zero-trust security fabric for multi-cloud environments, enforcing policy-as-code across AWS, GCP, and Azure workloads.",
  //   longDescription: "Architected a security mesh that provides unified policy enforcement, secret management, and audit logging across hybrid cloud infrastructure. Implemented mTLS service mesh with automatic certificate rotation, OPA-based policy engine, and real-time threat detection using behavioral analysis.",
  //   tags: ["Security", "Cloud", "Infrastructure"],
  //   industry: "Finance",
  //   year: "2023",
  //   role: "Staff Engineer",
  //   stack: ["Rust", "Go", "Kubernetes", "OPA", "Envoy", "Pulumi"],
  //   highlights: [
  //     "Unified security posture across 3 cloud providers",
  //     "Mean time to detect reduced from 4hrs to 12min",
  //     "Automated compliance reporting for SOC2, PCI-DSS",
  //     "Zero critical security incidents post-deployment",
  //   ],
  // },
  {
    slug: "ai-doc-intelligence",
    title: "AI Document Intelligence",
    description:
      "RAG-powered document analysis platform processing 100K+ financial documents daily with 99.2% extraction accuracy.",
    longDescription:
      "Built an end-to-end document intelligence platform combining OCR, layout analysis, and LLM-powered extraction for financial document processing. Implemented a hybrid RAG architecture with fine-tuned embedding models and structured output parsing, reducing manual review time by 85%.",
    tags: ["AI", "Cloud", "Finance"],
    industry: "Finance",
    year: "2026",
    role: "Tech Lead",
    stack: [
      "Python",
      "TypeScript",
      "PyTorch",
      "LangChain",
      "PostgreSQL",
      "GCP",
    ],
    highlights: [
      "99.2% extraction accuracy across 40+ document types",
      "85% reduction in manual review time",
      "Processing 100K+ documents with auto-scaling",
      "Custom fine-tuned models for domain-specific entities",
    ],
  },
  {
    slug: "factory-digital-twin",
    title: "Factory Digital Twin",
    description:
      "Real-time digital twin platform for manufacturing floors, integrating IoT sensors with predictive maintenance ML models.",
    longDescription:
      "Created a digital twin system that mirrors physical factory operations in real-time using IoT sensor networks. Integrated predictive maintenance models that analyze vibration, temperature, and acoustic signatures to predict equipment failures 72 hours in advance with 91% accuracy.",
    tags: ["IoT", "AI", "Manufacturing"],
    industry: "Manufacturing",
    year: "2026",
    role: "Senior Engineer",
    stack: ["Python", "C++", "Postgres", "Kafka", "Grafana"],
    highlights: [
      "91% accuracy in predicting failures 72hrs in advance",
      "37% reduction in unplanned downtime",
      // "$2.4M annual savings from predictive maintenance",
      "Real-time monitoring sensor endpoints",
    ],
  },
  {
    slug: "research-data-platform",
    title: "Research Data Platform",
    description:
      "Secure data lake and analysis platform for pharmaceutical R&D, handling petabyte-scale genomic and clinical trial data.",
    longDescription:
      "Designed a HIPAA-compliant data platform for pharmaceutical research, handling petabyte-scale genomic sequencing data and clinical trial results. Implemented fine-grained access controls, automated data lineage tracking, and federated query engine supporting SQL, Python, and Rust Workflow.",
    tags: ["Cloud", "Security", "Data"],
    industry: "R&D",
    year: "2022",
    role: "Senior Engineer",
    stack: ["Python", "Spark", "AWS", "Terraform", "PostgreSQL", "Airflow"],
    highlights: [
      "HIPAA and GxP compliant from day one",
      // "Petabyte-scale data processing with Spark",
      "70% reduction in data access request turnaround",
      "Federated queries across 15+ data sources",
    ],
  },
];

export const projectTags = [...new Set(projects.flatMap((p) => p.tags))];
export const projectIndustries = [...new Set(projects.map((p) => p.industry))];
