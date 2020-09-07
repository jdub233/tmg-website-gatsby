import React from "react";
import { Link } from "gatsby";

import "./projectBoxes.scss";

const NameSpan = ( {name} ) => {
    if (name === 'Programmable Droplets for Interaction') { return <span>Programmable Droplets...</span>  }
    if (name === 'TRANSFORM as Dynamic and Adaptive Furniture') { return <span>TRANSFORM as Dynamic...</span> }
    if (name === 'Weight/Volume Changing UI') { return <span>Weight/Volume Changing UI</span> }

    return <span>{name.length > 18 ? `${name.substring(0, 17)}...` : name}</span>
}

export default ({ projects }) => (
    <div className="projectBoxes">
        {projects.map((node) => (
            <div className="projectItem" key={node.id}>
                <Link className="projectBadge" to={`/project/${node.fieldData.slug}`}>
                    <img
                        alt="{node.fieldData.Name}"
                        src={`${process.env.GATSBY_MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
                    />
                    <p className="projectBadge-title">
                        <NameSpan name={node.fieldData.Name} />
                    </p>
                </Link>
            </div>
        ))}
    </div>
);
