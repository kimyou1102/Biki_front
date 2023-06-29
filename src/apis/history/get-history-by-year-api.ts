import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'http://203.255.3.66:15000/api/v1';

export const getHistoryByYearApi = async (year: number) => {
  const response = await axios.get(`${API_URL}/history/year/${year}`).then((res) => res.data);

  return response;
};
