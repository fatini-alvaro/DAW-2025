import { api } from "../../../lib/axios";

export type MovieDTO = {
  title: string;
  year: number;
  image: string;
  genres: string;
  duration: string;
  sinopse: string;
  highlight: string;
}

const _ENDPOINT = '/movies.json?key=517c4770';

export const MovieService = {
  async list(): Promise<MovieDTO[]> {
    const result = await api.get(_ENDPOINT);
    return Array.isArray(result.data) ? result.data : [];
  }
};
