import React, { useState } from "react";

import GalleryNav from "../filters/yearNav";

import "./gallery.scss"

export default ({ assets, name }) => {
  const [current, setCurrent] = useState(0);

  // Compensate for zero indexing in the rest of the component.
  const setCurrentZeroIndexed = (x) => {
    setCurrent( x - 1 );
  }

  // Fast way to generate an integer array that can be sent to the existing YearNav component.
  const assetIndex = Array.from(Array(assets.length + 1).keys()).slice(1);

  return (
    <div className="gallery">
      <h3>{name}</h3>
      <div
        className="gallery-main"
        onClick={() => setCurrent((current + 1) % assets.length)}
        role="presentation"
      >
        <img
          src={`${process.env.MEDIA_LIBRARY}/${assets[current].fieldData.RelativeURL}?width=780`}
          alt={assets[current].fieldData.Title}
        />
      </div>
      <div className="gallery-thumbnails">
        {assets.map(({ fieldData: { AssetID, Title, RelativeURL } }, index) => (
          <button key={AssetID} onClick={() => setCurrent(index)} className="thumbnail">
            <img
              className={( current === index ) ? 'selected' : ''}
              key={AssetID}
              src={`${process.env.MEDIA_LIBRARY}/${RelativeURL}?height=60`}
              alt={Title}
            />
          </button>
        ))}
      </div>
      <GalleryNav years={assetIndex} setYear={setCurrentZeroIndexed} currentYear={current + 1} showPrevNext={true} />
    </div>
  )
};
