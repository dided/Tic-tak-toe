import React from 'react';
import GameContainer from './GameContainer';
import styles from '../styles/main.scss';


const App = () => {
    return (
        <section className={styles.container}>
            <GameContainer />
        </section>
    )
}

export default App;

