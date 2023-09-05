import { NavLink } from "react-router-dom";
import image from '../assets/man.jpg'
import styles from '../style.module.css';
const Navbar = ({sidebar, setSidebar}) => {
    const reset = () =>{
        setSidebar(!sidebar)
    }
    return (
        <>
        <header className={`${sidebar? 'open': ''}`}>
            <p className="pcross text-light"><i class="fa-solid fa-xmark d-inline-block fs-3 p-3" onClick={reset}></i></p>
            <div className="top-menu">
                <div className="img"><img src={image} alt="profile" /></div>
                <h2>Abbas Sarwar</h2>
                <ul className="top-social-menu">
                    <li><a href="https://www.linkedin.com/in/abbassarwar/"><i className="fa-brands fa-linkedin-in" /></a></li>
                    <li><a href="https://github.com/AbbasSarwar?"><i className="fa-brands fa-github" /></a></li>
                    <li><a href="https://twitter.com/Abbas_sDev"><i className="fa-brands fa-xing" /></a></li>
                </ul>
            </div>
            <nav>
                <ul className="menu">
                    <li><NavLink onClick={reset} to="/"><i className="fa-solid fa-house icon" /> <span className={styles.textsize}>Home</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/About"><i className="fa-solid fa-user icon" /> <span className={styles.textsize}>About</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Resume"><i className="fa-solid fa-file icon" /> <span className={styles.textsize}>Resume</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Portfolio"><i className="fa-solid fa-layer-group icon" /> <span className={styles.textsize}>Portfolio</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Services"><i className="fa-solid fa-server icon" /> <span className={styles.textsize}>Services</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Contact"><i className="fa-solid fa-envelope icon" /> <span className={styles.textsize}>Contact</span></NavLink></li>
                </ul>
            </nav>
            <div className="footer">
                <p>Designed by Abbas Sarwar</p>
            </div>
        </header>
        </>
    )
}

export default Navbar;