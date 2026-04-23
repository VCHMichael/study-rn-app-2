import { useEffect, useState } from 'react';
import { Post, postsApi } from '../api/post.ts';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await postsApi.getAll();
      setPosts(data);
    } catch (e: any) {
      setError(e.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost()
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPost
  }
};
