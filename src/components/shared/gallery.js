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
      <h4>{name}</h4>
      <div 
        onClick={() => setCurrent((current + 1) % assets.length)}
        role="presentation"
      >
        <img
          className="gallery-main"
          src={`${process.env.MEDIA_LIBRARY}/${assets[current].fieldData.sc_asset_relative_url}?width=780`}
          alt={assets[current].fieldData.Title}
        />
      </div>
      <div className="gallery-thumbnails">
        {assets.map(({ fieldData: { AssetID, Title, sc_asset_relative_url } }, index) => (
          <button key={AssetID} onClick={() => setCurrent(index)} className="thumbnail">
            <img
              key={AssetID}
              src={`${process.env.MEDIA_LIBRARY}/${sc_asset_relative_url}?height=60`}
              alt={Title}
            />
          </button>
        ))}
      </div>
      <GalleryNav years={assetIndex} setYear={setCurrentZeroIndexed} currentYear={current + 1} showPrevNext={true} />
    </div>
  )
};
