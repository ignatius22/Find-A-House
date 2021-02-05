import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { getUserToken, getError } from '../actions/index';
import { API_ID, API_LOGIN } from '../api/railshouse';

const Login = props => {
  const { getUserToken, getError } = props;
  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { email, password } = state;

  const handleSubmit = event => {
    axios.post(`${API_ID}${API_LOGIN}`, {
      email,
      password,
    },
    { withCredentials: true })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          getUserToken(res.data.token);
        } else {
          getError(res.data.error);
        }
      })
      .catch(err => err);
    event.preventDefault();
  };

  return (
    <>
      <div className="container shadow center mt-2">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box mb-5" onSubmit={handleSubmit}>
                <h1>Login</h1>
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
                <p className="forgot text-muted">Forgot password?</p>
                <input type="submit" value="Login" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <Link
                        to="/login"
                        className="icoFacebook"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="text-white">Back</Link>
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

Login.propTypes = {
  getUserToken: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
