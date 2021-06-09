import React from 'react';
import aboutUsImage from '../../assets/aboutus-image.jpg';
import './aboutus.styles.css';

const AboutUs=()=>(
    <div className='info mb-5 p-4'>
        <div className='row text-center'>
            <div className='col-lg-6 aboutus-img'>
                <img src={aboutUsImage} alt='aboutus' height='300' width='450' className='rounded-circle'/>
            </div>
            <div className='col-lg-6'>
                <h1>About Us</h1>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit natus pariatur nulla voluptates aspernatur quis eius nobis quibusdam omnis et neque corporis, voluptas animi sequi architecto provident voluptate facilis repellat?</p>
            </div>
        </div>
    </div>
)

export default AboutUs;