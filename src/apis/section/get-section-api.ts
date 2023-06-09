import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getSectionApi = async () => {
  const response = await axios.get(`${API_URL}/section`).then((res) => res.data.list);

  return response;
};
