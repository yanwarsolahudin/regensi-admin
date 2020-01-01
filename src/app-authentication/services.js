import axios from 'axios';
import { BASE_URL } from '../environment';



export function serviceLogin(username, password) {
  const url = `${BASE_URL}/users/signin/`;
  return axios.post(url, {username, password});
};


export function serviceRegister(username, email, password) {
  const url = `${BASE_URL}/users/register/`;
  return axios.post(url, {username, email, password});
}
