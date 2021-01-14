import React, {useEffect} from 'react'
import { getHouses} from '../../redux/actions/houseAction'
// import { getHouses } from '../redux/actions/houseAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Houses = ({ getHouses, houses }) => {
  
  useEffect(() => {
    getHouses();
    
  }, [getHouses]);



  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Favorite House</h1>
            
            <div class="list-group">
              <a href="#" class="list-group-item">
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
            <div
              id="carouselExampleIndicators"
              class="carousel slide my-4"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img
                    class="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2017/08/06/09/10/dark-2590544_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_960_720.jpg"
                    style={{ height: 350, width: 900 }}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div class="row">
              {houses.map((house) => {
                return (
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                      <a href="#">
                        <img
                          class="card-img-top"
                          src={house.image_url}
                          alt=""
                        />
                      </a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="#">{house.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">{house.description}</p>
                      </div>
                      <div class="card-footer">
                        <Link
                          to={{ pathname: `/houses/${house.id}` }}
                          className="btn custom-button"
                        >
                          View House
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


Houses.propTypes = {
  getHouses: PropTypes.func.isRequired,
  houses: PropTypes.shape([]).isRequired,
 
};

const mapStateToProps = (state) => ({
  houses: state.houses.houses,
  
});



export default connect(mapStateToProps, {getHouses}) ( Houses)
