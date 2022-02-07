/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import VisionHeadline from './visionHeadline';

import './statement.scss';
import gui from '../../img/vision-image-gui.jpg';
import tui from '../../img/vision-image-tui.jpg';
import ra from '../../img/vision-image-ra.jpg';

function GUICaption() {
  return (
    <div className="illustration-caption">
      A <strong>Graphical User Interface</strong> only lets us see information and interact with it indirectly, as if we were looking through the surface of the water to interact with the forms below.
    </div>
  );
}

function TUICaption() {
  return (
    <div className="illustration-caption">
      A <strong>Tangible User Interface</strong> is like an iceberg: there is a portion of the digital that emerges beyond the surface of the water - into the physical realm - so that we may interact directly with it.
    </div>
  );
}

function RACaption() {
  return (
    <div className="illustration-caption">
      <strong>Radical Atoms</strong> describes our vision for the future of interaction, in which all digital information has physical manifestation so that we can interact directly with it - as if the iceberg had risen from the depths to reveal its sunken mass.
    </div>
  );
}

function Statement({ home = false }) {
  const phases = ['GUI', 'TUI', 'Radical Atoms'];
  const phaseImages = [gui, tui, ra];
  const phaseCaptions = [<GUICaption />, <TUICaption />, <RACaption />];

  const [phase, setPhase] = useState('TUI');
  const phaseIndex = phases.findIndex((a) => a === phase);

  const buttons = phases.map((x) => (
    <button
      type="button"
      key={x}
      onClick={() => setPhase(x)}
      className={`slides-nav-item${(phase === x) ? '-selected' : ''}`}
    >
      {x}
    </button>
  ));

  return (
    <div className="vision-statement">
      <div>
        <VisionHeadline />
        {home
          && (
            <>
              <h3 className="more">
                <Link className="more-link" to="/vision/">
                  More on our vision +
                </Link>
              </h3>
              <div className="contact-us">
                <Link to="/contact-admission/">
                  Contact us
                </Link>
                <Link to="/contact-admission/">
                  Admission/FAQ
                </Link>
              </div>
            </>
          )}
      </div>
      <div className="illustration">
        <div className="illustration-slides">
          <div className="atoms">Atoms</div>
          <div className="bits">Bits</div>
          <div className="slides-nav">
            {buttons}
          </div>
          <img alt={phase} src={phaseImages[phaseIndex]} />
        </div>
        <SwitchTransition>
          <CSSTransition
            key={phase}
            timeout={200}
            classNames="illustration-caption"
          >
            {phaseCaptions[phaseIndex]}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

Statement.propTypes = { home: PropTypes.bool };
Statement.defaultProps = { home: false };

export default Statement;
