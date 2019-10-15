import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://cddiauth.b2clogin.com/cddiauth.onmicrosoft.com/B2C_1_google',
    clientId: '77e94975-22fc-433a-8d9f-71d1a77deba0',
    redirectUri: 'https://jwt.ms',
    postLogoutRedirectUri: 'http://localhost:3000/',
    validateAuthority: false
  },
  cacheLocation: "sessionStorage",
  storeAuthStateInCookie: true
};
 
const authenticationParameters = {
  scopes: [
    "openid",
  ]
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Redirect)