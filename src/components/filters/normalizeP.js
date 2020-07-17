import React from "react";

export default ({ mixedMarkup, className }) => {
    // Renders carriage returns to <p> tags.
    const normalizedMarkup = mixedMarkup.split('\r')
        .filter(x => x !== "")
        .map((graf, index) => <p key={index} dangerouslySetInnerHTML={{ __html: graf }} />);

    return (
        <div className={className}>{normalizedMarkup}</div>
    );
}
