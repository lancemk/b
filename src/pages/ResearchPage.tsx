import PageTransition from "@/components/layout/PageTransition";
import { research } from "@/data/research";
import { ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Research</p>
        <h1 className="section-title">Publications & Research</h1>
        <p className="section-subtitle">Peer-reviewed work in sensor fusion, security, and applied AI.</p>

        <div className="space-y-6">
          {research.map((r) => (
            <div key={r.slug} className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-primary">{r.venue}</span>
                <span className="text-xs font-mono text-muted-foreground">· {r.year}</span>
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{r.authors.join(", ")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.abstract}</p>
              <div className="flex items-center gap-3">
                {r.links.map((link) => (
                  <a key={link.label} href={link.url} className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                    {link.label} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {r.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
