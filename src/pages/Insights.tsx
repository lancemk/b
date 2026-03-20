import PageTransition from "@/components/layout/PageTransition";
import { insights } from "@/data/insights";

export default function Insights() {
  return (
    <PageTransition>
      <div className="page-container max-w-3xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Insights</p>
        <h1 className="section-title">Short-Form Thinking</h1>
        <p className="section-subtitle">Quick observations on engineering, architecture, and industry trends.</p>

        <div className="space-y-6">
          {insights.map((insight) => (
            <div key={insight.id} className="p-5 rounded-lg border border-border hover:border-primary/20 transition-colors">
              <p className="text-foreground leading-relaxed">{insight.content}</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-mono text-muted-foreground">{insight.date}</span>
                {insight.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
