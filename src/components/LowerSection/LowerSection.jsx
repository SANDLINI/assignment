import React from "react";
import styles from "./LowerSection.module.css";
import image1 from "../../assets/StartUp.png";
import image2 from "../../assets/Vector.png";
import image3 from "../../assets/Vector3.png";
const LowerSection = () => {
  return (
    <section className={styles.lowerSection}>
      <div className={styles.content_Box}>
        <div className={styles.content}>
          <h1>Content:</h1>
          <p>
            12 lessons <span>&#x2022;</span> 2hr 3min <span>&#x2022;</span>
          </p>
          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>1</div>
              <p className={styles.agenda}>Introductory Session (Live class)</p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>2</div>
              <p className={styles.agenda}>Getting into the Fundamentals </p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <hr className={styles.line} />

          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>3</div>
              <p className={styles.agenda}>Know your niche</p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <hr className={styles.line} />

          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>4</div>
              <p className={styles.agenda}>
                The Crux of Search Engine Optimization (SEO) What is SEO?
              </p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <hr className={styles.line} />

          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>5</div>
              <p className={styles.agenda}>The Key to Keywords</p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.time_table}>
            <div className={styles.inner_table}>
              <div className={styles.sNo}>6</div>
              <p className={styles.agenda}>
                Content Marketing - Ensuring the Reach{" "}
              </p>
            </div>
            <p className={styles.time}>
              2hr 3min <span>&#x2022;</span>
            </p>
          </div>
          <button className={styles.btn}>View All</button>
        </div>
      </div>

      <div className={styles.feature_Box}>
        <div className={styles.box_1}>
          <span className={styles.image2}>
            <img src={image1} alt="Image" className={styles.image} />
          </span>
          <h3 className={styles.feature_heading1}>Career Opportunities:</h3>
          <ul className={styles.ul}>
            <li>Life time access</li>
            <li>Life time access</li>
            <li>Life time access</li>
          </ul>
        </div>
        <div className={styles.box_2}>
          <span className={styles.image1}>
            <img src={image2} alt="Image" className={styles.image} />
          </span>
          <h3 className={styles.feature_heading1}>Skills you will learn:</h3>
          <ul>
            <li>Content designing</li>
            <li>Content Adaptation</li>
            <li>Content writing as a career</li>
            <li>Seo: Understanding search engine optimisation</li>
          </ul>
        </div>
        <div className={styles.box_3}>
          <span className={styles.image1}>
            <img src={image3} alt="Image" className={styles.image} />
          </span>
          <h3 className={styles.feature_heading1}>Course Includes:</h3>
          <ul>
            <li>Life time access</li>
            <li>Certificate of completion</li>
          </ul>
        </div>
        <div className={styles.price_container}>
          <div className={styles.price_box}>
            <div className={styles.price}>₹ 1000</div>
            <div>
              <span className={styles.cross}>2000</span> 50% off
            </div>
          </div>
          <div>
            <button className={styles.buyNowBtn}>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerSection;
