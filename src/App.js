import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './layout/Home';
import Login from './auth/Login';
import setAuthToken from './utils/setAuthToken';
import Register from './auth/Register';
import Navbar from './layout/Navbar'
import addHouse from './component/houses/addHouses'

import House from './component/houses/House'
import Houses from './component/houses/Houses'
import FavHouse from './component/houses/FavoriteHouse'

import store from './redux/store';
import { loadUser } from './redux/actions/authActions';


if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/add-houses" exact component={addHouse} />
          <Route path="/houses/:id" exact component={House} />
          <Route path="/favorites/:id" exact component={FavHouse} />
          <Route path="/houses" exact component={Houses} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
