import { combineReducers } from 'redux';
import auth from './auth';
import houses from './houses';

export default combineReducers({
  auth,
  houses,
});
