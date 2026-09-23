import {useState, useEffect, useCallback} from 'react';
import { Character } from '../types/Types';
import { fetchCharacters, fetchItemDetails } from '../api';

const useApi = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getCharacters = useCallback(async (page: number) => {
    setLoading(true);
    setError('');
    const response = await fetchCharacters(page);
    setLoading(false);
    if(response.error) {
      setError(response.error);
    } else {
      setCharacters(prev => pageNumber === 1 ? response.data : [...prev, ...response.data]);
      setHasMore(response.hasMore);
    }
  }, [pageNumber]);

  const loadMore = () => {
    if (loading || !hasMore) {
      return;
    }
    setPageNumber(prev => prev + 1);
  };

  const getCharacterDetails = async (id: number) => {
    setLoading(true);
    setError('');
    const response = await fetchItemDetails(id);
    setLoading(false);
    if(response.error) {
      setError(response.error);
    } else {
      return response.data;
    }
  };

  useEffect(() => {
    getCharacters(pageNumber);
  }, [getCharacters, pageNumber]);

  return {
    characters,
    loading,
    error,
    hasMore,
    loadMore,
    getCharacterDetails,
  };
};

export default useApi;
