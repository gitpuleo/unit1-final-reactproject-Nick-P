import raysplace from '../assets/raysplace.jpg';
import './License.css';


function License() {

    return(
        <div className="main-div">
            <h1>GNU Affero General Public License version 3 (AGPLv3)</h1>
            <h2>Explanation of Copyleft licensing:</h2>
            <p>Copyleft is a form of licensing that ensures all future versions of related software remain free and open.</p>
            <p>Feel free to modify and use this program as you see fit--and feel free to keep it free.</p>
            <p>In fact, you are obligated to.</p>
            <br/>
            <p className="download-paragraph">Click on Ray's glasses to download: </p>
            <a href="https://github.com/gitpuleo/unit1-final-reactproject-Nick-P" target="_blank">
            <img 
            alt="Click on the picture to visit the project GitHub" 
            src={raysplace} 
            className="img-class"
            width="400" height="400"
            />
            </a>
        </div>
    )
}

export default License;
