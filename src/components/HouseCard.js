/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Button, Row, Col, Toast,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleFavoriteClick from '../utils/favouriteutil';
import '../assets/stylesheet/house.css';

const HouseCard = props => {
  const { house, alreadyFav } = props;
  const [button, setButton] = useState('Add to Favorite');
  const [className, setClassName] = useState('btn btn-primary');
  const [show, setShow] = useState(false);
  const favMe = () => {// eslint-disable-line
    if (!alreadyFav) {
      return (
        <Row>
          <Col xs={6}>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
              className="bg-success bg-gradient"
            >
              <Toast.Header className="text-info">
                <strong className="mr-auto">Favorite</strong>
              </Toast.Header>
              <Toast.Body className="text-white">Added successfully</Toast.Body>
            </Toast>
          </Col>
          <Col xs={6}>
            <Button
              className={className}
              type="button"
              onClick={() => {
                handleFavoriteClick(
                  localStorage.getItem('token'),
                  house.id,
                  setButton('Added to Favorite'),
                  setClassName('btn btn-danger btn-small'),
                );
                setShow(true);
              }}
            >
              {button}
            </Button>
          </Col>
        </Row>
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
