import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostPageProps {
  readonly params: {
    readonly slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="space-y-8">
        {/* Back to blog */}
        <div>
          <Link 
            href="/blog"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to blog
          </Link>
        </div>

        {/* Post header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post excerpt */}
        <div className="text-lg text-gray-700 leading-relaxed border-l-4 border-gray-200 pl-6">
          {post.excerpt}
        </div>

        {/* Post content */}
        <article className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>

        {/* Post footer */}
        <footer className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to blog
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Thanks for reading!</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}