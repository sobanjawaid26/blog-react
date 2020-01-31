import React from 'react';

import styles from './style.css';

const Navbar = props => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className={styles.search}>
                <input type="text" placeholder="Search"/>
                <img src={require('../../assets/icons/search.png')} alt="Search"/>
            </div>
        </div>
    )
}

export default Navbar;