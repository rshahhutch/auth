
import * as React from 'react';
import { AzureAD, LoginType, AuthenticationState, AuthenticationActions } from 'react-aad-msal';
import { basicReduxStore } from './redux/reduxStore';
//import GetIdTokenButton from './GetIdTokenButton';

// Import the authentication provider which holds the default settings
import { authProvider } from './auth/authProvider';
import { useDispatch } from 'react-redux';

const LoginButtonLaunch: React.FC = (props: any) => {

  const dispatch = useDispatch();
  
  function login()
  {
    authProvider.loginRedirect();
  }


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
    <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
      {({ login, logout, authenticationState } :  { login: any, logout :any, authenticationState : any}) => {
        if (authProvider.authenticationState === AuthenticationState.Authenticated) {
          return (
            <React.Fragment>
              <p>You're logged in!</p>
              <button onClick={logout} className="Button">
                Logout
              </button>
              
            </React.Fragment>
          );
        } else if (authProvider.authenticationState  === AuthenticationState.Unauthenticated) {
          return (          
            <button className="Button" onClick={login}>
              Login
            </button>
          );
        }
      }}
    </AzureAD>
  );
}
export default LoginButtonLaunch;