import React from 'react';
import { BsSpeedometer2 } from "react-icons/bs";
import { FEATURES, HOME_CONTENT } from '../../constants/content';
import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <section className={styles.introduction} aria-label="ویژگی‌های اصلی">
            <div className={styles.grid}>
                {FEATURES.map(({ id, title, description }) => (
                    <article key={id} className={styles.card}>
                        <div className={styles.cardHeader} aria-hidden="true">
                            <BsSpeedometer2 />
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDescription}>{description}</p>
                        </div>
                        <div className={styles.cardFooter}>
                            <a 
                                href={`/features/${id}`} 
                                className={styles.cardLink}
                                aria-label={`اطلاعات بیشتر درباره ${title}`}
                            >
                                {HOME_CONTENT.buttons.learnMore}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
