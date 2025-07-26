import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css';
import crewmatePeeking from '../assets/crewmate-peeking.png'

const SideNav = () => {
    return (
        <div className="sidenav">
            <div className="sidenav-links">
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/new"><h3>Create a Crewmate!</h3></Link>
                <Link to="/gallery"><h3>Crewmate Gallery</h3></Link>
            </div>
            <div className="sidenav-image">
                <img src={crewmatePeeking} alt="crewmate peeking" className="crewmate-peeking" /> 
            </div>
        </div>
    )
}

export default SideNav;