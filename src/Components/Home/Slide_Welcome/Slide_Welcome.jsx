import React, { useEffect, useState } from 'react'

export default function Slide_Welcome() {
    const pic = ['img/pic1.webp', 'img/pic2.webp'];
    const [slidImage, SetslidImage] = useState(0)

    useEffect(() => {
        setInterval(() => {
            if (slidImage == 0) {
                SetslidImage(1)
            } else {
                SetslidImage(0)
            }
        }, 5000)
    }, [])

    return (
        <div className='slider_Welcome'>
            <img src={pic[slidImage]} className='img-fluid' />
        </div>
    )
}
