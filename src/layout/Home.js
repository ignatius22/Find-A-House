import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Houses from '../component/houses/Houses';
import Header from './Header';

const Home = ({ auth: { loggedIn } }) => (
  <div>
    {loggedIn === false ? (
      <>
        <Header />
      </>
    ) : (
      <Houses />
    )}

  </div>
);

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,

    }).isRequired,
  }).isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
