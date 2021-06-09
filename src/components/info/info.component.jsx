import React from 'react';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

const Info=()=>(
    <div className='info'>
        <div className='row text-center mb-5'>
            <div className='col-md-4'>
                <img src={icon1} alt='icon-online' className='mb-3'/>
                <h3>Schedule Online</h3>
                <p>Customers can self schedule 24x7, any time, any where</p>
            </div>
            <div className='col-md-4'>
                <img src={icon2} alt='icon-clock' className='mb-3'/>
                <h3>Save Time</h3>
                <p>Saves your time by automated scheduling with one click</p>
            </div>
            <div className='col-md-4'>
                <img src={icon3} alt='icon-reminder' className='mb-3'/>
                <h3>Get reminded</h3>
                <p>Get reminded via an email and pop up</p>
            </div>
        </div>
    </div>
)

export default Info;