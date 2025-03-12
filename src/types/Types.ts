export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: {
    name: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
};
