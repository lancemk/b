import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { caseStudies } from "@/data/case-studies";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <div className="page-container"><p className="text-muted-foreground">Case study not found.</p><Link to="/case-studies" className="text-primary font-mono text-sm mt-4 inline-block">← Back</Link></div>;

  return (
    <PageTransition>
      <div className="page-container max-w-3xl">
        <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors">
          <ArrowLeft size={14} /> All Case Studies
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{cs.industry}</span>
          <span className="text-xs font-mono text-muted-foreground">{cs.timeline}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-2 text-foreground">{cs.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{cs.client}</p>

        <section className="mb-8">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-3">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-3">Solution</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
        </section>

        <section className="p-6 rounded-lg bg-card border border-border">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-4">Results</h2>
          <ul className="space-y-3">
            {cs.results.map((r, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span> {r}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
