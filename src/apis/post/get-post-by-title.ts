import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getPostByTitleApi = async (type: string, title: string, page: number, size: number) => {
  const response = await axios
    .get(`${API_URL}/post/search?board=${type}&title=${title}&page=${page}&size=${size}`)
    .then((res) => res.data);
  // const response = await axios.get(`${API_URL}/post/board/공지사항?page=${page}&size=${size}`).then((res) => res.data);

  return response;
};
