import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:3000';

async function login(values) {
  await axios.post('/login', values).then((res) => {
    Cookies.set('id', res.data.id, { expires: 0.2 });
    Cookies.set('role', res.data.roles_id, { expires: 0.2 });
    Cookies.set('token', res.data.token, { expires: 0.2 });
  });
}

async function getUserInfos() {
  const id = Cookies.get('id');
  const data = [];
  await axios.get(`/users/${id}`).then((res) => data.push(res.data));
  return data;
}

async function postNewUser(values) {
  const data = [];
  await axios.post(`/users`, values).then((res) => data.push(res.data));
  return data;
}

async function updateUser(value) {
  const id = Cookies.get('id');
  await axios.put(`/users/${id}`, value).then((res) => res.data);
}

export { login, getUserInfos, postNewUser, updateUser };
