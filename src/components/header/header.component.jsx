import React from 'react';
import './header.styles.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/calendar.svg';

const Header=({home})=>(
    <div className='nav-bar'>
        <div className='header'>
            <div className='head'>
                <Link className='logo-container' to='/'>
                    <Logo/>
                </Link> 
                <p className="title"><b>S</b>chedule<b>I</b>t</p>
            </div>
            <div className='options'>
                {
                    (home)?
                    <div>
                        <Link className='option highlighted' to='/'>HOME</Link>
                        <Link className='option' to='/schedule'>SCHEDULE</Link>
                    </div>
                    :
                    <div>
                        <Link className='option' to='/'>HOME</Link>
                        <Link className='option highlighted' to='/schedule'>SCHEDULE</Link>
                    </div>
                }
            </div>
        </div>
    </div>
    
)

export default Header;