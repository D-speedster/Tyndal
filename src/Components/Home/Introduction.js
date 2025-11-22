import React from 'react';
import { BsSpeedometer2 } from "react-icons/bs";
import './Home.css';

const features = [
    {
        title: 'شروع کن !',
        description: 'با راهنماهای مبتدی و ابزارهای برنامه‌ریزی متخصص، راهنمایی گام به گام در مورد نحوه ساخت و راه‌اندازی وب‌سایت دریافت کنید.'
    },
    {
        title: 'آنلاین شوید',
        description: 'با یک وب‌سایت حرفه‌ای دیده شوید. به راحتی با سازنده وب‌سایت رایگان ما سفارشی‌سازی کنید.'
    },
    {
        title: 'فروش را شروع کنید',
        description: 'ابزارهای قدرتمند تجارت الکترونیک همه کاره برای ساده‌سازی مدیریت سفارش، ارسال و پرداخت‌ها.'
    },
    {
        title: 'رشد کنید',
        description: 'با ابزارهای بازاریابی یکپارچه، از تبلیغات فیسبوک گرفته تا کمپین‌های ایمیلی خودکار، مشتریان جدید پیدا کنید.'
    }
];

export default function Introduction() {
    return (
        <div className='container'>
            <div className='row Introduction mt-5'>
                {features.map((feature, index) => (
                    <div key={index} className='col-lg-3 col-xs-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <BsSpeedometer2 />
                            </div>
                            <div className='card-body'>
                                <h6 className='card-title text-center'>{feature.title}</h6>
                                <p>{feature.description}</p>
                            </div>
                            <div className='card-footer'>
                                <a href="#">مشاهده بیشتر ...</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
