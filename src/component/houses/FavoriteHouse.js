import React, { useEffect } from 'react';
import { getFavorite } from '../../redux/actions/houseAction';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FavHouses = ({ getFavorites, favorite, match }) => {
  const { id } = match.params;

  useEffect(() => {
    getFavorites(id);
  }, [ id]);

  return (
    <>
      <div class="container mt-5">
        {favorite.name}
      </div>
    </>
  );
};

FavHouses.propTypes = {
  getFavorites: PropTypes.func.isRequired,
  favorite: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (state) => ({
  favorite: state.favorite.favorite,
});

export default connect(mapStateToProps, { getFavorite })(withRouter(FavHouses));
