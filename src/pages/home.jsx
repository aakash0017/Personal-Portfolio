import React from 'react'
import Header from '../components/header'
import { Card, CardGroup } from 'react-bootstrap'
import potrait from '../assets/potrait.png'
import styles from './home.module.css'
import FadeIn from 'react-fade-in'


function Home() {
    return (
        <>
        <FadeIn delay = {100}><Header /></FadeIn>
            
            <FadeIn delay = {200}>
                <div className={styles.container}>
                    <div className={styles.card}>hello</div>
                    <FadeIn delay = {100}><div className={styles.card}><img src={potrait} className={styles.potrait} /></div></FadeIn>
                    <div className={styles.card}>hello</div>
                </div>
            </FadeIn>

        </>
    )
}

export default Home