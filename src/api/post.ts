import { request } from './utils.ts';
import { api } from './client.ts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postsApi = {
  getAll: () => request<Post[]>(api.get('/posts')),
  getById: (id: number) => request<Post>(api.get(`/posts/${id}`)),
  create: (payload: Omit<Post, 'id'>) =>
    request<Post>(api.post('/posts', payload)),

  update: (id: number, payload: Omit<Post, 'id'>) =>
    request<Post>(api.put(`/posts/${id}`, payload)),

  patch: (id: number, payload: Partial<Omit<Post, 'id'>>) =>
    request<Post>(api.patch(`/posts/${id}`, payload)),

  delete: (id: number) => api.delete(`/posts/${id}`),
};
