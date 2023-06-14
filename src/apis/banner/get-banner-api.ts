import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getBannerApi = async () => {
  const response = await axios.get(`${API_URL}/banner`).then((res) => res.data.list);

  return response;
};
