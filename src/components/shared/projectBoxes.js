import React from "react";
import { Link } from "gatsby";

import "./projectBoxes.scss";

export default ({ projects }) => (
    <div className="projectBoxes">
        {projects.map((node) => (
            <div className="projectItem" key={node.id}>
                <Link className="projectBadge" to={`/project/${node.fieldData.slug}`}>
                    <img
                        alt="{node.fieldData.Name}"
                        src={`${process.env.MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
                    />
                    <p className="projectBadge-title">
                        <span>{node.fieldData.Name.length > 18 ? `${node.fieldData.Name.substring(0, 17)}...` : node.fieldData.Name}</span>
                    </p>
                </Link>
            </div>
        ))}
    </div>
);
