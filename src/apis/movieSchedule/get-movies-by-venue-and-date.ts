import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function getMoviesByVenueAndDate(venueId: number, date: string) {
  const response = await axios.get(`${API_URL}/movie/schedule?venue=${venueId}&date=${date}`);

  return response;
}
