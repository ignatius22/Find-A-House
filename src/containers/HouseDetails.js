/* eslint-disable  consistent-return */
import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHouseDetail } from '../actions/index';
import '../assets/stylesheet/housedetails.css';
import handleFavoriteClick from '../utils/favouriteutil';
import { API_ID, API_HOUSE } from '../api/railshouse';

const HouseDetails = props => {
  const { houseDetail, getHouseDetail } = props;

  const fetchHouseDetail = useCallback(() => {
    axios
      .get(`${API_ID}${API_HOUSE}/${props.match.params.id}`) // eslint-disable-line
      .then(res => {
        getHouseDetail(res.data);
      })
      .catch(err => err);
  }, [getHouseDetail]);

  useEffect(() => {
    fetchHouseDetail();
  }, [fetchHouseDetail]);

  const renderHelper = () => {
    // eslint-disable-line
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    if (houseDetail) {
      const house = houseDetail;

      return (
        <>
          <div className="container mt-5 ">
            <div className="row">
              <div className="col-lg-3">
                <h1 className="my-4 text-warning">{house.name}</h1>
                <div className="list-group" />
              </div>
              <div className="col-lg-9">
                <div className="card mt-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <img
                    className="card-img-top img-fluid"
                    src={house.image_url}
                    alt={house.name}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{house.name}</h3>
                    <p className="card-text text-monospace">
                      {house.description}
                    </p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="link">
          <Link to="/dashboard"> &#8617;</Link>
        </div>
        <div className="house-header">
          <h2 className="det">{houseDetail.name}</h2>
        </div>
      </div>

      {renderHelper()}
    </>
  );
};

const mapStateToProps = state => ({
  houseDetail: state.houseDetail,
});

const mapDispatchToProps = dispatch => ({
  getHouseDetail: data => {
    dispatch(getHouseDetail(data));
  },
});

HouseDetails.defaultProps = {
  houseDetail: PropTypes.shape({
    id: '',
    name: '',
    description: '',
    image_url: '',
  }),
};

HouseDetails.propTypes = {
  getHouseDetail: PropTypes.func.isRequired,
  houseDetail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
