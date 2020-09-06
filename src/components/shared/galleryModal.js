import React from "react";
import "./galleryModal.scss";

export default ({ show, setShow }) => (
    <div
        className="modal"
        style={{display: show ? 'block' : 'none' }}
        onClick={ () => setShow(!show) }
    >
        <div className="modal-main">
            <h3>Copyright &amp; Usage policy</h3>
            <p>By downloading this picture, you accept that it is licensed to you under the following conditions:</p>
            <p>This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</p>
        </div>
    </div>
);
