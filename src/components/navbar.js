import { NavLink } from "react-router-dom";
import styles from '../style.module.css';
import data from './data.json';
const Navbar = ({sidebar, setSidebar}) => {
    const {socials, info} = data;
    const social = Object.keys(socials);
    const reset = () =>{
        setSidebar(!sidebar)
    }
    return (
        <>
        <header className={`${sidebar? 'open': ''} col-6 col-md-3`}>
            <p className="pcross text-light"><i className="fa-solid fa-xmark d-inline-block fs-3 p-3" onClick={reset}></i></p>
            <div className="top-menu">
                <div className="img"><img src={info.picture} alt="profile" /></div>
                <h2>Abbas Sarwar</h2>
                <ul className="top-social-menu">
                    {
                        social.map((item) => {
                            return (<li key={item}><a href={socials[item].link}><i className={socials[item].class}></i></a></li>)
                        })
                    }
                </ul>
            </div>
            <nav>
                <ul className="menu">
                    <li><NavLink onClick={reset} to="/"><i className="fa-solid fa-house icon" /> <span className={styles.textsize}>Home</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/About"><i className="fa-solid fa-user icon" /> <span className={styles.textsize}>About</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Resume"><i className="fa-solid fa-file icon" /> <span className={styles.textsize}>Resume</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Portfolio"><i className="fa-solid fa-layer-group icon" /> <span className={styles.textsize}>Portfolio</span></NavLink></li>
                    <li><NavLink onClick={reset} to="/Stacks"><i className="fa-solid fa-server icon" /> <span className={styles.textsize}>Stacks</span></NavLink></li>
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