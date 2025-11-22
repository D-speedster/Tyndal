import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NAVIGATION, HOME_CONTENT } from '../../constants/content';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header 
            className={`${styles.headerHome} ${isScrolled ? styles.isActive : ''}`}
            role="banner"
        >
            <Container>
                <nav className={styles.navbar} role="navigation" aria-label="منوی اصلی">
                    <button 
                        className={styles.menuToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="باز کردن منو"
                        aria-expanded={isMobileMenuOpen}
                    >
                        ☰
                    </button>
                    
                    <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
                        {NAVIGATION.links.map((link, index) => (
                            <Link 
                                key={index} 
                                to={link.to} 
                                className={styles.navLink}
                                onClick={handleLinkClick}
                                aria-label={link.label}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    
                    <Link to='/' aria-label="صفحه اصلی">
                        <img 
                            src='img/logo.svg' 
                            alt='لوگوی تیندال' 
                            className={styles.logo}
                            loading="eager"
                        />
                    </Link>
                    
                    <div className={styles.buttonGroup}>
                        <button 
                            className={styles.btnLogin}
                            aria-label="ورود به حساب کاربری"
                        >
                            {HOME_CONTENT.buttons.login}
                        </button>
                        <button 
                            className={styles.btnCreateStore}
                            aria-label="ساخت فروشگاه جدید"
                        >
                            {HOME_CONTENT.buttons.createStore}
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
