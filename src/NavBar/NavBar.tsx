import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';


export default function NavBar():JSX.Element{
    return (
        <nav className={styles.container}>
            <NavLink className={styles.link} to="FoxCard">Fox</NavLink>
            <NavLink className={styles.link} to="QuokkaCard">Quokka</NavLink>
            <NavLink className={styles.link} to="DogCard">Dog</NavLink>
        </nav>
    );
}