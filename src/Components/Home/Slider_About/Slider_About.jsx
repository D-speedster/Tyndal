import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../Home.css'
import { Pagination } from "swiper";
import { Container } from "react-bootstrap";

export default function Slider_About() {

    return (
        <>
            <Swiper
                // slidesPerView={2}
                centeredSlides={true}
                // spaceBetween={100}
               
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='img/inspiration-center-1680.webp' />
                    <div class="support-description">
                    برای نکات و توصیه‌هایی که می‌توانید فوراً از آنها استفاده کنید، به وبلاگ مفید و مرکز الهام‌بخش ما مراجعه کنید.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='img/guides-1680.webp' />
                    <div class="support-description">
                    برای نکات و توصیه‌هایی که می‌توانید فوراً از آنها استفاده کنید، به وبلاگ مفید و مرکز الهام‌بخش ما مراجعه کنید.                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='img/makers-to-merchants-1680.webp' />
                    <div class="support-description">
                    برای نکات و توصیه‌هایی که می‌توانید فوراً از آنها استفاده کنید، به وبلاگ مفید و مرکز الهام‌بخش ما مراجعه کنید.                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
