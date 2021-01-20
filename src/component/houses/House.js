/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHouse } from '../../redux/actions/houseAction';

const House = ({ getHouse, house, match }) => {
  const { id } = match.params;
  useEffect(() => {
    getHouse(id);
  }, [getHouse, id]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4 text-warning">{house.name}</h1>
            <div className="list-group" />
          </div>

          <div className="col-lg-9">
            <div className="card mt-4">
              <img
                className="card-img-top img-fluid"
                src={house.image_url}
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">{house.name}</h3>
                <p className="card-text text-monospace">{house.description}</p>
                <span className="text-warning">
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

House.propTypes = {
  getHouse: PropTypes.func.isRequired,
  house: PropTypes.shape({}).isRequired,
  match: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  house: state.houses.house,
});

export default connect(mapStateToProps, { getHouse })(
  withRouter(House),
);
