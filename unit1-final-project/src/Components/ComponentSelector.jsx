import { useState } from 'react';
import './ComponentSelector.css';

//This will incorporate useState in order to handle dynamically rendering the CV components. 
function ComponentSelector() {
    const [openWork, setOpenWork] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openMisc, setOpenMisc] = useState(false);

    return (
        <div className="sidenav">
            <button onClick={() => setOpenWork(prevValue => !prevValue)} className="dropdown-btn">Work History
                <i className="caret-down"></i>
            </button>
            {openWork && (
            <div className="dropdown-container">
                <label>
                    <input type="checkbox" />
                    Professional
                </label>
                <label>
                    <input type="checkbox" />
                    Service
                </label>
            </div>
            )}
            <label>
                <input type="checkbox" />
                Education
            </label>
            <button onClick={() => setOpenSkills(prevValue => !prevValue)} className="dropdown-btn">Technical Skills
                <i className="caret-down"></i>
            </button>
            {openSkills && (
            <div className="dropdown-container">
                <label>
                    <input type="checkbox" />
                    Technical Skills
                </label>
                <label>
                    <input type="checkbox" />
                    Licenses & Certifications
                </label>
            </div>
            )}
            <button onClick={() => setOpenMisc(prevValue => !prevValue)} className="dropdown-btn">Miscellaneous
                <i className="caret-down"></i>
            </button>
            {openMisc && (
            <div className="dropdown-container">
                <label>
                    <input type="checkbox" />
                    Volunteering
                </label>
                <label>
                    <input type="checkbox" />
                    Interests
                </label>
            </div>
            )}
            <label>
                <input type="checkbox" />
                Writing
            </label>
            <label>
                <input type="checkbox" />
                Photos
            </label>
        </div>
    );
}

export default ComponentSelector;

