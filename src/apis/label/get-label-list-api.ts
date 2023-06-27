import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getLabelListApi = async () => {
  const response = await axios.get(`${API_URL}/movie/label`).then((res) => res.data.list);

  return response;
};
