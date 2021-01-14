import React, { useEffect } from 'react';
import { getFavorites } from '../../redux/actions/houseAction';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FavHouses = ({ getFavorites, favorites, match }) => {
  const { id } = match.params;

  useEffect(() => {
    getFavorites(id);
  }, [getFavorites, id]);

  return (
    <>
      <div class="container mt-5">
        {favorites.name}
      </div>
    </>
  );
};

FavHouses.propTypes = {
  getFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, { getFavorites })(withRouter(FavHouses));
