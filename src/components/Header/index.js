import React from 'react';

import styles from './style.css';

const Header = props => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerMenu}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                social media links
            </div>
        </header>
    )
}

export default Header;