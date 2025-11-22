import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HOME_CONTENT, FOOTER_CONTENT } from '../../constants/content';
import styles from './components.module.css';

// Description Component
export function Description({ title, description }) {
    return (
        <section className={styles.description} aria-label="توضیحات بخش">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.descriptionButtons}>
                    <button 
                        className={styles.btnStart}
                        aria-label="شروع کنید"
                    >
                        {HOME_CONTENT.buttons.start}
                    </button>
                    <button 
                        className={styles.btnSecondary}
                        aria-label="مشاهده طرح‌های بیشتر"
                    >
                        {HOME_CONTENT.buttons.morePlans}
                    </button>
                </div>
            </div>
        </section>
    );
}

// Title Season Component
export function TitleSeason({ title }) {
    return (
        <div className={styles.titleSeason}>
            <h2>{title}</h2>
        </div>
    );
}

// Welcome Component
export function Welcome() {
    const { title, buttonText } = HOME_CONTENT.hero;
    
    return (
        <section className={styles.welcome} aria-label="بخش خوش‌آمدگویی">
            <Container>
                <div className={styles.dialog}>
                    <h1>{title}</h1>
                    <button 
                        className={styles.btnTopHead}
                        aria-label={buttonText}
                    >
                        {buttonText}
                    </button>
                </div>
            </Container>
        </section>
    );
}

// Slide Welcome Component
export function SlideWelcome() {
    const images = [
        { src: 'img/pic1.webp', alt: 'نمای اول فروشگاه' },
        { src: 'img/pic2.webp', alt: 'نمای دوم فروشگاه' }
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={styles.sliderWelcome} role="region" aria-label="اسلایدر تصاویر">
            <img 
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                loading="lazy"
            />
        </div>
    );
}

// Footer Component
export function Footer() {
    const { company, support, copyright } = FOOTER_CONTENT;
    
    const socialLinks = [
        { icon: BsFacebook, label: 'فیسبوک', url: 'https://facebook.com' },
        { icon: BsTwitter, label: 'توییتر', url: 'https://twitter.com' },
        { icon: BsInstagram, label: 'اینستاگرام', url: 'https://instagram.com' },
        { icon: BsYoutube, label: 'یوتیوب', url: 'https://youtube.com' },
        { icon: FcGoogle, label: 'گوگل', url: 'https://google.com' }
    ];
    
    return (
        <footer className={styles.footer} role="contentinfo">
            <Container className={styles.footerContent}>
                <Row className="justify-content-between">
                    <Col sm={12} md={6} lg={3} className={styles.footerSection}>
                        <nav aria-label="لینک‌های شرکت">
                            <ul>
                                <span>{company.title}</span>
                                {company.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={`/${link.toLowerCase()}`} aria-label={link}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Col>
                    <Col sm={12} md={6} lg={3} className={styles.footerSection}>
                        <nav aria-label="لینک‌های پشتیبانی">
                            <ul>
                                <span>{support.title}</span>
                                {support.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={`/${link.toLowerCase()}`} aria-label={link}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Col>
                </Row>
                <div className={styles.socialMedia} role="navigation" aria-label="شبکه‌های اجتماعی">
                    {socialLinks.map(({ icon: Icon, label, url }, index) => (
                        <a 
                            key={index}
                            href={url}
                            className={styles.socialIcon}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <div className={styles.copyRight}>
                    <span>{copyright}</span>
                </div>
            </Container>
        </footer>
    );
}
