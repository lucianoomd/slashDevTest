import {useState, useEffect} from 'react';

const useApi = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const baseUrl = 'https://rickandmortyapi.com/api';

  const fetchCharacters = async (pageNum = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/character?page=${pageNum}`);

      if (!response.ok) {
        throw new Error(`Error fetching character: ${response.status}`);
      }

      const data = await response.json();

      setCharacters(prev =>
        pageNum === 1 ? data.results : [...prev, ...data.results],
      );

      // Check if there are more pages
      setHasMore(data.info.next !== null);

      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Load more data (pagination)
  const loadMore = () => {
    if (loading || !hasMore) {
      return;
    }
    setPage(prev => prev + 1);
  };

  // Get single item details
  const getItemDetails = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/character/${id}`);

      if (!response.ok) {
        throw new Error(
          `Error fetching characters details: ${response.status}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data when component mounts or page changes
  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return {
    characters,
    loading,
    error,
    hasMore,
    loadMore,
    getItemDetails,
  };
};

export default useApi;
