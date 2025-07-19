import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    
    return(
        <div className="navbar">
            <nav>
                <Link className="active" to="/">Landing Page</Link>
                <Link to="/About">About</Link>
                <Link to="/License">License</Link>
                <Link to="/Contact">Contact Me</Link>
            </nav>
        </div>
    )
}

export default NavBar;
