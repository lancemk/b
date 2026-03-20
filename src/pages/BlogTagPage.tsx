import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts, blogTags } from "@/data/blog";
import { ArrowLeft } from "lucide-react";

export default function BlogTagPage() {
  const { tag } = useParams();
  const normalizedTag = blogTags.find((t) => t.toLowerCase() === tag?.toLowerCase());
  const filtered = normalizedTag ? blogPosts.filter((p) => p.tags.includes(normalizedTag)) : [];

  return (
    <PageTransition>
      <div className="page-container">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors">
          <ArrowLeft size={14} /> All Posts
        </Link>
        <h1 className="section-title">Tagged: {normalizedTag || tag}</h1>
        <div className="space-y-2 mt-8">
          {filtered.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex items-start justify-between gap-4 p-5 rounded-lg hover:bg-card transition-colors">
              <div>
                <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-1">{post.readTime}</span>
            </Link>
          ))}
          {filtered.length === 0 && <p className="text-muted-foreground">No posts found for this tag.</p>}
        </div>
      </div>
    </PageTransition>
  );
}
