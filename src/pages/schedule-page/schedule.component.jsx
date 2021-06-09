import React from 'react';
import './schedule.styles.css';
import Header from '../../components/header/header.component';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import SchedulingForm from '../../components/scheduling-form/schedulingform.component';
import Footer from '../../components/footer/footer.component';

const Schedule=()=>(
    <div className='schedule-page'>
        <div className='form-section'>
            <Header/>
            <div className='container'>
                <h1 className='text-center'>Schedule an Event</h1>
                <SchedulingForm/>
            </div> 
            <div className='footer-section mt-5'>
                <Footer/>
            </div>    
        </div>
    </div>
)

export default Schedule;