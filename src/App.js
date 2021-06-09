import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import Schedule from './pages/schedule-page/schedule.component.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/schedule' component={Schedule}/>
    </div>
  );
}

export default App;
