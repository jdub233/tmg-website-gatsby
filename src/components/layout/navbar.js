import React from "react";
import { Link } from "gatsby";

export default () => (
    <ul className="navbar">
        <li><Link activeClassName="active" to='/vision/'>vision</Link></li>
        <li><Link activeClassName="active" partiallyActive={true} to='/people/'>people</Link></li>
        <li><Link activeClassName="active" partiallyActive={true} to='/projects/'>projects</Link></li>
        <li><Link activeClassName="active" to='/papers/'>papers</Link></li>
        <li><Link activeClassName="active" to='/events/'>events</Link></li>
        <li><Link activeClassName="active" to='/awards/'>press &#38; awards</Link></li>
        <li><Link activeClassName="active" to='/contact-admissions/'>about &#38; contact</Link></li>
    </ul>
);