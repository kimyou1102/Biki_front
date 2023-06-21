import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const addPostViewApi = async (id: number) => {
  const response = await axios.get(`${API_URL}/post/view/${id}`).then((res) => res.data);

  return response;
};
