import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

import Header from './layout/header';
import Footer from './layout/footer';

export default function Layout({ children }) {
  return (
    <div id="container">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.bool,
    ]),
  ).isRequired,
};
