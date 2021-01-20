import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = ({ login, authenticated: { loggedIn } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  if (loggedIn) {
    return <Redirect to="/houses" />;
  }

  return (
    <div>
      <div className="container shadow bg-white">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box" onSubmit={onSubmit}>
                <h1>Login</h1>
                <p className="text-muted">
                  {' '}
                  Please enter your login and password!
                </p>
                {' '}
                <input type="text" name="email" placeholder="enter email" value={email} onChange={onChange} required />
                <input type="password" name="password" placeholder="enter Password" value={password} onChange={onChange} required />
                {' '}
                <p className="forgot text-muted">
                  Forgot password?
                </p>
                <input type="submit" value="Login" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <Link to="/login" className="icoFacebook" title="Facebook">
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

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
