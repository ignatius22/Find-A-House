import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';


const Navbar = ({ auth: { loggedIn }, logout }) => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      {loggedIn === false ? (
        <div class="container">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/houses">
                Houses
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/add-houses">
                Add Houses
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
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
   
const mapStateToProps = (state) => ({
  auth: state.auth,
});


export default connect(mapStateToProps, {logout})( Navbar)
