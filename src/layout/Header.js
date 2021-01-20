import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086_960_720.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block  tc">
              <h5 className="display-1 text-warning font-weight-bold">
                Find Your House
              </h5>
              <p className="display-4 font-weight-bold">
                welcome to the our site!!! look for your house here
              </p>

              <Link className="btn btn-primary btn-lg mt-5" to="/login">
                Sign In
              </Link>
              <Link className="btn btn-primary btn-lg mt-5" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091_960_720.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block tc">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/09/10/dark-2590544_960_720.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block tc">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Header;
