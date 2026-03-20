export interface Talk {
  title: string;
  event: string;
  date: string;
  description: string;
  type: "talk" | "workshop" | "panel";
  links: { label: string; url: string }[];
}

export const talks: Talk[] = [
  { title: "Zero Trust in Practice: From Policy to Production", event: "KubeCon NA 2023", date: "2023-11-08", description: "A deep dive into implementing zero-trust security in Kubernetes environments using OPA, Envoy, and SPIFFE/SPIRE.", type: "talk", links: [{ label: "Slides", url: "#" }, { label: "Video", url: "#" }] },
  { title: "Sensor Fusion on the Edge", event: "ROS World 2022", date: "2022-10-20", description: "Lessons from deploying multi-modal perception systems on embedded hardware for warehouse robotics.", type: "talk", links: [{ label: "Slides", url: "#" }] },
  { title: "Building Production RAG Systems", event: "AI Engineer Summit 2024", date: "2024-02-15", description: "Workshop on building, evaluating, and scaling retrieval-augmented generation systems for enterprise use cases.", type: "workshop", links: [{ label: "Materials", url: "#" }] },
  { title: "The Future of Identity", event: "OWASP AppSec Global 2023", date: "2023-09-22", description: "Panel discussion on passwordless authentication, verifiable credentials, and the evolution of digital identity.", type: "panel", links: [{ label: "Recording", url: "#" }] },
];
