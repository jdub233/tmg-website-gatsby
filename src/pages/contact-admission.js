/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
// Content should likely be moved to an mdx file.
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

import './contact-admission.scss';

const ContactAdmission = () => (
  <Layout>
    <Helmet>
      <title>Tangible Media Group | About us</title>
    </Helmet>
    <h2>About us</h2>
    <h3>What is the Tangible Media Group?</h3>
    <p>
      The Tangible Media Group (TMG) strives to push the boundaries of HCI
      (Human-Computer Interaction) by inventing new digital/physical
      materials and inspiring people through engaging interactive applications. Our
      work centers on the vision of new materials, which we call <Link className="dotted" to="/vision/">&quot;Tangible Bits&quot; and &quot;Radical Atoms.&quot;</Link> We seek
      to advance the mission-critical fields such as design, communication,
      and artistic expression. Among them, we are focusing on
      &quot;Tangible Telepresence&quot; to reinvent distancing and to strengthen
      the connectedness among people separated spatially and temporally by introducing
      &quot;tangibility&quot; to interpersonal communication and collaboration channels.
    </p>
    <p>
      We pursue a transdisciplinary focus. We expect TMG researchers to speak the languages of art, design, science, and
      technology fluently and express their ideas across all these disciplines. We aim to develop original ideas and visions
      focusing on how they will push the field of HCI forward through influential publishable material.
    </p>
    <h3><Link className="vision-link" to="/vision/">More on our vision +</Link></h3>
    <h2>Contact us</h2>
    <p className="box">
      If you would like to join TMG as a graduate student or have questions about UROP openings, please see below. However, please make sure to read the <a href="#faq">Frequently Asked Questions</a>  section below first, as your question may already be answered.
    </p>
    <h3>General inquiries</h3>
    <p className="contact">
      Please contact our administrative assistant for general inquiries about our research:<br />
      tangible-admin [at] media.mit.edu
    </p>
    <h2>Joining the Tangible Media Group</h2>
    <div className="two-column">
      <div className="column">
        <h3>Graduate Students</h3>
        <p className="box">
          For inquiries about joining TMG as a graduate student, please contact:<br />
          tangible-admission [at] media.mit.edu
        </p>
        <p className="textblock">
          The Tangible Media Group seeks creative, design sensitive, technologically competent, hard-working, and team-oriented
          graduate students. Since we implement fully functioning and aesthetically pleasing tangible interfaces to bridge
          physical and digital worlds, our work requires a broad skill set of product design, electronic engineering, materials
          science, mechanical engineering, digital fabrication, and computer programming. We expect applicants to have the
          knowledge and track record in HCI (Human-Computer Interaction) research and experience in Interaction Design. Oral and
          written communication skills are essential, as work is regularly presented to visitors and submitted to major
          conferences and journals.
        </p>
      </div>
      <div className="column">
        <h3>Undergraduate Students (UROPs)</h3>
        <p className="box">
          For inquiries about joining TMG as a UROP, please contact:<br />
          tangible-urop [at] media.mit.edu
        </p>
        <p className="textblock">
          The Tangible Media Group has <a href="https://web.mit.edu/urop/">UROP</a> openings for technically talented hard-working MIT undergraduates, developing software, electronics, and mechanisms for
          working prototypes of Tangible User Interfaces. Strong programming skills, electrical/mechanical engineering skills, and
          design aesthetics required. In some cases, UROP students have later joined the group as graduate students. Please see
          the UROP openings page for available positions and application procedures.
        </p>
        <h3 style={{ paddingTop: '10px' }}>Post Doc</h3>
        <p className="box">
          For inquiries about joining TMG as a Post Doc, please contact:<br />
          tangible-postdoc [at] media.mit.edu
        </p>
        <p className="textblock">
          The Tangible Media Group is seeking a postdoc for a one to two-year appointment. Applicants should have an outstanding
          research track record in the field of HCI and interaction design and have technical expertise in one or more domains
          (CS, EE, ME including fabrication). The position involves managing research within the group, guiding junior researchers
          and students, and coordinating collaborative projects with corporate sponsors.
        </p>
        <p className="textblock">
          To apply, please send us a link to a portfolio of past work (projects, publications, patents, etc.), a full CV, and a
          description of technical skills, experiences and research interests. Please email all materials to
          tangible-postdoc [at] media.mit.edu with the subject &quot;Postdoc Application&quot;. Self-funded applicants through scholarships or
          fellowships will receive priority consideration.
        </p>

      </div>
    </div>
    <h2 name="faq">Frequently Asked Questions</h2>
    <p className="box">
      <strong>How do I apply?</strong><br />
      Submit an application through the main MIT Media Lab admissions process (<a href="https://www.media.mit.edu/admissions/how-to-apply">https://www.media.mit.edu/admissions/how-to-apply</a>) and select Tangible Media Group as one of your choices.
    </p>
    <p className="box">
      <strong>What’s the timeline for applications?</strong><br />
      Applications are due in December, and decisions are usually released by the end of March (<a href="https://www.media.mit.edu/admissions">https://www.media.mit.edu/admissions</a>).
    </p>
    <p className="box">
      <strong>What kind of applicants does the Tangible Media Group look for?</strong><br />
      Our group is first and foremost a research group in human computer interaction (HCI), and our members are passionate about the future of HCI. Whether or not you have HCI experience, you should be familiar with prior work in the area and have ideas of interactions you would like to explore.<br /><br />
      Being able to build functioning artifacts that demonstrate your ideas is key. In general, we look for applicants with both engineering (computer programming, electrical, mechanical) and design (interaction, industrial/product, architecture) backgrounds. A good balance of fluency in both technology and design is ideal, but a very strong background in one can offset weaker knowledge of the other, provided the applicant can demonstrate the ability to pick up new skills quickly.<br /><br />
      In addition, we value strong communication skills, both oral and written, as our work is regularly presented to visitors and submitted to major conferences and journals. The ability to think on your feet and explain your ideas clearly is essential.
    </p>
    <p className="box">
      <strong>How do I demonstrate my skills in my application?</strong><br />
      Your online portfolio is your most important tool to demonstrate your abilities. You may include as many projects as you choose in the portfolio, but be sure to especially highlight work that demonstrate your creativity, originality and technical competency. Present your work clearly and concisely with pictures, videos and publications if available. If you include a group project, please be clear about your exact contribution. Please, also reference any academic publications you have at HCI conferences such as CHI, UIST, CSCW, SIGGRAPH or TEI.
    </p>
    <p className="box">
      <strong>I already have a Masters. Can I apply directly to the PhD?</strong><br />
      To pursue a PhD in the Tangible Media Group, it is required by the MAS program that all students begin with the 2-year
      master’s program at the Media Lab. This is our rule, even if you have multiple master’s from other institutions:
      <a href="https://www.media.mit.edu/graduate-program/apply/">https://www.media.mit.edu/graduate-program/apply/</a>
    </p>
    <p className="box">
      <strong>May I come visit the group and present my work?</strong><br />
      We select which applicants will be interviewed based on the review of their online portfolio and CV. Given the current
      COVID-19 pandemic, we will only conduct remote interviews via video conferencing.
      <br /><br />
      (The Media Lab as a whole organizes an open-house for prospective students in the fall. Check the main website for
      information: <a href="https://www.media.mit.edu/events/mas-open-house/">https://www.media.mit.edu/events/mas-open-house/)</a>
    </p>
    <p className="box">
      <strong>What are the portfolio requirements for Tangible Media?</strong><br />
      We require an interactive, online internet portfolio for applicants to be considered seriously. The portfolio should
      integrate hyper-linked pages, images, and videos. On top of that, we want to evaluate the aesthetics and usability of
      their website design.
    </p>
  </Layout>
);

export default ContactAdmission;
