import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieBySectionApi = async (name: string) => {
  const response = await axios.get(`${API_URL}/movie/section?name=${name}&year=2023`).then((res) => res.data);

  return response;
};
