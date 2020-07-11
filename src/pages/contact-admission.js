import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

import "./contact-admission.scss";

export default () => (
    <Layout>
        <h2>About us</h2>
        <h3>What is the Tangible Media Group?</h3>
        <p>
            The Tangible Media Group, led by Professor Hiroshi Ishii, explores the <Link to="/vision/"> Tangible Bits and Radical Atoms visions</Link>  to seamlessly couple the dual worlds of bits and atoms. We are designing human interfaces that employ physical objects, surfaces, and spaces as tangible embodiments of digital information and processes.
        </p>
        <h3><Link className="vision-link" to="/vision/">More on our vision +</Link></h3>
        <h2>Contact us</h2>
        <p className="box">
            If you would like to join TMG as a graduate student or have questions about UROP openings, please see below. However, please make sure to read the <a href="#faq">Frequently Asked Questions</a>  section below first, as your question may already be answered.
        </p>
        <h3>General inquiries</h3>
        <p className="contact">
            Please contact our administrative assistant for general inquiries about our research:<br />
            <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" />        </p>
        <h2>Joining the Tangible Media Group</h2>
        <div className="two-column">
            <div>
                <h3>Graduate Students</h3>
                <p className="box">
                    For inquiries about joining TMG as a graduate student, please contact:<br />
                    <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#115;&#115;&#105;&#111;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" />
                </p>
                <p>
                    The Tangible Media Group seeks creative, technically competent, hard-working, and team-oriented graduate students. Applicants are expected to have a strong interest in HCI (Human-Computer Interaction) research and experience in Interaction Design. Successful applicants possess varied technical and design skills in computer programming, electrical engineering, mechanical engineering, as well as interaction/product/architectural design. Oral and written communication skills are essential, as work is regularly presented to visitors and submitted to major conferences and journals.
                </p>
                <p>
                    To apply, submit an application through the MIT Media Lab <a href="http://www.media.mit.edu/admissions/how-to-apply">application process</a>. Applications are due in December, and decisions are released in March (see this year’s calendar). Note that we only accept new masters students. If you wish to pursue a PhD with the Tangible Media Group, we expect you to first complete a masters from the MIT Media Lab. We do not accept students directly into the PhD even with masters from other institutions.
                </p>
                <p>
                    A full application should include a portfolio of past work (designs, publications, patents, etc.) and a description of technical skills, experiences and research interests. If you decide to apply to the Tangible Media Group, please email a full resume and a link to your portfolio to <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#115;&#115;&#105;&#111;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" /> in addition to completing the official application.
                </p>
            </div>
            <div>
                <h3>Undergraduate Students (UROPs)</h3>
                <p className="box">
                    For inquiries about joining TMG as a UROP, please contact:<br />
                    <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#117;&#114;&#111;&#112;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" />
                </p>
                <p>
                    The Tangible Media Group has <a href="http://web.mit.edu/urop/">UROP</a>
                    openings for technically talented hard-working MIT undergraduates, developing
                    software, electronics, and mechanisms for working prototypes of Tangible
                    User Interfaces. Strong programming skills, electrical /mechanical engineering
                    skills, and design aesthetics required. In some cases, UROP students have
                    joined the group as graduate students. Please see the UROP openings page
                    for available positions and application procedures.
                </p>
                <h3>Post Doc</h3>
                <p className="box">
                    For inquiries about joining TMG as a Post Doc, please contact:<br />
                    <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#112;&#111;&#115;&#116;&#100;&#111;&#099;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" />
                </p>
                <p>
                    The Tangible Media Group is seeking a postdoc for a one to two-year appointment. Applicants should have an outstanding research track record in the field of HCI and interaction design and have technical expertise in one or more domain (CS, EE, ME including fabrication). The position involves managing research within the group, guiding junior researchers and students, and coordinating collaborative projects with corporate sponsors.
                </p>
                <p>
                    To apply, please send us a link to a portfolio of past work (projects, publications, patents, etc.), a full CV, and a description of technical skills, experiences and research interests. Please email all materials to tangible-postdoc@media.mit.edu with the subject "Postdoc Application". Self-funded applicants through scholarships or fellowships will receive priority consideration.
                </p>

            </div>
        </div>
        <h2 name="faq">Frequently Asked Questions</h2>
        <p class="box">
            <strong>How do I apply?</strong><br />
            Submit an application through the main MIT Media Lab admissions process (<a href="http://www.media.mit.edu/admissions/how-to-apply">http://www.media.mit.edu/admissions/how-to-apply</a>) and select Tangible Media Group as one of your choices. If you decide to apply, please send us an email at <ContactEmail encodedEmail="&#116;&#097;&#110;&#103;&#105;&#098;&#108;&#101;&#045;&#097;&#100;&#109;&#105;&#115;&#115;&#105;&#111;&#110;&#064;&#109;&#101;&#100;&#105;&#097;&#046;&#109;&#105;&#116;&#046;&#101;&#100;&#117;" /> for our own records. Make sure to include a URL to your online portfolio in your application.
        </p>
        <p class="box">
            <strong>What’s the timeline for applications?</strong><br />
            Applications are due in December, and decisions are usually released by the end of March (<a href="http://www.media.mit.edu/admissions">http://www.media.mit.edu/admissions</a>).
        </p>
        <p class="box">
            <strong>What kind of applicants does the Tangible Media Group look for?</strong><br />
            Our group is first and foremost a research group in human computer interaction (HCI), and our members are passionate about the future of HCI. Whether or not you have HCI experience, you should be familiar with prior work in the area and have ideas of interactions you would like to explore.<br /><br />
            Being able to build functioning artifacts that demonstrate your ideas is key. In general, we look for applicants with both engineering (computer programming, electrical, mechanical) and design (interaction, industrial/product, architecture) backgrounds. A good balance of fluency in both technology and design is ideal, but a very strong background in one can offset weaker knowledge of the other, provided the applicant can demonstrate the ability to pick up new skills quickly.<br /><br />
            In addition, we value strong communication skills, both oral and written, as our work is regularly presented to visitors and submitted to major conferences and journals. The ability to think on your feet and explain your ideas clearly is essential.
        </p>
        <p class="box">
            <strong>How do I demonstrate my skills in my application?</strong><br />
            Your online portfolio is your most important tool to demonstrate your abilities. You may include as many projects as you choose in the portfolio, but be sure to especially highlight work that demonstrate your creativity, originality and technical competency. Present your work clearly and concisely with pictures, videos and publications if available. If you include a group project, please be clear about your exact contribution. Please, also reference any academic publications you have at HCI conferences such as CHI, UIST, CSCW, SIGGRAPH or TEI.
        </p>
        <p class="box">
            <strong>I already have a Masters. Can I apply directly to the PhD?</strong><br />
            To pursue a PhD in the Tangible Media Group, we expect all students to begin with the 2-year master’s program at the Media Lab. This is our rule, even if you have multiple master’s from other institutions.
        </p>
        <p class="box">
            <strong>May I come visit the group and present my work?</strong><br />
            If you are interested in visiting our group, please email us a brief introduction including your skills, research interests and link to your online portfolio. We receive many such requests and are unfortunately unable to accommodate all of them.<br /><br />
            (The Media Lab as a whole organizes an open-house for prospective students in the fall. Check the main website for information.)
        </p>
    </Layout>
);

const ContactEmail = ({encodedEmail}) => (
    <a className="contact-link" href={`mailto:${encodedEmail}`}>{encodedEmail}</a>
);