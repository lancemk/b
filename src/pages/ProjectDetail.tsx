import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="page-container"><p className="text-muted-foreground">Project not found.</p><Link to="/projects" className="text-primary font-mono text-sm mt-4 inline-block">← Back</Link></div>;

  return (
    <PageTransition>
      <div className="page-container">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors">
          <ArrowLeft size={14} /> All Projects
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{project.industry}</span>
          <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          <span className="text-xs font-mono text-muted-foreground">· {project.role}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 text-foreground">{project.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">{project.longDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="font-mono font-semibold text-sm text-primary mb-4 uppercase tracking-wider">Key Results</h3>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span> {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="font-mono font-semibold text-sm text-primary mb-4 uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="text-xs text-foreground bg-secondary px-3 py-1.5 rounded font-mono">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
