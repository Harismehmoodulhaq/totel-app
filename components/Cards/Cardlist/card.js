import React from 'react';
import styles from './cardlist.module.css'

function Card({ data }) {
    return (
        <div className={styles.rectangleParent} id="3-1-1">
            <img
                className={styles.frameChild}
                alt={data.id}
                src={data.imageURL}
            />
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.fullTimePartTimeParent}>
                        <div className={styles.fullTime}>{data.contractType}</div>
                        <div className={styles.travelGuide}>{data.jobType}</div>
                    </div>
                    <div className={styles.butHappyTo}>
                        {data.description}
                    </div>
                </div>
                <button className={styles.button}>
                    <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                    />
                    <div className={styles.text}>Apply Now</div>
                    <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                    />
                </button>
            </div>
        </div>
    )
}

export default Card



