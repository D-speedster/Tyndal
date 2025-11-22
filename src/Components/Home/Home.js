import React, { Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import { HOME_CONTENT } from '../../constants/content';
import styles from './Home.module.css';
import Header from './Header';
import { Description, TitleSeason, Welcome, SlideWelcome, Footer } from './components';

// Lazy load components for better performance
const Introduction = lazy(() => import('./Introduction'));
const SliderAbout = lazy(() => import('./SliderAbout'));

// Loading component
const LoadingSpinner = () => (
    <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>در حال بارگذاری...</p>
    </div>
);

export default function Home() {
    return (
        <main>
            <section className={styles.headerMain}>
                <Header />
                <Welcome />
                <Container>
                    <SlideWelcome />
                </Container>
            </section>

            <Description 
                title={HOME_CONTENT.sections.buildWebsite.title}
                description={HOME_CONTENT.sections.buildWebsite.description}
            />
            
            <section className={styles.section}>
                <img 
                    src='img/design-xl.webp' 
                    alt='طراحی وب‌سایت حرفه‌ای' 
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                />
            </section>
            
            <TitleSeason title={HOME_CONTENT.sections.successTitle} />
            
            <Suspense fallback={<LoadingSpinner />}>
                <Introduction />
            </Suspense>
            
            <Container>
                <hr className={styles.divider} />
            </Container>
            
            <Description 
                title={HOME_CONTENT.sections.sellFreedom.title}
                description={HOME_CONTENT.sections.sellFreedom.description}
            />
            
            <section className={styles.shoppingImage}>
                <div 
                    className={styles.shoppingImageMain}
                    role="img"
                    aria-label="تصویر فروشگاه آنلاین"
                ></div>
                <img 
                    src='img/browser-1680.webp' 
                    className={styles.shoppingImageTiny} 
                    alt='نمای مرورگر فروشگاه' 
                    loading="lazy"
                />
            </section>
            
            <section className={styles.sectionDes}>
                <span>{HOME_CONTENT.sections.support.message}</span>
                <TitleSeason title={HOME_CONTENT.sections.support.title} />
            </section>
            
            <Suspense fallback={<LoadingSpinner />}>
                <SliderAbout />
            </Suspense>
            
            <Container>
                <hr className={styles.divider} />
            </Container>
            
            <Description 
                title={HOME_CONTENT.sections.buildPath.title}
                description={HOME_CONTENT.sections.buildPath.description}
            />
            
            <img 
                src='img/customer-success-1680.webp' 
                alt='موفقیت مشتریان' 
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
            />
            
            <section className={styles.endSection}>
                <h2>{HOME_CONTENT.sections.finalCta}</h2>
            </section>

            <Footer />
        </main>
    );
}
