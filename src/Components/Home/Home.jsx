import React from 'react'
import './Home.css';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Description from './Description/Description';
import Title_Season from './Title_season/Title_Season';
import Slide_Welcome from './Slide_Welcome/Slide_Welcome';
import { Button, Container } from 'react-bootstrap';
import Introduction from './Introduction/Introduction';
import Slider_About from './Slider_About/Slider_About';
import Footer from '../Home/Footer/Footer';

export default function Home() {
    return (
        <div>
            <section className='Header_Main'>
                <Header></Header>
                <Welcome></Welcome>
                <div className='container'>
                    <Slide_Welcome></Slide_Welcome>
                </div>
            </section>

            <Description title='یک وب سایت رایگان بسازید که با کسب و کار شما رشد کند.'
                dialog='برای ساختن وب سایت خود و رشد کسب و کار ایده آل خود به طرح های صفحه وب قابل تنظیم و ابزارهای مفید دسترسی پیدا کنید. به راحتی یک وب سایت رایگان بسازید تا به شما کمک کند تا مشتریان خود را کشف کنید و به سبک خود رشد دهید. امروز با سازنده وب سایت قدرتمند و رایگان ما شروع کنید.'
            ></Description>
            <section>
                <img src='img/design-xl.webp' className='img-fluid' />
            </section>
            <Title_Season title='با سازنده وب سایت مناسب، از ابتدا تا رشد، موفق باشید'></Title_Season>
            <Introduction></Introduction>
            <Container>
                <hr style={{ marginTop: '60px' }} />
            </Container>
            <Description title='آزادی در فروش، هر زمان و هر جا با تیندال'
                dialog='تیندال، همراه مطمئن فروشگاه‌ساز شماست. از فروش حضوری تا فروشگاه آنلاین، تیندال فرآیند پرداخت را ساده و امن می‌کند تا شما فقط روی رشد کسب‌وکارتان تمرکز کنید.

'
            ></Description>
            <section className='shopping-image'>
                <div className='shopping-image-main'></div>
                <img src='img/browser-1680.webp' className='shopping-image-tiny' />

            </section>
            <section className='Section_Des'>
                <span>این کسب و کار شماست. شما این را دریافت کرده اید.</span>
                <div style={{ marginTop: '-20px' }}>
                    <Title_Season title='ما اینجا هستیم تا در صورت نیاز، شما را در عبور از موانع رایج راهنمایی کنیم.'></Title_Season>
                </div>

            </section>
            <section style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Slider_About></Slider_About>
            </section>
            <Container>
                <hr style={{ marginTop: '60px' }} />
            </Container>
            <Description title='وب‌سایتت رو بساز، مسیر موفقیتت رو هم باهاش بساز  با تیندال .

'
                dialog='از چالش‌های فنی کوچک و بزرگ تا مشاوره برای رشد کسب‌وکار، تیم پشتیبانی تیندال همیشه همراهته — فقط یک پیام یا تماس فاصله‌ست. ساخت فروشگاهتو رایگان با تیندال شروع کن و در طول مسیر روی ما حساب کن.

'
            ></Description>
            <img src='img/customer-success-1680.webp' className='img-fluid' />
            <section className='end-section'>

                <h2>کسب و کار خود را در هر زمان و هر مکان رشد دهید.</h2>
                <Button className='btn-top-head' style={{ width: '210px' }} bg='dark'>فروشگاه خود را بسازید</Button>

            </section>

            <section className='pt-5'>
                <Footer></Footer>
            </section>
        </div>
    )
}
