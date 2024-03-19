import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RICK_AND_MORTY_REST_API_BASE_URL,
});
