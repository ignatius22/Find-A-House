/* eslint-disable no-undef */

/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = ({ register, authenticated: { loggedIn } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const { email, password, password_confirmation } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    register({ email, password, password_confirmation });
  };

  if (loggedIn) {
    return <Redirect to="/houses" />;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box" onSubmit={onSubmit}>
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
                />
                {' '}
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={password_confirmation}
                  onChange={onChange}
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

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
