/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = ({ register, authenticated: { loggedIn } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation:''
  });

  const { email, password,password_confirmation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ email, password,password_confirmation });
  };

  if (loggedIn) {
    return <Redirect to="/houses" />;
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form class="box" onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <p class="text-muted">
                  {' '}
                  Please enter your login and password!
                </p>{' '}
                <input
                  type="text"
                  name="email"
                  placeholder="enter email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="enter Password"
                  value={password}
                  onChange={onChange}
                  required
                />{' '}
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={password_confirmation}
                  onChange={onChange}
                  required
                />{' '}
                <a class="forgot text-muted" href="#">
                  Forgot password?
                </a>
                <input type="submit" value="Sign Up" />
                <div class="col-md-12">
                  <ul class="social-network social-circle">
                    <li>
                      <a href="#" class="icoFacebook" title="Facebook">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="icoTwitter" title="Twitter">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="icoGoogle" title="Google +">
                        <i class="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
