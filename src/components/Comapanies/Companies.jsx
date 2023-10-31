import React from "react";
import styles from "./Companies.module.css";
import image1 from "../../assets/hyperlin.png";
import image2 from "../../assets/josephKing.png";
import image3 from "../../assets/ntl.jpg";
import image4 from "../../assets/podPitara.png";

const Companies = () => {
  return (
    <section>
      <div className={styles.companies_section}>
        <h1 className={styles.main_heading}>
          See where our students are interning
        </h1>
        <div className={styles.imageBox}>
          <img className={styles.image} src={image1} alt="Hyperlin" />
          <img className={styles.image} src={image3} alt="NTL" />
          <img className={styles.image} src={image4} alt="PodPitara" />
          <img className={styles.image} src={image2} alt="JosephKing" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
