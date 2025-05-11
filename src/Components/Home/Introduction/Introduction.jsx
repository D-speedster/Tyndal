import React from 'react'
import '../Home.css';

import { BsBagCheck, BsSpeedometer2 } from "react-icons/bs";
import { GiMatterStates } from "react-icons/gi"
import { HiStatusOnline } from "react-icons/hi"
export default function Introduction() {
    return (
        <div className='container'>
            <div className='row Introduction mt-5'>
             
                <div className='col-lg-3 col-xs-6 col-sm-6'>
                <div className='card'>
                        <div className='card-header'>
                            <BsSpeedometer2></BsSpeedometer2>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title text-center'>شروع کن !</h6>
                            <p>
                            با راهنماهای مبتدی و ابزارهای برنامه‌ریزی متخصص، راهنمایی گام به گام در مورد نحوه ساخت و راه‌اندازی وب‌سایت دریافت کنید.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a href="#">مشاهده بیشتر ...</a>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-xs-6 col-sm-6'>
                <div className='card'>
                        <div className='card-header'>
                            <BsSpeedometer2></BsSpeedometer2>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title text-center'>آنلاین شوید</h6>
                            <p>با یک وب‌سایت حرفه‌ای دیده شوید. به راحتی با سازنده وب‌سایت رایگان ما سفارشی‌سازی کنید.</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#">مشاهده بیشتر ...</a>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-xs-6 col-sm-6'>
                <div className='card'>
                        <div className='card-header'>
                            <BsSpeedometer2></BsSpeedometer2>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title text-center'>فروش را شروع کنید</h6>
                            <p>ابزارهای قدرتمند تجارت الکترونیک همه کاره برای ساده‌سازی مدیریت سفارش، ارسال و پرداخت‌ها.</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#">مشاهده بیشتر ...</a>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-xs-6 col-sm-6'>
                <div className='card'>
                        <div className='card-header'>
                            <BsSpeedometer2></BsSpeedometer2>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title text-center'>رشد کنید</h6>
                            <p>
                            با ابزارهای بازاریابی یکپارچه، از تبلیغات فیسبوک گرفته تا کمپین‌های ایمیلی خودکار، مشتریان جدید پیدا کنید.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a href="#">مشاهده بیشتر ...</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
