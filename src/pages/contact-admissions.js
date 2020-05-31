import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <h2>About us</h2>
        <h3>What is the Tangible Media Group?</h3>
        <p>
            The Tangible Media Group, led by Professor Hiroshi Ishii, explores the <Link to="/vision/"> Tangible Bits and Radical Atoms visions</Link>  to seamlessly couple the dual worlds of bits and atoms. We are designing human interfaces that employ physical objects, surfaces, and spaces as tangible embodiments of digital information and processes.
        
        </p>
    </Layout>
);