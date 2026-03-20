import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import { blogPosts } from "@/data/blog";
import MDContentRenderer from "@/components/MDContentRenderer";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page-container">
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/blog" className="text-primary font-mono text-sm mt-4 inline-block">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <MDContentRenderer
        type="blog"
        isToc={true}
        data={{ ...post, tags: post.tags.join(" ") }}
      />
    </PageTransition>
  );
}
