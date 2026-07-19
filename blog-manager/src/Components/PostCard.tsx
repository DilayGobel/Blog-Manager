import { Link } from 'react-router-dom';
import type { Post } from '../Interfaces/Post';
interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const truncatedContent =
    post.content.length > 150 ? `${post.content.slice(0, 150)}...` : post.content;

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      onDelete(post.id);
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {formattedDate}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-slate-500 text-sm mb-4 leading-relaxed">{truncatedContent}</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
          <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
            {post.author.charAt(0).toUpperCase()}
          </span>
          <span>{post.author}</span>
        </div>

        <div className="flex gap-2 pt-4 border-t border-slate-100">
          <Link
            to={`/edit/${post.id}`}
            className="flex-1 text-center bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;