import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = ({ login, authenticated: { loggedIn } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (loggedIn) {
    return <Redirect to="/houses" />;
  }

  return (
    <div>
      <div class="container shadow bg-white">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form class="box" onSubmit={onSubmit}>
                <h1>Login</h1>
                <p class="text-muted">
                  {' '}
                  Please enter your login and password!
                </p>{' '}
                <input type="text" name="email" placeholder="enter email" value={email} onChange={ onChange} required/>
                <input type="password" name="password" placeholder="enter Password" value={password} onChange={ onChange} required/>{' '}
                <a class="forgot text-muted" href="#">
                  Forgot password?
                </a>
                <input type="submit" value="Login" />
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
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
