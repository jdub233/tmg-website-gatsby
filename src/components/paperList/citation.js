import React, { useState } from "react";
import "./citation.scss";

export default ( {fieldData} ) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="citation">
            <a href={`${process.env.MEDIA_LIBRARY}/${fieldData.Download_URL}`}>
                <h4>{fieldData.Title}</h4>
                <p>{fieldData.Citation}</p>
                <p>DOI: {fieldData.DOI_URL}</p>
            </a>
        </div>
    );
};
