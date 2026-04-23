import { useEffect, useState } from 'react';
import { photosApi, Photo } from '../api/photo';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await photosApi.getAll();
      setPhotos(data);
    } catch (e: any) {
      setError(e.message || 'Failed to load photos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return {
    photos,
    loading,
    error,
    refetch: fetchPhotos,
  };
};
