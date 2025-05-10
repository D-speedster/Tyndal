import React from 'react'
import '../Home.css';
import { Button, Container } from 'react-bootstrap'

export default function Welcome() {
    return (
        <Container>
            <div className='Dialog mx-auto mt-5'>
                <h1 className='text-center'>یک وب سایت حرفه ای بسازید که با کسب و کار شما رشد کند.</h1>
                <Button className='btn-top-head d-block mt-4' style={{ width: '210px' }} bg='dark'>فروشگاه خود را بسازید</Button>


            </div>

        </Container>
    )
}
