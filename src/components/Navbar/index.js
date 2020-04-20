import React from "react";
import styles from './Nav.module.scss';
import {NavLink} from "react-router-dom";
import Items from "./NavBarUserItems";

const Nav= () => {
    return(
    <nav className={styles.nav}>
        <ul>
            <li className={styles.item}>
                <NavLink activeClassName={styles.activeLink} to="/profile">Profile</NavLink>
                <NavLink activeClassName={styles.activeLink} to="/chat">Chat</NavLink>
                <NavLink activeClassName={styles.activeLink} to="/news">News</NavLink>
                <NavLink activeClassName={styles.activeLink} to="/music">Music</NavLink>
                <NavLink activeClassName={styles.activeLink} to="/settings">Settings</NavLink>
            </li>
        </ul>
        <Items/>
    </nav>
    )
};

export default Nav;
