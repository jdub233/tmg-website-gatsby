import React from 'react';

import NavBar from './navbar';

import './footer.scss';

function Footer() {
  return (
    <div id="footer">
      <NavBar />
      <div className="accessibility">
        <a href="https://accessibility.mit.edu">Accessibility</a>
      </div>
    </div>
  );
}

export default Footer;
