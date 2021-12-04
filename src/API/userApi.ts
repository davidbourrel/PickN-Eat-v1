import axios from 'axios';
import { userInformationInterface, userLoginInterface } from '../_types/user';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const login = async (values: userLoginInterface) => {
  console.log('userApi login envoyé : ', values);
  await axios.post('/login', values).then((res) => {
    console.log('userApi login recu : ', res.data.accessToken);
    // Cookies.set('id', res.data.id, { expires: 0.2 });
    // Cookies.set('role', res.data.roles_id, { expires: 0.2 });
    // Cookies.set('token', res.data.token, { expires: 0.2 });
  });
};

const getUserInfos = async (id: number) => {
  const data: userInformationInterface[] = [];
  await axios.get(`/users/${id}`).then((res) => data.push(res.data));
  return data;
};

const postNewUser = async (values: userInformationInterface) => {
  const data: userInformationInterface[] = [];
  await axios.post(`/users`, values).then((res) => data.push(res.data));
  return data;
};

const updateUser = async (value: userInformationInterface) => {
  await axios.put(`/users/${value.id}`, value).then((res) => res.data);
};

export { login, getUserInfos, postNewUser, updateUser };
