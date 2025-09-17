import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors group"
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light">Blog</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thoughts on technology, development, and the occasional random musing. 
            A collection of learnings and insights from my journey as a developer.
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">  {tag} </span>
                
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <h2 className="text-2xl font-medium group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
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
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

