import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage, WrappedNormalLoginForm } from '../LoginPage';
import { MachineParameters } from '../MachineParameters';
import logo from '../../logo.svg';


export function Routes() {

  return (
    <Router>
      <Route exact path='/'>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
                >
                Learn React
            </a>
          </header>
        </div>
      </Route>
      <Route path='/login'>
        <WrappedNormalLoginForm />
      </Route>
      <Route path='/machines'>
        <MachineParameters />
      </Route>
    </Router>
  );
}
