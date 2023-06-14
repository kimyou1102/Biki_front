import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getBoardByParamApi = async (param: string) => {
  const response = await axios.get(`${API_URL}/board/param/${param}`).then((res) => res.data);

  return response;
};
