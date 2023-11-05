import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
    return (
        <div id="hero">
            <div id="hero-content">
            <h1>I'm Rahul , <br />Glad to See You!</h1>
            <p id="hero-desc">I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
            <h4 id="connect">LET'S CONNECT</h4>
            <ul>
                <li><a href="https://twitter.com/rahhulgg"><FontAwesomeIcon className='hero-logo' icon={faTwitter} /></a></li>
                <li><a href="https://github.com/rahul-gg"><FontAwesomeIcon className='hero-logo' icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/rahulsinghal2105/"><FontAwesomeIcon className='hero-logo' icon={faLinkedin} /></a></li>
            </ul>
            </div>
        </div>
    )
}

export default Hero