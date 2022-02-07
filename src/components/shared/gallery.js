import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GalleryNav from '../filters/navBar';
import Modal from './galleryModal';

import './gallery.scss';

function Gallery({ assets, name }) {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Compensate for zero indexing in the rest of the component.
  const setCurrentZeroIndexed = (x) => {
    setCurrent(x - 1);
  };

  // Fast way to generate an integer array that can be sent to the NavBar component.
  const assetIndex = Array.from(Array(assets.length + 1).keys()).slice(1);

  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="gallery-header-titles">
          <h3>{name}</h3>
          <div className="image-title">{assets[current].fieldData.Title}</div>
        </div>

        <button type="button" onClick={() => setShowModal(!showModal)} className="image-download-link">Download high resolution</button>
      </div>
      <div
        className="gallery-main"
        onClick={() => setCurrent((current + 1) % assets.length)}
        role="presentation"
      >
        <img
          src={`${process.env.GATSBY_MEDIA_LIBRARY}/${assets[current].fieldData.RelativeURL}?width=780`}
          alt={assets[current].fieldData.Title}
        />
      </div>
      <div className="gallery-thumbnails">
        {assets.map(({ fieldData: { AssetID, Title, RelativeURL } }, index) => (
          <button type="button" key={AssetID} onClick={() => setCurrent(index)} className="thumbnail">
            <img
              className={(current === index) ? 'selected' : ''}
              key={AssetID}
              src={`${process.env.GATSBY_MEDIA_LIBRARY}/${RelativeURL}?height=60`}
              alt={Title || `${name} item ${current + 1}`}
            />
          </button>
        ))}
      </div>
      <GalleryNav
        elements={assetIndex}
        setElement={setCurrentZeroIndexed}
        currentElement={current + 1}
        showPrevNext
      />
      <Modal
        show={showModal}
        setShow={setShowModal}
        relativeURL={assets[current].fieldData.RelativeURL}
      />
    </div>
  );
}

Gallery.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default Gallery;
