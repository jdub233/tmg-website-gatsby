import React from "react";
import "./galleryModal.scss";

export default ({ show, setShow, relativeURL }) => (
    <div
        className="modal"
        style={{display: show ? 'block' : 'none' }}
    >
        <div className="modal-main">
            <h3>Copyright &amp; Usage policy</h3>
            <p>By downloading this picture, you accept that it is licensed to you under the following conditions:</p>
            <p>
                <a style={{float: 'left', display: 'block', margin: '.4em 1em 0 0'}}
                    rel="license" 
                    href="https://creativecommons.org/licenses/by-nc-nd/3.0/"
                >
                    <img 
                        alt="Creative Commons License" 
                        style={{borderWidth: 0}}
                        src="https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png" 
                    />
                </a>This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/3.0/">Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</a>.
            </p>
            <p>
                &copy; 2012 Tangible Media Group / MIT Media Lab
            </p>
            <div className="download-options">
                <button onClick={() => setShow(false)}>No, thanks</button>
                <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${relativeURL}`}>
                    Accept &amp; download
                </a>
            </div>
        </div>
    </div>
);
