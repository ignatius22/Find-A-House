import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getUserToken, getHouseAction } from '../actions/index';
import {
  API_ID, API_HOUSE,
} from '../api/railshouse';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';
import '../assets/stylesheet/house.css';

const Dashboard = props => {
  const { getHouse, houses, getUserToken } = props;

  const fetchHouse = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
      .then(res => {
        getHouse(res.data);
      })
      .catch(err => err);
  }, [getHouse]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    getUserToken('');
  };

  const renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (
        <div className="col-lg-4 col-md-6 mb-4" key={house.id}>
          <HouseCard house={house} />
        </div>
      ));
    } else {
      res = (
        <img src={loader} alt="loading..." />
      );
    }

    return res;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <h1 className="text-white">Houses</h1>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link btn-small btn-primary" to="/favourite">
              Go to Favourite
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-danger ml-4"
          onClick={() => handleLogoutClick()}
        >
          Logout
        </button>
      </nav>
      <div className="house">{renderHelper()}</div>
    </>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
  getUserToken: data => dispatch(getUserToken(data)),
});

Dashboard.defaultProps = {
  houses: PropTypes.shape({
    id: '',
    name: '',
    description: '',
    image_url: '',
  }),
};

Dashboard.propTypes = {
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getHouse: PropTypes.func.isRequired,
  getUserToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
