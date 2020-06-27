import React from "react";

export default ({ assets, name }) => (
  <div className="gallery">
    <h4>{name}</h4>
    <img
      src={`${process.env.MEDIA_LIBRARY}/${assets[0].fieldData.sc_asset_relative_url}?width=780`}
      alt={assets[0].fieldData.Title}
    />
    <div className="gallery-thumbnails">
      {assets.map(({ fieldData: { AssetID, Title, sc_asset_relative_url } }) => (
        <img
          key={AssetID}
          src={`${process.env.MEDIA_LIBRARY}/${sc_asset_relative_url}?height=60`}
          alt={Title}
        />
      ))}
    </div>
  </div>
);
