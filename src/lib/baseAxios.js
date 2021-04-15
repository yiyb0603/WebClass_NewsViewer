import axios from 'axios';
import { API_URL, API_KEY } from 'config/config.json';

export const baseAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Api-Key': API_KEY,
    Authorization: API_KEY,
  },
});