import React from 'react'
import styles from './banner.module.css';

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerMobile}>
        <div className={styles.typesAndFiltersWrapper}>
          <div className={styles.typesAndFilters}>
            <div className={styles.headlineParent}>
              <b className={styles.headline}>
                <p className={styles.buildYour}>Build Your</p>
                <p className={styles.buildYour}>Solid Career</p>
              </b>
              <div className={styles.inThisStep}>
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room. Then let us
                know the location and how many guests can stay.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerMoniter} id="2">
        <div className={styles.buildYourSolidCareerParent}>
          <div className={styles.buildYourSolid}>Build Your Solid Career</div>
          <div className={styles.inThisStep1}>
            In this step, we'll ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
