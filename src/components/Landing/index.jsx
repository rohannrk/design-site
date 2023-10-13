'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton';

export default function Home() {



  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.textcontainer}>
            <div className={styles.herotext}>
              <div className={styles.secondarytext}>
                Hi I am Rohan,
              </div>
              <div className={styles.primarytext}>
                Digital Designer & Developer.
              </div>
            </div>
            <div className={styles.description}>
              <p>
                Rohan is a digital designer based in Mumbai, India. I love to work on different aspect of design process like visual identity, design system bit of motion and so on. Have a project in mind you’re excited about? <span>Let’s chat.</span>
              </p>
            </div>
          </div>
          <Rounded className={styles.button}>
            <p>View projects</p>
          </Rounded>
        </div>
      </div>
    </motion.main>
  )
}
