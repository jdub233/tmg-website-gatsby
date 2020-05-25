import React from 'react';
import { Link } from 'gatsby';

import "./header.scss";

export default () => (
    <div className="header">
        <div><a href="https://media.mit.edu">MIT Media Lab</a></div>
        <Link to="/">Tangible Media Group</Link>
        <div className="navbar">
            <ul>
                <li><Link activeClassName="active" to='/vision/'>vision</Link></li>
                <li><Link activeClassName="active" to='/people/'>people</Link></li>
                <li><Link activeClassName="active" to='/projects/'>projects</Link></li>
                <li><Link activeClassName="active" to='/papers/'>papers</Link></li>
                <li><Link activeClassName="active" to='/events/'>events</Link></li>
                <li><Link activeClassName="active" to='/awards/'>press &#38; awards</Link></li>
                <li><Link activeClassName="active" to='/about/'>about &#38; contact</Link></li>
            </ul>
        </div>
    </div>
);