import React from 'react';
import './homepage.styles.css';
import Header from '../../components/header/header.component';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import IntroImage from '../../assets/intro-image.gif';
import {Link} from 'react-router-dom';
import Info from '../../components/info/info.component';
import AboutUs from '../../components/about-us/aboutus.component';
import Footer from '../../components/footer/footer.component';


const HomePage=()=>(
    <div className='homepage'>
        <div className='body-section'>
            <Header home/>
            <div className='container'>
                <div className='intro row'>
                    <div className='col-lg-6 mb-5'>
                        <h1 className='text-dark'>
                            Scheduling Appointments Made Simple
                        </h1>
                        <h2 className='mt-5'>
                            Free Meeting Scheduling Website
                        </h2>
                        <span className='d-block'>
                            Schedule your appointments easily and faster
                        </span>
                        <Link to='/schedule' className='btn btn-light p-3 mt-4 rounded-pill  schedule-button'>SCHEDULE NOW</Link>
                    </div>
                    <div className='col-md-6 image-container mb-5'>
                        <img src={IntroImage} alt='calendar' className='intro-image rounded-circle'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='info-section'>
            <div className='container'>
                <Info/>
            </div>
        </div>
        <div className='aboutus-section text-white'>
            <div className='container'>
                <AboutUs/>
            </div>   
        </div>
        <div className='footer-section'>
            <Footer/>
        </div>
    </div>
)

export default HomePage;