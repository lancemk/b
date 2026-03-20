import { Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts, blogTags } from "@/data/blog";
import { useState } from "react";

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? blogPosts.filter((p) => p.tags.includes(activeTag)) : blogPosts;

  return (
    <PageTransition>
      <div className="page-container">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Blog</p>
        <h1 className="section-title">Writing</h1>
        <p className="section-subtitle">Deep dives into security, architecture, AI, and engineering practice.</p>

        <div className="flex flex-wrap gap-2 mb-10">
          <button onClick={() => setActiveTag(null)} className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${!activeTag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>All</button>
          {blogTags.map((tag) => (
            <Link key={tag} to={`/blog/tags/${tag.toLowerCase()}`} onClick={(e) => { e.preventDefault(); setActiveTag(tag === activeTag ? null : tag); }} className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${activeTag === tag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{tag}</Link>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex items-start justify-between gap-4 p-5 rounded-lg hover:bg-card transition-colors">
              <div>
                <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                <div className="flex gap-2 mt-2">
                  {post.tags.map((t) => <span key={t} className="text-xs text-muted-foreground">{t}</span>)}
                </div>
              </div>
              <div className="text-right whitespace-nowrap mt-1">
                <span className="text-xs font-mono text-muted-foreground block">{post.date}</span>
                <span className="text-xs font-mono text-muted-foreground">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
