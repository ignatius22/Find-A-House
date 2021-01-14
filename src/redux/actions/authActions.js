/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { AUTH_FAIL } from './types';
import setAuthToken from '../../utils/setAuthToken';

const baseUrl = 'http://localhost:3001';

const setUser = (payload) => ({ type: 'SET_USER', payload });

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.jwt) {
    setAuthToken(localStorage.jwt);
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/auto_login`, config);
    localStorage.setItem('jwt', res.data);
    dispatch(setUser(res.data.user));
  } catch (err) {
    dispatch({
      type: AUTH_FAIL,
      payload: err,
    });
  }
};

export const getUsers = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/users/${id}`, config);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    }, console.log(res.data));
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};

// Register
export const register = (userInfo) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(userInfo),
  };

  try {
    const res = await axios.post(`${baseUrl}/registrations`, userInfo, config);
    localStorage.setItem('jwt', res.data.jwt);
    
    dispatch(setUser(res.data.user));
  } catch (err) {
    dispatch({
      type: AUTH_FAIL,
      payload: err,
    });
  }
};

// Login
export const login = (userInfo) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(userInfo),
  };

  try {
    const res = await axios.post(`${baseUrl}/login`, userInfo, config);
    localStorage.setItem('jwt', res.data.jwt);
    dispatch(setUser(res.data.user));

  } catch (err) {
    dispatch({
      type: AUTH_FAIL,
      payload: err,
    });
  }
};

// Logout
export const logout = () => ({ type: 'LOG_OUT' });
