import axios from 'axios';
import { userInformationInterface } from '../_types/user';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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

export { getUserInfos, postNewUser, updateUser };
