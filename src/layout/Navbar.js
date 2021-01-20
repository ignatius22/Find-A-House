import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/authActions';

const Navbar = ({ auth: { loggedIn }, logout }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      {loggedIn === false ? (
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">

            <p className="mt-2 text-white font-weight-bold">Find your House</p>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link class="nav-link" to="/houses">
                Houses
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link class="nav-link" to="/add-houses">
                Add Houses
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link class="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  </>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
