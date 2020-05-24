import React from "react";
import { Link } from "gatsby";

import Layout from '../components/layout';

export default () => (
  <Layout>
    <div>
      <ul>
        <li><Link to='projects'>Projects</Link></li>
        <li><Link to='papers'>Papers</Link></li>
        <li><Link to='people'>People</Link></li>
        <li><Link to='awards'>Awards</Link></li>
      </ul>
    </div>
  </Layout>
);
