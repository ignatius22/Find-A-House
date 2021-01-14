import React from 'react';
import PropTypes from 'prop-types';
import Houses from '../component/houses/Houses'
import { connect } from 'react-redux';
import Header from './Header'


const Home = ({ auth: { user, loggedIn } }) => (
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
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
