import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Alert from './Alert';
import Home from './layout/Home';
import Login from './auth/Login';
import setAuthToken from './utils/setAuthToken';
import Register from './auth/Register';
import Navbar from './layout/Navbar'
import addHouse from './component/houses/addHouses'
// import allHouses from './component/houses/AllHouses'
import House from './component/houses/House'
import Houses from './component/houses/Houses'
import Favorites from './component/houses/FavoriteHouse';

import store from './redux/store';
import { loadUser } from './redux/actions/authActions';
import FavoriteHouse from './component/houses/FavoriteHouse';

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
          <Route path="/houses" exact component={Houses} />
        <Route path="/favorites/:id" exact={FavoriteHouse} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
