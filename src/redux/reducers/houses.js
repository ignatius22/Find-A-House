import {
  ADD_HOUSE,
  GET_HOUSES,
  GET_HOUSE,
  GET_FAVORITES,
  ADD_FAVORITES,
} from '../actions/types';

const initialState = {
  houses: [],
  house: {},
  favorite: {},
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_HOUSE:
      return {
        ...state,
        houses: [payload, ...state.houses],
        loading: false,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [payload, ...state.favorites],
        loading: false,
      };
    case GET_HOUSES:
      return {
        ...state,
        houses: payload,
        loading: false,
      };

    case GET_HOUSE:
      return {
        ...state,
        house: payload,
        loading: false,
      };

    case GET_FAVORITES:
      return {
        ...state,
        favorite: payload,
        loading: false,
      };

    default:
      return state;
  }
}
