import React from 'react'
import Header from '../components/header'
import { Card, CardGroup } from 'react-bootstrap'
import potrait from '../assets/potrait.png'
import styles from './home.module.css'
import FadeIn from 'react-fade-in'
import Button from 'react-bootstrap/Button'


function Home() {
    return (
        <div className={styles.home}>
            <Header />

            <FadeIn delay={100} transitionDuration={1000}>

                <div className={styles.intro}>
                    <div ></div>
                    <div className={styles.card}>
                        <FadeIn delay={100} transitionDuration={3000}>

                            <p className={styles.mynameis}>my name is...</p>
                            <FadeIn delay={100} transitionDuration={3000}>
                                <h1 className={styles.name}>Aakash Bhatnagar</h1>
                            </FadeIn>
                            <FadeIn delay={100} transitionDuration={3000}>
                                <h2 className={styles.tagline}>I try to build things</h2>
                            </FadeIn>

                            <FadeIn delay={100} transitionDuration={3000}>
                                <p className={styles.description}>
                                    I'm a student currently persuing Btech in computer Science and Engineering,
                                    I have a keen interest in machine learning, Artificial intelligence
                                    and DevOps. Currently I'm working on some multiobjective optimisation algoritms
                                    like NSGA - 2
                                </p>
                            </FadeIn>

                            <FadeIn delay={100} transitionDuration={3000}>
                                <Button href="mailto:akashbharat.bhatnagar@gmail.com" color="none" style={{ backgroundColor: '#fafafa', color: 'black' }}>
                                    Get in Touch
                                </Button>
                            </FadeIn>


                        </FadeIn>
                    </div>


                    {/* <FadeIn delay = {100}><div className={styles.card}><img src={potrait} className={styles.potrait} /></div></FadeIn> */}
                </div>
            </FadeIn>

            <div className={styles.aboutme}>
                <div></div>
                <div className = {styles.card}>
                    <h3 classNamev = {styles.aboutmeHeading}>About me</h3>
                </div>

            </div>

        </div>
    )
}

export default Home