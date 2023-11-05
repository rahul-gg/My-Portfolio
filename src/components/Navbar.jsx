import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const Navbar=()=>{
   
    return(
        <nav>
         <FontAwesomeIcon id='nav-logo' icon={faCode} />
         <ul className="nav-list">
            <li>About</li>
            <li>Resume</li>
            <li>Contact</li>
         </ul>
        </nav>
    )
}

export default Navbar