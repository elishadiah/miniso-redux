import React from "react";
import styles from "./storeCard.module.css";

const StorePageCard = ({ image, title, text1, text2, timeText }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img variant='top' src={image} alt='' className={styles.image} />
        </div>

        <div className={styles.content}>
          <h4 className={styles.title}>
            <p className={styles.mapIcon}>
              <i class='fa-solid fa-location-dot'></i>
            </p>
            {title}
          </h4>
          <p className={styles.text}>
            {text1} <br /> {text2}
          </p>
          <p className={`${styles.time} ${styles.text}`}>{timeText}</p>
        </div>
      </div>
    </div>
  );
};

export default StorePageCard;
