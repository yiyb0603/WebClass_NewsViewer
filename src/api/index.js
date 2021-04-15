import { API_KEY } from 'config/config.json';
import { baseAxios } from 'lib/baseAxios';

export const getNewsList = async (category) => {
  const url = `/top-headlines?country=kr&apiKey=${API_KEY}&q=${category}`;
  const { data } = await baseAxios.get(url);
  return data;
}