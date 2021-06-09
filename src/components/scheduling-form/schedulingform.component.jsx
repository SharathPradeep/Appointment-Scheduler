import React from 'react';
import './schedulingform.styles.css';

class SchedulingForm extends React.Component{
    constructor(){
        super();

        this.state={
            title:'',
            description:'',
            location:'',
            date:'',
            time:''
        }
    }

    handleChange=(e)=>{
        e.preventDefault();

        const {name,value}=e.target;

        this.setState({[name]:value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
    }

    render(){

        const gapi =window.gapi;
        const CLIENT_ID='425853649266-9unded5favumi51akokeft8lt9bdci8l.apps.googleusercontent.com';
        const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
        const SCOPES = "https://www.googleapis.com/auth/calendar";

        const handleClick=()=>{
            gapi.load('client:auth2', initClient);
        }

        const initClient=()=>{
            console.log('Client Loaded');

            gapi.client.init({
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
            })
            
            gapi.client.load('calendar','v3',()=>console.log('Calendar Loaded'));

            gapi.auth2.getAuthInstance().signIn()
            .then(()=>{

                const event = {
                'summary': this.state.title,
                'location': this.state.location,
                'description': this.state.description,
                'start': {
                    'dateTime': `${this.state.date}T${this.state.time}:00+05:30`,
                    'timeZone': 'Asia/Kolkata'
                },
                'end': {
                    'dateTime': `${this.state.date}T${this.state.time}:00+05:30`,
                    'timeZone': 'Asia/Kolkata'
                },
                'reminders': {
                    'useDefault': false,
                    'overrides': [
                    {'method': 'email', 'minutes': 24*60},
                    {'method': 'popup', 'minutes': 10}
                    ]
                }
                };

                const request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': event
                });

                request.execute((event)=> {
                window.open(event.htmlLink);
                });

            })
        }



        return (
            <div className='scheduling-form'>
                <div className='row'>
                    <div className='col event-form'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label>Title:</label>
                                <input type='text' className='form-control' value={this.state.title} onChange={this.handleChange} name='title' placeholder='Add title for the event'/>
                            </div>
                            <div className='form-group'>
                                <label>Description:</label>
                                <input type='text' className='form-control' value={this.state.description} onChange={this.handleChange} name='description' placeholder='Add a short description'/>
                            </div>
                            <div className='form-group'>
                                <label>Location:</label>
                                <input type='text' className='form-control'  value={this.state.location} onChange={this.handleChange} name='location' placeholder='Add location of the event'/>
                            </div>
                            <div className='form-group'>
                                <label>Date:</label>
                                <input type='date' className='form-control' 
                                        value={this.state.date} onChange={this.handleChange} name='date'/>
                            </div>
                            <div className='form-group'>
                                <label>Time:</label>
                                <input type='time' className='form-control'  value={this.state.time} onChange={this.handleChange} name='time'/>
                            </div>
                            <div className='form-group'>
                                <button className='btn btn-dark p-2 mt-3' onClick={handleClick}>Add Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SchedulingForm;