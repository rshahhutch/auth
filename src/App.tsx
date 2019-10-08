import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authProvider } from './components/auth/authProvider';
import AzureAD from 'react-aad-msal';
//import Auth from './components/auth/auth.component';

const App: React.FC = (props: any) => {


  function handleLogout()
  {
    authProvider.logout();
  }

  return (

    <AzureAD provider={authProvider} forceLogin={true}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      
      <a href="#" onClick={handleLogout}>Logout</a>
      </div>
    </AzureAD>
      
      ///<Auth/>
  );
}

export default App;
