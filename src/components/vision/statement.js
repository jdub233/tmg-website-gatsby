import React, { useState } from "react";

import VisionHeadline from "./visionHeadline";

import "./statement.scss";
import gui from "../../img/vision-image-gui.jpg";
import tui from "../../img/vision-image-tui.jpg";
import ra from "../../img/vision-image-ra.jpg";

export default () => {
    const phases = [
        'GUI',
        'TUI',
        'Radical Atoms',
    ];

    const phaseImages = [
        gui,
        tui,
        ra,
    ];

    const [phase, setPhase] = useState('TUI');

    const buttons = phases.map((x) => (
        <button 
            key={x} 
            onClick={() => setPhase(x)} 
            className={`slides-nav-item${(phase === x) ? '-selected' : ''}`}
        >{x}</button>
    ));

    return (
        <div className="vision-statement">
            <VisionHeadline />
            <div className="illustration">
                <div className="illustration-slides">
                    <div className="atoms">Atoms</div>
                    <div className="bits">Bits</div>
                    <div className="slides-nav">
                        {buttons}
                    </div>
                    <img alt={phase} src={phaseImages[(phases.findIndex(a => a === phase))]} />
                </div>
                <div className="illustration-caption">
                    A <strong>Graphical User Interface</strong> only lets us see information and interact with it indirectly, as if we were looking through the surface of the water to interact with the forms below.
                </div>
            </div>
        </div>
    )
}
