import axios from "axios";

export const api = axios.create({
  baseURL: 'https://my.api.mockaroo.com',
  headers: {
    'Conten-Type': 'application/json',
  }
});