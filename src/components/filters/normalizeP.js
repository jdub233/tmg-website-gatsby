/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
// Paragraphs don't have a natural index other that the order, and the order should never change.
// We need to rerender valid tags inside each paragraph, so we need to dangerously set the HTML.

import React from 'react';
import PropTypes from 'prop-types';

function NormalizeP({ mixedMarkup, className }) {
  // Search for iframes and wrap them in a div with a class of 'iframe-container'.
  // This is a hack to make iframes responsive.
  // https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
  const iframeMarkup = mixedMarkup
    .replaceAll(/<iframe/gi, '<div class="iframe-container"><iframe')
    .replaceAll(/<\/iframe>/gi, '</iframe></div>');

  // Renders double carriage returns to <p> tags and single carriage returns to <br> tags.
  const splitMarkup = iframeMarkup.split('\r\r')
    .filter((x) => x !== '')
    .map((graf) => graf.replace(/\r/gi, '<br>'));

  const normalizedMarkup = splitMarkup.map((graf, index) => (
    <div
      style={{ marginBottom: '20px' }}
      key={index}
      dangerouslySetInnerHTML={{ __html: graf }}
    />
  ));

  return <div className={className}>{normalizedMarkup}</div>;
}

NormalizeP.propTypes = {
  mixedMarkup: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default NormalizeP;
