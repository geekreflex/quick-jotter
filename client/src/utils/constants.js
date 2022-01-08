export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:7000`
    : 'https://quickjotter.herokuapp.com';
export const KEY = 'quick-jotter-';
