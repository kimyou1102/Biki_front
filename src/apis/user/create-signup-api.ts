import axios from 'axios';
import { UserInfoType } from '../../models/user';

const API_URL = process.env.REACT_APP_API_URL;

export const createSignupApi = async (userInfo: UserInfoType) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/user/signup`,
    data: userInfo,
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
