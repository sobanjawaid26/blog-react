import React from 'react';

import styles from './style.css';
import Card from "../UI/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Hero = props => {
    return (
        <div>
            <Card>
                <div style={{padding: '50px'}}>
                    <Logo/>
                </div>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Hero;