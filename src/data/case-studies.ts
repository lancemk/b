export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-identity-modernization",
    title: "Identity Infrastructure Modernization for a Top-10 US Bank",
    client: "Fortune 500 Financial Institution",
    industry: "Finance",
    challenge: "Legacy LDAP-based authentication serving 50K+ employees was experiencing increasing security incidents, couldn't support modern passwordless flows, and required 6+ months for new application integrations.",
    solution: "Designed and led implementation of a modern IdP platform with SAML/OIDC federation, FIDO2 passwordless authentication, and automated provisioning. Executed a zero-downtime migration from legacy LDAP over 8 months.",
    results: [
      "94% reduction in credential-related incidents",
      "New app integration time reduced from 6 months to 2 weeks",
      "2M+ daily auth events with <50ms p99 latency",
      "SOC 2 Type II certification achieved 3 months ahead of schedule",
    ],
    timeline: "14 months",
    tags: ["Security", "IdP", "Cloud"],
  },
  {
    slug: "warehouse-robotics-perception",
    title: "Autonomous Warehouse Robot Perception System",
    client: "Global Logistics Company",
    industry: "Manufacturing",
    challenge: "Warehouse mobile robots had a 2.3% collision rate due to unreliable single-sensor perception. Manual warehouse operations were reaching capacity limits with 40% year-over-year volume growth.",
    solution: "Built a multi-modal sensor fusion system combining LiDAR, stereo cameras, and IMUs for robust 3D perception. Developed custom models optimized for edge deployment on NVIDIA Jetson AGX hardware.",
    results: [
      "Collision rate reduced from 2.3% to 0.04%",
      "Deployed across 200+ robots in 12 warehouses",
      "35% improvement in throughput efficiency",
      "$8M annual operational savings",
    ],
    timeline: "18 months",
    tags: ["Robotics", "CV", "AI"],
  },
];
