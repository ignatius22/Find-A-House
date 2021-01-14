/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFavorite } from '../../redux/actions/houseAction';

const Favorites = ({ getFavorite, favorite, match }) => {
  const { id } = match.params;
  useEffect(() => {
    getFavorite(id);
  }, [getFavorite, id]);

  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4 text-warning">{favorite.name}</h1>
            <div class="list-group">
              <a href="#" class="list-group-item active">
                Category 1
              </a>
              <a href="#" class="list-group-item">
                Category 2
              </a>
              <a href="#" class="list-group-item">
                Category 3
              </a>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="card mt-4">
              <img
                class="card-img-top img-fluid"
                src={favorite.image_url}
                alt=""
              />
              <div class="card-body">
                <h3 class="card-title">{favorite.name}</h3>
                <p class="card-text text-monospace">{favorite.description}</p>
                <span class="text-warning">
                  &#9733; &#9733; &#9733; &#9733; &#9734;
                </span>
                4.0 stars
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Favorites.propTypes = {
  getHouse: PropTypes.func.isRequired,
  house: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorite,
});

export default connect(mapStateToProps, { getFavorite })(withRouter(Favorites));
