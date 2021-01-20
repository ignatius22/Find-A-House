import React, { useEffect } from 'react';
// import { getHouses } from '../redux/actions/houseAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHouses } from '../../redux/actions/houseAction';

const Houses = ({ getHouses, houses }) => {
  useEffect(() => {
    getHouses();
  }, [getHouses]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Favorite House</h1>
          </div>

          <div className="col-lg-9">
            <div
              id="carouselExampleIndicators"
              className="carousel slide my-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2017/08/06/09/10/dark-2590544_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="Third slide"
                  />
                </div>
              </div>
              <Link
                className="carousel-control-prev"
                to="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </Link>
              <Link
                className="carousel-control-next"
                to="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </Link>
            </div>

            <div className="row">
              {houses.map((i, house) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src={house.image_url}
                      alt="house"
                    />

                    <div className="card-body">
                      <h4 className="card-title">{house.name}</h4>
                      <h5>$24.99</h5>
                      <p className="card-text">{house.description}</p>
                    </div>
                    <div className="card-footer">
                      <Link
                        to={{ pathname: `/houses/${house.id}` }}
                        classNameName="btn custom-button"
                      >
                        View House
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Houses.propTypes = {
  getHouses: PropTypes.func.isRequired,
  houses: PropTypes.shape([]).isRequired,

};

const mapStateToProps = state => ({
  houses: state.houses.houses,

});

export default connect(mapStateToProps, { getHouses })(Houses);
