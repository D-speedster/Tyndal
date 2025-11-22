import React from 'react';
import { Container } from 'react-bootstrap';
import { HOME_CONTENT } from '../../constants/content';
import './Home.css';
import Header from './Header';
import Introduction from './Introduction';
import SliderAbout from './SliderAbout';
import { Description, TitleSeason, Welcome, SlideWelcome, Footer } from './components';

export default function Home() {
    return (
        <div>
            <section className='header-main'>
                <Header />
                <Welcome />
                <div className='container'>
                    <SlideWelcome />
                </div>
            </section>

            <Description 
                title={HOME_CONTENT.sections.buildWebsite.title}
                description={HOME_CONTENT.sections.buildWebsite.description}
            />
            
            <section>
                <img src='img/design-xl.webp' className='img-fluid' alt='Design' />
            </section>
            
            <TitleSeason title={HOME_CONTENT.sections.successTitle} />
            <Introduction />
            
            <Container>
                <hr className='my-5' />
            </Container>
            
            <Description 
                title={HOME_CONTENT.sections.sellFreedom.title}
                description={HOME_CONTENT.sections.sellFreedom.description}
            />
            
            <section className='shopping-image'>
                <div className='shopping-image-main'></div>
                <img src='img/browser-1680.webp' className='shopping-image-tiny' alt='Browser' />
            </section>
            
            <section className='section-des'>
                <span>{HOME_CONTENT.sections.support.message}</span>
                <TitleSeason title={HOME_CONTENT.sections.support.title} />
            </section>
            
            <section className='my-5'>
                <SliderAbout />
            </section>
            
            <Container>
                <hr className='my-5' />
            </Container>
            
            <Description 
                title={HOME_CONTENT.sections.buildPath.title}
                description={HOME_CONTENT.sections.buildPath.description}
            />
            
            <img src='img/customer-success-1680.webp' className='img-fluid' alt='Customer Success' />
            
            <section className='end-section'>
                <h2>{HOME_CONTENT.sections.finalCta}</h2>
            </section>

            <section className='pt-5'>
                <Footer />
            </section>
        </div>
    )
}
