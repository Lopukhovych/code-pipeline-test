import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './DefaultPageWrapper.css';

// eslint-disable-next-line react/prop-types
const DefaultPageWrapper = ({ children }) => {
  return (
    <div className="DefaultPageWrapper-container">
      <Header />
      <main className="DefaultPageWrapper-content">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultPageWrapper;
