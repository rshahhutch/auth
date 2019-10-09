import React, { Component } from 'react';
import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { AuthenticationActions } from 'react-aad-msal';
import { authProvider } from './auth/authProvider';

const Home: React.FC = (props: any) => {

  const dispatch = useDispatch();
  


  function logout()
  {
    
    authProvider.logout();
    dispatch(AuthenticationActions.LogoutSuccess);
    dispatch({
      type:AuthenticationActions.LogoutSuccess,
      payload: logout
  });
  }
    return (
      <div className="App">
        <div className="App-header">
          <h2> Home</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={logout} className="Button">
                Logout
         </button>
      </div>
    );
}

export default Home;
