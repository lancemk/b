export interface Insight {
  id: string;
  content: string;
  date: string;
  tags: string[];
}

export const insights: Insight[] = [
  { id: "1", content: "The best security architecture is the one developers actually follow. If your zero-trust policy requires 14 steps to deploy a service, people will find shortcuts.", date: "2024-03-15", tags: ["Security"] },
  { id: "2", content: "Hot take: most companies don't need a service mesh. A well-configured load balancer with mTLS termination covers 90% of use cases without the operational complexity.", date: "2024-03-08", tags: ["Architecture"] },
  { id: "3", content: "After 200+ robot deployments: simulation fidelity matters less than simulation diversity. A noisy, varied sim environment produces more robust perception than a perfect digital twin.", date: "2024-02-28", tags: ["Robotics"] },
  { id: "4", content: "RAG evaluation insight: retrieval recall matters more than precision in most enterprise use cases. Users tolerate extra context but can't tolerate missing answers.", date: "2024-02-20", tags: ["AI"] },
  { id: "5", content: "The identity layer is the new perimeter. If you're spending more on network security than identity infrastructure in 2024, your priorities are inverted.", date: "2024-02-10", tags: ["Security"] },
  { id: "6", content: "Kubernetes is infrastructure. Treat it like infrastructure — automate everything, restrict direct access, version your configs. If humans are running kubectl in production, you have a process problem.", date: "2024-01-30", tags: ["Cloud"] },
  { id: "7", content: "Edge ML lesson: your model's FLOPS don't matter if your data pipeline can't keep up. I/O optimization is usually the bottleneck, not compute.", date: "2024-01-15", tags: ["AI", "Robotics"] },
  { id: "8", content: "Unpopular opinion: TypeScript on the backend is underrated for internal tools. Type safety from database to UI with a single language reduces whole categories of bugs.", date: "2024-01-05", tags: ["Engineering"] },
];
