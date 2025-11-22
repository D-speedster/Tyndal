import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Home.css';

const slides = [
    {
        image: 'img/inspiration-center-1680.webp',
        description: 'کسب و کار خود را با یک جهش آغاز کنید و از آموزش‌های تخصصی، مانند عکاسی حرفه‌ای از محصولات و برندسازی، بهره ببرید.'
    },
    {
        image: 'img/guides-1680.webp',
        description: 'برای نکات و توصیه‌هایی که می‌توانید فوراً از آنها استفاده کنید، به وبلاگ مفید و مرکز الهام‌بخش ما مراجعه کنید.'
    },
    {
        image: 'img/makers-to-merchants-1680.webp',
        description: 'با ابزارهای حرفه‌ای ما، از یک سازنده به یک تاجر موفق تبدیل شوید.'
    }
];

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
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="img-fluid" />
                    <div className="support-description">
                        {slide.description}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
