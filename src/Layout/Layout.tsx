import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from './Layout.module.css';

export default function Layout():JSX.Element{
    return (
        <>
            <header>
                <h1 className={styles.h1}>Random images of animals</h1>
                <NavBar />
            </header>
            
            <div>
                < Outlet  />
            </div>

            <footer>
                <p>  </p>
            </footer>
        </>
    )
}