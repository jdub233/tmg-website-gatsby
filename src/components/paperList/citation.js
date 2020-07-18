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
            <div className="citation-doi">DOI: {fieldData.DOI_URL}</div>
            <h5>
                <button className="show-abstract" onClick={() => setShowAbstract(!showAbstract)}> 
                    Abstract <span className="show-abstract-icon">{showAbstract ? '-' : '+'}</span>
                </button>
            </h5>
            <div className={`citation-abstract${ !showAbstract ? '-hide' : ''}`}>{fieldData.Abstract}</div>
        </div>
    );
};
