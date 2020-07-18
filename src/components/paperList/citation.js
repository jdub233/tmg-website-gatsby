import React, { useState } from "react";
import "./citation.scss";

export default ( {fieldData} ) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="citation">
            <a href={`${process.env.MEDIA_LIBRARY}/${fieldData.Download_URL}`}>
                <h4>{fieldData.Title}</h4>
            </a>
            <p>{fieldData.Citation}</p>
            <p className="citation-doi">DOI: {fieldData.DOI_URL}</p>
            <h5 onClick={() => setShowAbstract(!showAbstract)}>Abstract { showAbstract ? '-' : '+' }</h5>
            <div className={`citation-abstract${ !showAbstract ? '-hide' : ''}`}>{fieldData.Abstract}</div>
        </div>
    );
};
