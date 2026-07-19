import { useEffect, useState } from 'react';
import type { SubmitEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Post } from '../Interfaces/Post';
import { addPost, getPostById, updatePost } from '../utils/storage';

const ManagePost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (id) {
      const existingPost = getPostById(id);
      if (existingPost) {
        setTitle(existingPost.title);
        setAuthor(existingPost.author);
        setContent(existingPost.content);
        setDate(existingPost.date);
      } else {
        navigate('/');
      }
    } else {
      setDate(new Date().toISOString().split('T')[0]);
    }
  }, [id, navigate]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!author.trim()) newErrors.author = 'Author is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    if (!date) newErrors.date = 'Date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    if (isEditMode && id) {
      const updatedPost: Post = { id, title, author, content, date };
      updatePost(updatedPost);
    } else {
      const newPost: Post = {
        id: crypto.randomUUID(),
        title,
        author,
        content,
        date,
      };
      addPost(newPost);
    }
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          {isEditMode ? 'Edit Post' : 'Create a New Post'}
        </h1>
        <p className="text-slate-500 mb-6">
          {isEditMode
            ? 'Update the details of your post below.'
            : 'Fill in the details to publish a new post.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.title ? 'border-red-400' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.author ? 'border-red-400' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
            />
            {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.date ? 'border-red-400' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={8}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.content ? 'border-red-400' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none`}
            />
            {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:scale-95 transition-all duration-200"
            >
              {isEditMode ? 'Save Changes' : 'Publish Post'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagePost;