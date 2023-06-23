import axios from 'axios';
import { LoginType } from '../../models/user';

const API_URL = process.env.REACT_APP_API_URL;

export const createLoginApi = async (loginInfo: LoginType) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/user/login`,
    data: loginInfo,
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
