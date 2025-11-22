import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy } from "swiper";
import { SLIDER_CONTENT } from '../../constants/content';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/lazy";
import styles from './SliderAbout.module.css';

export default function SliderAbout() {
    return (
        <section className={styles.sliderContainer} aria-label="نمونه کارها و راهنماها">
            <Swiper
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                lazy={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Lazy]}
                className="my-swiper"
            >
                {SLIDER_CONTENT.map(({ id, image, description, title }) => (
                    <SwiperSlide key={id}>
                        <div className={styles.slide}>
                            <img 
                                data-src={image}
                                alt={title || `اسلاید ${id}`}
                                className={`${styles.slideImage} swiper-lazy`}
                                loading="lazy"
                            />
                            <div className="swiper-lazy-preloader"></div>
                            <p className={styles.slideDescription}>
                                {description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
