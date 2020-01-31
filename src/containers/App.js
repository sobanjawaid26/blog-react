import React, { Component } from 'react';

import styles from './App.css';
import Home from "./Home";
import Header from "../components/Header";
import Hero from "../components/Hero";


class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    }


    render () {
        console.log('[App.js] render')
        return (
            <div className={styles.App}>
                <Header />
                <Hero/>
                <Home/>
            </div>
        );
    }
}

export default App;