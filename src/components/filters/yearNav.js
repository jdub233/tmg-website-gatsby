import React from "react";

import "./yearNav.scss";

export default ({ years, setYear, currentYear }) => (
    <ul className="yearNav">
        {years.map((y) => (
            <li>
                <a
                    href="#" onClick={() => setYear(y)}
                    className={`year${(y === currentYear) ? '-selected' : ''}`}
                >
                    {y}
                </a>
            </li>
        ))}
    </ul>
);