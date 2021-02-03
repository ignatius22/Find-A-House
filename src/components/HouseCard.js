import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleFavoriteClick from '../utils/favouriteutil';
import '../assets/stylesheet/house.css';

const HouseCard = props => {
  const { house, alreadyFav } = props;
  const favMe = () => {// eslint-disable-line
    if (!alreadyFav) {
      return (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            handleFavoriteClick(
              localStorage.getItem('token'),
              house.id,
            );
          }}
        >
          Add to favourite
        </button>
      );
    }
  };

  return (
    <div data-testid={house.id} className="row container top">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <img
          className="card-img-top crd"
          src={house.image_url}
          alt={house.name}
        />
        <div className="card-body">
          <p>{house.name}</p>
        </div>
        <div className="card-footer rounded">
          <p>
            <Link to={`/dashboard/${house.id}/${house.name}`}>
              Check Details
            </Link>
          </p>
          <div className="">{favMe()}</div>
        </div>
      </div>
    </div>
  );
};

HouseCard.defaultProps = {
  alreadyFav: false,
};

HouseCard.propTypes = {
  alreadyFav: PropTypes.bool,
  house: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default HouseCard;
