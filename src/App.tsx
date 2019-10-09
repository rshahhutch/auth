import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authProvider } from './components/auth/authProvider';
import AzureAD, { AuthenticationState } from 'react-aad-msal';
import LoginButtonLaunch from './components/LoginButtonLaunch';
import { basicReduxStore } from './components/redux/reduxStore';
import Home from './components/home.component';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import PopOutExample from './components/popoutexample.component';
//import Auth from './components/auth/auth.component';

const App: React.FC = (props: any) => {


  function handleLogout()
  {
    authProvider.logout();
  }

  return (

    // <AzureAD provider={authProvider} forceLogin={true}>
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.tsx</code> and save to reload.
    //     </p>
      
    //   <a href="#" onClick={handleLogout}>Logout</a>
    //   </div>
    // </AzureAD>


      //Try2    
      // <div className="SampleBox">
      //   <h2 className="SampleHeader">Automatic Redirect</h2>
      //   <p>
      //     This example shows how you can use the AzureAD component to redirect the login screen automatically on
      //     page load. Click the checkbox below to enable the redirect and refresh your browser window.
      //   </p>
      //   <LoginButtonLaunch />
      // </div>
      

      <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
      {({ login, logout, authenticationState } :  { login: any, logout :any, authenticationState : any}) => {
        if (authProvider.authenticationState === AuthenticationState.Authenticated) {
          return (
            <Router>
              <React.Fragment>
              <Switch>            
                <Route path="/" component={PopOutExample} />             
                <Route path="/popout" component={PopOutExample} />      
              </Switch>
              </React.Fragment>
            </Router>
          );
        } else if (authProvider.authenticationState  === AuthenticationState.Unauthenticated) {
          return (          
            <div className="SampleBox">
              <h2 className="SampleHeader">Automatic Redirect</h2>
               <p>
                 This example shows how you can use the AzureAD component to redirect the login screen automatically on
                 page load. Click the checkbox below to enable the redirect and refresh your browser window.
               </p>
               <LoginButtonLaunch />
             </div> 
          );
        }
      }}
    </AzureAD>
      
  );
}

export default App;
