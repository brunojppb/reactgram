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

export const postSignup = (email, firstName, lastName, password, passwordConfirmation) => {
  return backend.post('/api/signup', {email, firstName, lastName, password, passwordConfirmation});
}

export const getUserProfile = (userId) => {
  return backend.get(`/api/users/${userId}`);
}

export const getEntries = (userId, page) => {
  return backend.get(`/api/users/${userId}/entries`, {params: {page}});
}

export const putUpdateProfile = (firstName, lastName) => {
  return backend.put('/api/me', {firstName, lastName});
}

export const postUpdateProfilePicture = (pictureId) => {
  return backend.put('/api/me/picture', {pictureId});
}

export const postUploadImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return backend.post('/api/upload', formData, {headers: {'content-type': 'multipart/form-data'}});
};

export const putUpdatePassword = (password, passwordConfirmation) => {
  return backend.put('/api/me/password', {password, passwordConfirmation});
};

export const getFeed = (page) => {
  return backend.get('/api/feed', {params: {page}});
};

export const deletePost = (postId) => {
  return backend.delete(`/api/entries/${postId}`);
};

export const postCreatePost = (pictureId, text) => {
  return backend.post('/api/entries', {pictureId, text});
};

export const postFollowUser = (userId) => {
  return backend.post(`/api/users/${userId}/follow`);
};

export const deleteUnfollowUser = (userId) => {
  return backend.delete(`/api/users/${userId}/follow`);
}

export const postLike = (postId) => {
  return backend.post(`/api/entries/${postId}/like`);
}

export const deleteLike = (postId) => {
  return backend.delete(`/api/entries/${postId}/like`);
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
