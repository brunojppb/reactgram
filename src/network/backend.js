import axios from 'axios'
import Cookies from "universal-cookie";

const backend = axios.create({baseURL: process.env.REACT_APP_BACKEND_URL});

export const AUTH_COOKIE_NAME = 'auth-token';

backend.interceptors.request.use(config => {
  const token = new Cookies().get(AUTH_COOKIE_NAME);
  if (token) {
    config.headers.Authorization = token
  }
  return config;
});

export const postLogin = (email, password) => {
  return backend.post('/api/signin', {email, password});
};

export const deleteLogout = () => {
  return backend.delete('/api/logout');
};

export const getProfile = () => {
  return backend.get('/api/me');
}

export const registerInterceptorForStatusCode = (callback, statusCode) => {
  const interceptor = backend.interceptors.response.use(
    response => response,
    error => {
      const {status} = error.response;
      if (status === statusCode) {
        callback();
      }
      return Promise.reject(error);
    });
  return () => backend.interceptors.request.eject(interceptor);
};
