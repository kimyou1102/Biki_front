import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieByTitleApi = async (title: string) => {
  const response = await axios.get(`${API_URL}/movie/search?title=${title}`).then((res) => res.data);
  // const response = await axios.get(`${API_URL}/post/board/공지사항?page=${page}&size=${size}`).then((res) => res.data);

  return response;
};
