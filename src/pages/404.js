import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from '../components/layout';

export default () => (
    <Layout>
        <Helmet>
            <title>Tangible Media Group | Not Found!</title>
        </Helmet>
        <h2>404 sorry not found!</h2>
        <p>
            The link you requested could not be found. It may have been moved or deleted. If you have any questions, please <Link to="/contact-admissions/">contact us.</Link>
        </p>
    </Layout>
);