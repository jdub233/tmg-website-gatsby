import React, { useState } from "react";

import "./gallery.scss"

export default ({ assets, name }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="gallery">
      <h4>{name}</h4>
      <img
        className="gallery-main"
        src={`${process.env.MEDIA_LIBRARY}/${assets[current].fieldData.sc_asset_relative_url}?width=780`}
        alt={assets[current].fieldData.Title}
        onClick={ () => setCurrent( (current + 1) % assets.length ) }
      />
      <div className="gallery-thumbnails">
        {assets.map(({ fieldData: { AssetID, Title, sc_asset_relative_url } }, index) => (
          <button onClick={() => setCurrent(index)} className="thumbnail">
            <img
              key={AssetID}
              src={`${process.env.MEDIA_LIBRARY}/${sc_asset_relative_url}?height=60`}
              alt={Title}
            />
          </button>
        ))}
      </div>
    </div>
  )
};
