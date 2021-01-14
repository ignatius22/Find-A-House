import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));

const setAuthToken = () => {
  if (user && user.jwt) {
    axios.defaults.headers.common.Authorization = `Bearer ${user.jwt}`;
    
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
