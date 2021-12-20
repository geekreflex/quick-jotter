import { KEY } from './constants';

const key = `${KEY}token`;
export const token = localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key))
  : null;
