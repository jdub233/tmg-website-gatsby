import React from 'react';
import { Link } from 'gatsby';

import NavBar from './navbar';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="supertitle"><a href="https://media.mit.edu">MIT Media Lab</a></div>
        <h1><Link to="/">Tangible Media Group</Link></h1>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
