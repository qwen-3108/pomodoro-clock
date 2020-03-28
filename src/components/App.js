import React from 'react';
import ClockContextProvider from './_inventory/clockContext';
import { SESSION, BREAK } from './_inventory/CONSTANTS';
import Settings from './Settings/Settings';
import Timer from './Timer/Timer';
import alarm from './alarm-cut.mp3';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
    <ClockContextProvider>
      <div id="clock">
        <div id="header">
          <div id="title"><h1>Pomodoro Clock</h1></div>
          < Settings name={SESSION} />
          < Settings name={BREAK} />
        </div>
        <div id="content">
          < Timer />
        </div>
      </div>
      <audio id="beep" src={alarm}></audio>
      <div id="credit">Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a>, <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a>, and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </ClockContextProvider>
    </React.Fragment>
  );
}

export default App;
