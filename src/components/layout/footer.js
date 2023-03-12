import React from 'react';

import NavBar from './navbar';

import './footer.scss';

function Footer() {
  return (
    <div id="footer">
      <div className="org-name">
        Massachusetts Institute of Technology
        <br />
        School of Architecture and Planning
      </div>
      <NavBar />
      <div className="accessibility">
        <a href="https://accessibility.mit.edu">Accessibility</a>
      </div>
    </div>
  );
}

export default Footer;
