import React, { useState } from "react";
import "./citation.scss";

export default ({ fieldData: { Download_URL, Title, Citation, DOI_URL, Abstract }} ) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="citation">
            <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${Download_URL}`}>
                <h4>{Title}</h4>
            </a>
            <p>{Citation}</p>
            {DOI_URL !== '' &&
                <div className="citation-doi">DOI: {DOI_URL}</div>
            }
            <h5>
                <button className="show-abstract" onClick={() => setShowAbstract(!showAbstract)}> 
                    Abstract <span className="show-abstract-icon">{showAbstract ? '-' : '+'}</span>
                </button>
            </h5>
            <div className={`citation-abstract${ !showAbstract ? '-hide' : ''}`}>{Abstract}</div>
        </div>
    );
};
