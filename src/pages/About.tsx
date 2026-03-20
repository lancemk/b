import PageTransition from "@/components/layout/PageTransition";
import { profile, skills } from "@/data/profile";
import { Shield, Brain, Cloud, Eye, Server } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">About</p>
        <h1 className="section-title">Professional Identity</h1>
        <p className="section-subtitle">{profile.tagline}</p>

        <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed max-w-3xl mb-16">
          <p>{profile.bio}</p>
          <p>
            My work sits at the intersection of security, intelligence, and scale. I've built identity platforms
            that handle millions of authentications daily, perception systems for autonomous robots operating
            in unstructured environments, and AI pipelines that process hundreds of thousands of documents
            with near-perfect accuracy.
          </p>
          <p>
            I believe in engineering as craft — systems that are not just functional but elegant,
            not just secure but usable, not just fast but maintainable. Every line of code
            should earn its place.
          </p>
        </div>

        <section className="py-12 border-t border-border">
          <h2 className="font-mono font-bold text-xl mb-8 text-foreground">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-mono font-semibold text-sm text-primary mb-3 uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-border">
          <h2 className="font-mono font-bold text-xl mb-6 text-foreground">Industries</h2>
          <div className="flex flex-wrap gap-3">
            {profile.industries.map((ind) => (
              <span key={ind} className="text-sm font-mono text-foreground bg-secondary px-4 py-2 rounded-md">{ind}</span>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
