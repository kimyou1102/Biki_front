import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getSectionByWordApi = async (str: number | string) => {
  const response = await axios.get(`${API_URL}/section/${str}`).then((res) => res.data);

  return response;
};
