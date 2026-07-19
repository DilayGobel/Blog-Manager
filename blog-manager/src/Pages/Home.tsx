import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import type { Post } from '../Interfaces/Post';
import { getPosts, deletePost } from '../utils/storage';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id: string) => {
    deletePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">All Posts</h1>
        <p className="text-slate-500 mt-1">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} stored locally in your browser
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300">
          <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700">No posts found</h3>
          <p className="text-slate-400 mt-1 mb-6 max-w-sm">
            You haven't written anything yet. Create your first blog post to get started.
          </p>
          <Link
            to="/add"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
          >
            + Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;