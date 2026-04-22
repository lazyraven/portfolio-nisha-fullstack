import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiTag, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { blogPosts, type BlogPost } from '../data';

export function useBlogPosts() {
  return blogPosts;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <div id="blog" className="min-h-screen bg-slate-50 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 my-2 text-sm"
          >
            <FiArrowLeft />
            Back to Home Page
          </Link>
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Insights on web development, best practices, and technology trends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts by title or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-950 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400 dark:focus:border-cyan-400"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Filter by Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-500 text-white dark:bg-cyan-600'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {(searchQuery || selectedTags.length > 0) && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Clear filters
            </button>
          )}

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredPosts.length} of {blogPosts.length} posts
          </p>
        </motion.div>

        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="block rounded-lg border border-slate-200 bg-white p-6 transition hover:border-cyan-500 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400 dark:hover:shadow-cyan-500/10"
                >
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock size={16} />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300"
                        >
                          <FiTag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-3 text-cyan-600 dark:text-cyan-400">
                      Read more
                      <FiArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-slate-200 bg-white p-8 text-center dark:border-white/10 dark:bg-slate-900"
            >
              <p className="text-slate-600 dark:text-slate-400">
                No posts found matching your search. Try adjusting your filters.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
