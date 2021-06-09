import React from 'react';
import {ReactComponent as Logo} from '../../assets/calendar.svg';


const Footer =()=>(
    <div className='footer p-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Logo className='d-inline'/>
                    <h2 className='d-inline m-2'>ScheduleIt</h2>
                    <p className='m-3'>Created By Sharath Pradeep</p>
                </div>
                <div className='col-md-4'>
                    <h2>Features</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ullam eaque commodi animi dolorem cumque molestias fugit illo sit nam.</p>
                </div>
                <div className='col-md-4'>
                    <h2>How does it work?</h2>
                    <ul>
                        <li>Fill in all the details asked in the scheduling form</li>
                        <li>Click Add Event and Sign in to your google account </li>
                        <li>Allow all permissions if asked</li>
                        <li>You will be redirected to google calendar page where you can see and manage events</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;