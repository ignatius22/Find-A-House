import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { getUserToken, getError } from '../actions/index';
import '../assets/stylesheet/registration.css';
import { API_ID, API_REGISTRATION } from '../api/railshouse';

const Registration = props => {
  const { getUserToken, getError } = props;
  const [state, setState] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const {
    email,
    password,
    passwordConfirmation,
  } = state;

  const handleSubmit = event => {
    const incpass = document.getElementById('incpass');
    if (password !== passwordConfirmation) {
      incpass.innerHTML = 'Password is not matching';
    } else {
      axios.post(`${API_ID}${API_REGISTRATION}`, {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
      { withCredentials: true })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            getUserToken(res.data.token);
          } else {
            getError(res.data.error[0]);
          }
        })
        .catch(err => err);
    }
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p className="text-muted">
                  {' '}
                  Please enter your login and password!
                </p>
                {' '}
                <input
                  type="text"
                  name="email"
                  placeholder="enter email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="enter Password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
                {' '}
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={state.password_confirmation}
                  onChange={handleChange}
                  required
                />
                {' '}
                <p className="forgot text-muted">Forgot password?</p>
                <input type="submit" value="Sign Up" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <Link
                        to="/signup"
                        className="icoFacebook"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link className="text-white mr-2" to="/login">
                  {' '}
                  Login
                </Link>
                <Link className="text-white" to="/">
                  {' '}
                  Back To Home
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: data => {
    dispatch(getUserToken(data));
  },
  getError: error => dispatch(getError(error)),
});

Registration.propTypes = {
  getUserToken: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
