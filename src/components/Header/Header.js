import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './header.css';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.appname}>
            <h1 className={styles.apptitle}>Contacts Book</h1>
            <p className={styles.appsubtitle}>Save your mobile contacts</p>
        </div>
        <div>
            <ul className="nav">
                <li className={`nav-item ${styles.nav_full}`}>
                    <NavLink activeClassName={styles.linkactive} className={`nav-link ${styles.navlink}`} to="/" exact>
                        <Icon name="users"></Icon> Contacts
                    </NavLink>
                </li>
                <li className={`nav-item ${styles.nav_full}`}>
                    <NavLink activeClassName={styles.linkactive} className={`nav-link ${styles.navlink}`} to="/new-contact">
                        <Icon name="user-plus"></Icon> New Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;