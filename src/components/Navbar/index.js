import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav= () => {
    return(
    <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink activeClassName={styles.activeLink} to="/profile">Profile</NavLink>
        </div>
        <div className={styles.item}><NavLink activeClassName={styles.activeLink} to="/chat">Chat</NavLink></div>
        <div className={styles.item}><NavLink activeClassName={styles.activeLink} to="/news">News</NavLink></div>
        <div className={styles.item}><NavLink activeClassName={styles.activeLink} to="/music">Music</NavLink></div>
        <div className={styles.item}><NavLink activeClassName={styles.activeLink} to="/settings">Settings</NavLink></div>
    </nav>
    )
}

export default Nav;
