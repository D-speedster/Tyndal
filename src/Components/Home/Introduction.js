import React from 'react';
import { BsSpeedometer2 } from "react-icons/bs";
import { FEATURES, HOME_CONTENT } from '../../constants/content';
import './Home.css';

export default function Introduction() {
    return (
        <div className='container'>
            <div className='row introduction mt-5'>
                {FEATURES.map(({ id, title, description }) => (
                    <div key={id} className='col-lg-3 col-xs-6 col-sm-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <BsSpeedometer2 />
                            </div>
                            <div className='card-body'>
                                <h6 className='card-title text-center'>{title}</h6>
                                <p>{description}</p>
                            </div>
                            <div className='card-footer'>
                                <a href="#">{HOME_CONTENT.buttons.learnMore}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
