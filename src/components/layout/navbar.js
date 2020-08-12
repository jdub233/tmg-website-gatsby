import React from "react";
import { Link } from "gatsby";

export default () => (
    <ul className="navbar">
        <li><Link activeClassName="active" to='/vision/'>vision</Link></li>
        <li>
            <Link activeClassName="active"
                getProps={ ({location: {pathname}}) => ( pathname.startsWith('/people') || pathname.startsWith('/person/') ? {className: "active"} : null ) } 
                to='/people/'
            >people</Link>
        </li>
        <li>
            <Link activeClassName="active" 
                getProps={ ({ location: { pathname } }) => ( pathname.startsWith('/project') ? { className: "active" } : null ) }
                to='/projects/'
            >projects</Link>
        </li>
        <li><Link activeClassName="active" to='/papers/'>papers</Link></li>
        <li><Link activeClassName="active" to='/events/'>events</Link></li>
        <li><Link activeClassName="active" to='/press-awards/'>press &#38; awards</Link></li>
        <li><Link activeClassName="active" to='/contact-admission/'>about &#38; contact</Link></li>
    </ul>
);
