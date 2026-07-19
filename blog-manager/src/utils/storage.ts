import type { Post } from '../Interfaces/Post';
const STORAGE_KEY = 'blog_posts';

export const getPosts = (): Post[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Post[]) : [];
};

export const savePosts = (posts: Post[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const getPostById = (id: string): Post | undefined => {
  return getPosts().find((post) => post.id === id);
};

export const addPost = (post: Post): void => {
  const posts = getPosts();
  posts.unshift(post);
  savePosts(posts);
};

export const updatePost = (updatedPost: Post): void => {
  const posts = getPosts().map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  savePosts(posts);
};

export const deletePost = (id: string): void => {
  const posts = getPosts().filter((post) => post.id !== id);
  savePosts(posts);
};