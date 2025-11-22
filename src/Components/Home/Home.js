import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Header from './Header';
import Introduction from './Introduction';
import SliderAbout from './SliderAbout';
import { Description, TitleSeason, Welcome, SlideWelcome, Footer } from './components';

export default function Home() {
    return (
        <div>
            <section className='Header_Main'>
                <Header />
                <Welcome />
                <div className='container'>
                    <SlideWelcome />
                </div>
            </section>

            <Description 
                title='یک وب سایت رایگان بسازید که با کسب و کار شما رشد کند.'
                dialog='برای ساختن وب سایت خود و رشد کسب و کار ایده آل خود به طرح های صفحه وب قابل تنظیم و ابزارهای مفید دسترسی پیدا کنید. به راحتی یک وب سایت رایگان بسازید تا به شما کمک کند تا مشتریان خود را کشف کنید و به سبک خود رشد دهید. امروز با سازنده وب سایت قدرتمند و رایگان ما شروع کنید.'
            />
            
            <section>
                <img src='img/design-xl.webp' className='img-fluid' alt='Design' />
            </section>
            
            <TitleSeason title='با سازنده وب سایت مناسب، از ابتدا تا رشد، موفق باشید' />
            <Introduction />
            
            <Container>
                <hr style={{ marginTop: '60px' }} />
            </Container>
            
            <Description 
                title='آزادی در فروش، هر زمان و هر جا با تیندال'
                dialog='تیندال، همراه مطمئن فروشگاه‌ساز شماست. از فروش حضوری تا فروشگاه آنلاین، تیندال فرآیند پرداخت را ساده و امن می‌کند تا شما فقط روی رشد کسب‌وکارتان تمرکز کنید.'
            />
            
            <section className='shopping-image'>
                <div className='shopping-image-main'></div>
                <img src='img/browser-1680.webp' className='shopping-image-tiny' alt='Browser' />
            </section>
            
            <section className='Section_Des'>
                <span>این کسب و کار شماست. شما این را دریافت کرده اید.</span>
                <div style={{ marginTop: '-20px' }}>
                    <TitleSeason title='ما اینجا هستیم تا در صورت نیاز، شما را در عبور از موانع رایج راهنمایی کنیم.' />
                </div>
            </section>
            
            <section style={{ marginTop: '50px', marginBottom: '50px' }}>
                <SliderAbout />
            </section>
            
            <Container>
                <hr style={{ marginTop: '60px' }} />
            </Container>
            
            <Description 
                title='وب‌سایتت رو بساز، مسیر موفقیتت رو هم باهاش بساز با تیندال'
                dialog='از چالش‌های فنی کوچک و بزرگ تا مشاوره برای رشد کسب‌وکار، تیم پشتیبانی تیندال همیشه همراهته — فقط یک پیام یا تماس فاصله‌ست. ساخت فروشگاهتو رایگان با تیندال شروع کن و در طول مسیر روی ما حساب کن.'
            />
            
            <img src='img/customer-success-1680.webp' className='img-fluid' alt='Customer Success' />
            
            <section className='end-section'>
                <h2>کسب و کار خود را در هر زمان و هر مکان رشد دهید.</h2>
            </section>

            <section className='pt-5'>
                <Footer />
            </section>
        </div>
    )
}
