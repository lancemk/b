import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { projects, projectTags, projectIndustries } from "@/data/projects";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filtered = projects.filter((p) => {
    if (activeTag && !p.tags.includes(activeTag)) return false;
    if (activeIndustry && p.industry !== activeIndustry) return false;
    return true;
  });

  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Projects</p>
        <h1 className="section-title">Selected Work</h1>
        <p className="section-subtitle">Production systems built across security, AI, robotics, and cloud infrastructure.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => { setActiveTag(null); setActiveIndustry(null); }} className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${!activeTag && !activeIndustry ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>All</button>
          {projectTags.map((tag) => (
            <button key={tag} onClick={() => { setActiveTag(tag === activeTag ? null : tag); setActiveIndustry(null); }} className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${activeTag === tag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{tag}</button>
          ))}
          <span className="border-l border-border mx-1" />
          {projectIndustries.map((ind) => (
            <button key={ind} onClick={() => { setActiveIndustry(ind === activeIndustry ? null : ind); setActiveTag(null); }} className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${activeIndustry === ind ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{ind}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:glow-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{project.industry}</span>
                <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                <span className="text-xs font-mono text-muted-foreground ml-auto">{project.role}</span>
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
