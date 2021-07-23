import React from 'react'
import Header from '../components/header'
import { Card, CardGroup } from 'react-bootstrap'
import potrait from '../assets/potrait.png'
import styles from './home.module.css'
import FadeIn from 'react-fade-in'


function Home() {
    return (
        <div className = {styles.home}>
        <Header />
            
            <FadeIn delay = {200} transitionDuration = {3000}>
                <div className={styles.container}>
                    <div className={styles.card}>hello</div>
                    <FadeIn delay = {100}><div className={styles.card}><img src={potrait} className={styles.potrait} /></div></FadeIn>
                    <div className={styles.card}>hello</div>
                </div>
            </FadeIn>

        </div>
    )
}

export default Home