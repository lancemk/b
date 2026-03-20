export interface Research {
  slug: string;
  title: string;
  abstract: string;
  venue: string;
  year: string;
  authors: string[];
  tags: string[];
  links: { label: string; url: string }[];
}

export const research: Research[] = [
  {
    slug: "late-fusion-lidar-camera",
    title: "Late Fusion Architectures for LiDAR-Camera 3D Object Detection in Dynamic Environments",
    abstract: "We present a novel late fusion architecture that combines 3D LiDAR point clouds with monocular depth estimation for robust object detection in dynamic warehouse environments. Our approach achieves state-of-the-art performance while maintaining real-time inference on edge hardware.",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2022",
    authors: ["Lance M", "J. Park", "M. Rodriguez"],
    tags: ["Sensor Fusion", "Computer Vision", "Robotics"],
    links: [
      { label: "Paper (PDF)", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    slug: "zero-trust-microservices",
    title: "Towards Zero-Trust Security in Microservice Architectures: A Policy-as-Code Approach",
    abstract: "This paper proposes a comprehensive framework for implementing zero-trust security in microservice architectures using policy-as-code principles. We demonstrate how OPA-based policy enforcement can be integrated at multiple layers of the stack.",
    venue: "USENIX Security Symposium",
    year: "2023",
    authors: ["Lance M", "S. Kumar"],
    tags: ["Security", "Cloud Architecture", "Zero Trust"],
    links: [
      { label: "Paper (PDF)", url: "#" },
      { label: "Slides", url: "#" },
    ],
  },
  {
    slug: "rag-financial-documents",
    title: "Domain-Adapted RAG for Financial Document Intelligence",
    abstract: "We introduce a hybrid retrieval-augmented generation system optimized for financial document processing. Our approach combines fine-tuned embedding models with structured output parsing to achieve 99.2% extraction accuracy across 40+ document types.",
    venue: "ACL Workshop on Financial NLP",
    year: "2024",
    authors: ["Lance M", "L. Zhang", "R. Patel"],
    tags: ["AI/ML", "NLP", "Finance"],
    links: [
      { label: "Paper (PDF)", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
];
