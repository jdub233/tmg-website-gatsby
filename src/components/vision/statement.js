import React from "react";

import VisionHeadline from "./visionHeadline";

import "./statement.scss";
import gui from "../../img/vision-image-gui.jpg";

export default () => {
    return (
        <div className="vision-statement">
            <VisionHeadline />
            <div className="illustration">
                <div className="illustration-slides">
                    <div className="atoms">Atoms</div>
                    <div className="bits">Bits</div>
                    <div className="slides-nav">
                        <button className="slides-nav-item-selected">GUI</button>
                        <button className="slides-nav-item">TUI</button>
                        <button className="slides-nav-item">Radical Atoms</button>
                    </div>
                    <img alt="TUI iceberg" src={gui} />
                </div>
                <div className="illustration-caption">
                    A <strong>Graphical User Interface</strong> only lets us see information and interact with it indirectly, as if we were looking through the surface of the water to interact with the forms below.
                </div>
            </div>
        </div>
    )
}
