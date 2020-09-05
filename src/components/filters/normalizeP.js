import React from "react";

export default ({ mixedMarkup, className }) => {
    // Renders double carriage returns to <p> tags and single carriage returns to <br> tags.
    const normalizedMarkup = mixedMarkup.split('\r\r')
        .filter(x => x !== "")
        .map( (graf) => graf.replace(/\r/gi, '<br>') )
        .map((graf, index) => <div style={{ marginBottom: "20px"}} key={index} dangerouslySetInnerHTML={{ __html: graf }} /> );

    return (
        <div className={className}>{normalizedMarkup}</div>
    );
}
