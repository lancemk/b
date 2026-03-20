import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudies() {
  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Case Studies</p>
        <h1 className="section-title">Enterprise Impact</h1>
        <p className="section-subtitle">Deep dives into complex engineering challenges and measurable business outcomes.</p>

        <div className="space-y-6">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:glow-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{cs.industry}</span>
                <span className="text-xs font-mono text-muted-foreground">{cs.timeline}</span>
              </div>
              <h3 className="font-mono font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Client:</strong> {cs.client}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {cs.tags.map((tag) => (
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
