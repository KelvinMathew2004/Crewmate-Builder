import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <div className="sidenav-links">
                <Link to="/"><h2>Home</h2></Link>
                <Link to="/new"><h2>Create a Crewmate!</h2></Link>
                <Link to="/gallery"><h2>Crewmate Gallery</h2></Link>
            </div>

        </div>
    )
}

export default SideNav;