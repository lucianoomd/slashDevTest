import {useState, useEffect, useCallback} from 'react';
import { Character } from '../types/types';
import { fetchItemDetails } from '../api';

const useCharacterDetailsApi = (characterId: number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCharacterDetails = useCallback(async (id: number) => {
    setLoading(true);
    setError('');
    const response = await fetchItemDetails(id);
    setLoading(false);
    if(response.error) {
      setError(response.error);
    } else {
      setCharacter(response.data);
    }
  }, []);

  useEffect(() => {
    getCharacterDetails(characterId);
  }, [getCharacterDetails, characterId]);

  return {
    character,
    loading,
    error,
  };
};

export default useCharacterDetailsApi;
