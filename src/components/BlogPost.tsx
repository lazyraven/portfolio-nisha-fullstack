import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiTag, FiShare2 } from 'react-icons/fi';
import { blogPosts, type BlogPost } from '../data';
export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>
          <div className="mt-12 text-center">
            <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
              Post Not Found
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    const title = post.title;
    
    if (navigator.share) {
      navigator.share({
        title,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="mt-8 mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 list-disc text-slate-600 dark:text-slate-400">
            {paragraph.replace('- ', '')}
          </li>
        );
      }
      if (paragraph.startsWith('1. ') || paragraph.match(/^\d+\. /)) {
        return (
          <li key={index} className="ml-6 list-decimal text-slate-600 dark:text-slate-400">
            {paragraph.replace(/^\d+\. /, '')}
          </li>
        );
      }
      if (paragraph.trim() === '') {
        return null;
      }
      return (
        <p key={index} className="mb-4 text-slate-600 dark:text-slate-400">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 border-b border-slate-200 pb-6 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">
                  {post.author}
                </p>
                <p>{post.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{post.readTime} minute read</span>
              </div>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <FiShare2 />
                Share
              </button>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-8 dark:border-white/10">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300"
                >
                  <FiTag />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
