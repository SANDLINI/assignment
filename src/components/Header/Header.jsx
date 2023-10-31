import React from "react";
import styles from "./Header.module.css";
import rightImage from "../../assets/CW1.png";
import leftImage from "../../assets/CW2.png";
import image from "../../assets/lines.png";
const Header = () => {
  return (
    <main>
      <div className={styles.header}>
        <div className={styles.left}>
          <img src={leftImage} alt="Image" className={styles.headerImage} />
        </div>
        <div className={styles.middle}>
          <div className={styles.header_heading}>
            <h1 className={styles.heading}>Ace Our Single Shot Challenge !</h1>
            <span className={styles.headerSvg}>
              <img src={image} alt="svg" className={styles.headerSvg} />
            </span>
            <p className={styles.header_para}>
              Jumpstart Your Career With Our Free Assessment Test: Prove Your
              Skills and Secure an Internship Today.
            </p>
            <div>
              <button className={styles.btn}>Take A Free Assessment</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={rightImage} alt="Image" className={styles.headerImage} />
        </div>
      </div>
    </main>
  );
};

export default Header;
