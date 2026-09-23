import { FetchCharactersResponse, FetchItemDetailsResponse } from '../types/Types';
import { getErrorMessage } from './utils';

const baseUrl = 'https://rickandmortyapi.com/api';


const fetchCharacters = async (pageNum = 1): Promise<FetchCharactersResponse> => {
    const response: FetchCharactersResponse = { data: [], error: '', hasMore: false };
    try {
        const result = await fetch(`${baseUrl}/character?page=${pageNum}`);

        if (!result.ok) {
            throw new Error(`Error fetching character: ${result.status}`);
        }

        const data = await result.json();

        response.data = data.results;

        response.hasMore = data.info.next !== null;

    } catch (err) {
        response.error = getErrorMessage(err);
    }
    return response;
};

const fetchItemDetails = async (id: number): Promise<FetchItemDetailsResponse> => {
    const response: FetchItemDetailsResponse = { data: null, error: '' };
    try {
      const result = await fetch(`${baseUrl}/character/${id}`);

      if (!result.ok) {
        throw new Error(
          `Error fetching characters details: ${result.status}`,
        );
      }

      const data = await result.json();

      response.data = data;
    } catch (err) {
      response.error = getErrorMessage(err);
    }
    return response;
  };

export {
    fetchCharacters,
    fetchItemDetails,
};
