import axios from 'axios';
import Cookies from 'js-cookie';
import { userInformationInterface, userLoginInterface } from '../_types/user';
// import { userLoginInterface } from '../_types/components';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const login = async (values: userLoginInterface) => {
  console.log('userApi login', values);
  await axios.post('/login', values).then((res) => {
    Cookies.set('id', res.data.id, { expires: 0.2 });
    Cookies.set('role', res.data.roles_id, { expires: 0.2 });
    Cookies.set('token', res.data.token, { expires: 0.2 });
  });
};

const getUserInfos = async () => {
  const id = Cookies.get('id');
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
  const id = Cookies.get('id');
  await axios.put(`/users/${id}`, value).then((res) => res.data);
};

export { login, getUserInfos, postNewUser, updateUser };
