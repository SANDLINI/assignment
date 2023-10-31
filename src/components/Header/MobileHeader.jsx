import React from 'react'
import image from '../../assets/mobile.png';
import styles from './MobileHeader.module.css';
const MobileHeader = () => {
  return (
    <section>
      <div className={styles.main}>
        <div>
          <img src={image} alt="Header Image"  className= {styles.image}/>
        </div>
        <div className= {styles.content}>
          <h4 className={styles.heading}>Ace Our Single Shot Challenge !</h4>
          <p className={styles.header_para}>
            Jumpstart Your Career with Our Free Assessment Test: Prove Your
            Skills and Secure an Internship Today!
          </p>
        <button className= {styles.button}>Take A Test</button>
        </div>
      </div>
    </section>
  );
}

export default MobileHeader