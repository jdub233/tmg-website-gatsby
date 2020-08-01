import React from "react";

import VisionHeadline from "./visionHeadline";

import "./statement.scss";
import gui from "../../img/vision-image-gui.jpg";

export default () => {
    return (
        <div className="vision-statement">
            <VisionHeadline />
            <div className="illustration">
                <img alt="TUI iceberg" src={gui} />
                <div className="illustration-caption">
                    A <strong>Graphical User Interface</strong> only lets us see information and interact with it indirectly, as if we were looking through the surface of the water to interact with the forms below.
                </div>
            </div>
        </div>
    )
}
