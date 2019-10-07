import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AzureAD from 'react-aad-msal';
import { authProvider } from './components/auth/authProvider';

ReactDOM.render(
<AzureAD provider={authProvider} forceLogin={true}>
  <App />
</AzureAD> ,
  document.getElementById('root')
);
