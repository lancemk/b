import PageTransition from "@/components/layout/PageTransition";
import { experience, education, certifications } from "@/data/resume";
import { skills } from "@/data/profile";

export default function Resume() {
  return (
    <PageTransition>
      <div className="page-container max-w-3xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Resume</p>
        <h1 className="section-title">Experience & Education</h1>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-border hover:border-primary/40 transition-colors">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-mono font-bold text-foreground">{exp.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((ed, i) => (
              <div key={i} className="pl-6 border-l-2 border-border relative">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
                <h3 className="font-mono font-bold text-foreground">{ed.degree}</h3>
                <p className="text-sm text-primary">{ed.institution}</p>
                <p className="text-xs font-mono text-muted-foreground">{ed.period}{ed.notes ? ` · ${ed.notes}` : ""}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-6">Certifications</h2>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span key={cert} className="text-sm font-mono text-foreground bg-secondary px-4 py-2 rounded-md">{cert}</span>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-xs text-primary uppercase tracking-wider mb-2">{category}</h3>
                <p className="text-sm text-muted-foreground">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
