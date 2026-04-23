import { request } from './utils.ts';
import { api } from './client.ts';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const photosApi = {
  getAll: () => request<Photo[]>(api.get('/photos')),
};
