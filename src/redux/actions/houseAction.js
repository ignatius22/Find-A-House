/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_HOUSES,
  GET_HOUSE,
  HOUSES_ERROR,
  ADD_HOUSE,
  GET_FAVORITES,
  ADD_FAVORITES,
} from './types';




const baseUrl = 'http://localhost:3001';

export const addHouses = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.post(`${baseUrl}/houses`, formData, config);
    dispatch({
      type: ADD_HOUSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};


export const getHouses = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/houses`, config);
    dispatch({
      type: GET_HOUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};

export const getHouse = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/houses/${id}`, config);
    dispatch({
      type: GET_HOUSE,
      payload: res.data,
    }, console.log(res.data));
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};

export const createFavorite = (user_id, house_id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ user_id, house_id }),
  };
  try {
    const res = await axios.get(`${baseUrl}/favorites`, config);
    dispatch(
      {
        type: ADD_FAVORITES,
        payload: res.data,
      },
      console.log(res.data)
    );
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};

export const getFavorite = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/users/${id}`, config);
    dispatch(
      {
        type: GET_FAVORITES,
        payload: res.data,
      },
      console.log(res.data)
    );
  } catch (err) {
    dispatch({
      type: HOUSES_ERROR,
      payload: err,
    });
  }
};


