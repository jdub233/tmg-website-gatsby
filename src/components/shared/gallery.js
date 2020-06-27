import React from "react";

export default ( {assets} ) => (
    <div>
        {assets.map(({ fieldData: { AssetID, Title, sc_asset_relative_url } }) => (
            <img
                key={AssetID}
                src={`${process.env.MEDIA_LIBRARY}/${sc_asset_relative_url}?height=60`}
                alt={Title}
            />
        ))}
    </div>
);
