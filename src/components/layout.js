import React from 'react';

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
