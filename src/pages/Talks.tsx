import PageTransition from "@/components/layout/PageTransition";
import { talks } from "@/data/talks";
import { ExternalLink, Mic, BookOpen, Users } from "lucide-react";

const typeIcons = { talk: <Mic size={16} />, workshop: <BookOpen size={16} />, panel: <Users size={16} /> };

export default function Talks() {
  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Talks</p>
        <h1 className="section-title">Talks & Presentations</h1>
        <p className="section-subtitle">Conference talks, workshops, and panel discussions.</p>

        <div className="space-y-6">
          {talks.map((talk, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">{typeIcons[talk.type]}</span>
                <span className="text-xs font-mono text-primary capitalize">{talk.type}</span>
                <span className="text-xs font-mono text-muted-foreground">· {talk.date}</span>
              </div>
              <h3 className="font-mono font-bold text-foreground mb-1">{talk.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{talk.event}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{talk.description}</p>
              <div className="flex items-center gap-3">
                {talk.links.map((link) => (
                  <a key={link.label} href={link.url} className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                    {link.label} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
