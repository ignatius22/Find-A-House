import houses from '../../redux/reducers/houses';
import movies from '../../redux/reducers/houses';

describe('houses reducer', () => {
  const initialState = {
    houses: [],
    house: {},
    favorite: {},
    loading: false,
  };
  test('should return the initial state', () => {
    expect(houses(undefined, {})).toEqual(initialState);
  });
});
