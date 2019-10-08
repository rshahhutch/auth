import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/fredhutch.onmicrosoft.com',
    clientId: '0ba14a1d-d6d9-4158-b451-d334efd5243b',
    redirectUri: 'http://localhost:3000'
  },
  cacheLocation: "sessionStorage",
  storeAuthStateInCookie: true
};
 
const authenticationParameters = {
  scopes: [
    "openid",
    "9e28acc9-dc44-461c-9438-6708bcc2a035/user_impersonation"
  ]
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Redirect)