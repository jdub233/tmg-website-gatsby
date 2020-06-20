import React from "react";

export default ({ mixedMarkup, className }) => {
    const normalizedMarkup = mixedMarkup.split('\r')
        .filter(x => x !== "")
        .map(graf => <p dangerouslySetInnerHTML={{ __html: graf }} />);

    return (
        <div className={className}>{normalizedMarkup}</div>
    );
}