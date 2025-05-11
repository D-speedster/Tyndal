import React from 'react'

export default function Description(props) {
    return (
        <section className='Description'>
            <div>
                <h2>{props.title}</h2>
                <p>
        {props.dialog}

                </p>
                <div className='Description_Button'>
                    <button className='Start_btn'>شروع کنیم </button>
                    <button className='btn' style={{fontSize : '16px' , fontWeight : '500px' , fontFamily : 'IRANYEKANMedium' , textShadow : '1px 1px 1px #CCC'}}>طرح های بیشتر </button>
                </div>
            </div>
        </section>
    )
}
