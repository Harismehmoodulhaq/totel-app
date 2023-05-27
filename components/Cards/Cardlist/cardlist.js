import React from 'react'
import styles from './cardlist.module.css';
import Card from './card';

const cardList = [
    {
        id: '1',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    },
    {
        id: '2',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    },
    {
        id: '3',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    },
    {
        id: '4',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    },
    {
        id: '5',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    },
    {
        id: '6',
        imageURL: '/rectangle-2475@2x.png',
        contractType: 'Full Time / Part Time',
        jobType: "Travel Guide",
        description: "But happy to move in with more than that, I’m super easy going and tidy."
    }
]


function CardList() {
    return (
        <div className={styles.container}>
            <div className={styles.cardlistMoniter} id="3">
                <div className={styles.cardlistMoniterInner} id="3-1">
                    {
                        cardList.map((card, index) => (
                            <Card data={card} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.cardlistMobile}>
                {
                    cardList.map((card, index) => (
                        <Card data={card} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList
