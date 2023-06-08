import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function getVenueListApi() {
  const response = await axios.get(`${API_URL}/venue`);

  return response;
}
