import React from 'react';
import { Redirect } from 'react-router-dom';
// import logo from '../assets/img/logo.gif';
import Header from './Header';

const Home = () => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
