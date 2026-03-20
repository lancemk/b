import { Link } from "react-router-dom";
import { ArrowRight, Shield, Brain, Cloud, Eye, Server } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import PageTransition from "@/components/layout/PageTransition";

const domainIcons: Record<string, React.ReactNode> = {
  "Data Security & Cryptography": <Shield size={20} />,
  "Identity Provider (IdP) Architecture": <Server size={20} />,
  "Cloud-Native Infrastructure": <Cloud size={20} />,
  "AI/ML Application Integration": <Brain size={20} />,
  "Sensor Fusion & Computer Vision": <Eye size={20} />,
};

export default function Landing() {
  return (
    <PageTransition>
      <div className="page-container">
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">
            {profile.title} · {profile.yearsExperience}+ Years
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-[1.1] mb-6 max-w-4xl">
            {profile.tagline.split("cloud architecture").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}<span className="text-gradient">cloud architecture</span></span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-mono text-sm font-medium hover:opacity-90 transition-opacity">
              View Projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-md font-mono text-sm font-medium hover:bg-secondary transition-colors">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Domains */}
        <section className="py-20 border-t border-border">
          <h2 className="section-title">Core Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {profile.specializations.map((spec) => (
              <div key={spec} className="group p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="text-primary mb-3">{domainIcons[spec]}</div>
                <h3 className="font-mono font-semibold text-sm text-foreground">{spec}</h3>
              </div>
            ))}
            <div className="p-5 rounded-lg bg-card border border-border flex items-center">
              <p className="text-muted-foreground text-sm">
                Industries: {profile.industries.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 border-t border-border">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title mb-0">Featured Work</h2>
            <Link to="/projects" className="text-primary font-mono text-sm hover:underline flex items-center gap-1">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:glow-border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{project.industry}</span>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
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
        </section>

        {/* Latest Posts */}
        <section className="py-20 border-t border-border">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title mb-0">Latest Writing</h2>
            <Link to="/blog" className="text-primary font-mono text-sm hover:underline flex items-center gap-1">
              All posts <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 p-5 rounded-lg hover:bg-card transition-colors"
              >
                <div>
                  <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-1">{post.readTime}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
