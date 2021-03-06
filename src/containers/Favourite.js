/* eslint-disable  max-len */

import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHouseAction } from '../actions/index';
import HouseCard from '../components/HouseCard';
import { API_ID, API_FAVOURITE } from '../api/railshouse';

const Favourite = props => {
  const { houses, getHouse } = props;

  const fetchFavourite = useCallback(() => {
    axios
      .get(`${API_ID}${API_FAVOURITE}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        const uniq = [...new Set(res.data.map(x => x.id))].map(id => res.data.find(s => s.id === id));
        getHouse(uniq);
      })
      .catch(err => err);
  }, [getHouse]);

  useEffect(() => {
    fetchFavourite();
  }, [fetchFavourite]);

  const renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (
        <div className="col-lg-4 col-md-6 mb-4" key={house.id}>
          <HouseCard house={house} alreadyFav />
        </div>
      ));
    } else {
      res = <p className="para-fav">You have no favourite House</p>;
    }

    return res;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="logo">
          <h1 className="text-white">Favourites</h1>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link btn btn-primary" to="/dashboard">
              Go to Houses
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="house">{renderHelper()}</div>
    </>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
});

Favourite.defaultProps = {
  houses: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

Favourite.propTypes = {
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getHouse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
