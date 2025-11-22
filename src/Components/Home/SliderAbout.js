import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SLIDER_CONTENT } from '../../constants/content';
import "swiper/css";
import "swiper/css/pagination";
import './Home.css';

export default function SliderAbout() {
    return (
        <Swiper
            centeredSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination]}
            className="my-swiper"
        >
            {SLIDER_CONTENT.map(({ id, image, description }) => (
                <SwiperSlide key={id}>
                    <img src={image} alt={`Slide ${id}`} className="img-fluid" />
                    <div className="support-description">
                        {description}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
