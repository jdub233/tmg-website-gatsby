import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

import "./contact-admissions.scss";

export default () => (
    <Layout>
        <h2>About us</h2>
        <h3>What is the Tangible Media Group?</h3>
        <p>
            The Tangible Media Group, led by Professor Hiroshi Ishii, explores the <Link to="/vision/"> Tangible Bits and Radical Atoms visions</Link>  to seamlessly couple the dual worlds of bits and atoms. We are designing human interfaces that employ physical objects, surfaces, and spaces as tangible embodiments of digital information and processes.
        </p>
        <h3>More on our vision</h3>
        <h2>Contact us</h2>
        <p>
            If you would like to join TMG as a graduate student or have questions about UROP openings, please see below. However, please make sure to read the <a href="#faq">Frequently Asked Questions</a>  section below first, as your question may already be answered.
        </p>
        <h3>General inquiries</h3>
        <p>
            Please contact our administrative assistant for general inquiries about our research:<br />
            <a href="mailto:&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;">&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;</a>
        </p>
        <h2>Joining the Tangible Media Group</h2>
        <div className="two-column">
            <div>
                <h3>Graduate Students</h3>
                <p>
                    For inquiries about joining TMG as a graduate student, please contact:
                </p>
            </div>
            <div>
                <h3>Undergraduate Students (UROPs)</h3>
                <p>
                    For inquiries about joining TMG as a UROP, please contact:
                </p>
            </div>
        </div>
    </Layout>
);