import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getUserMoviedApi = async (id: number) => {
  const response = await axios.get(`${API_URL}/movie/detail/${id}`).then((res) => res.data);

  return response;
};
