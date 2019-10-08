import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { basicReduxStore } from './components/redux/reduxStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={basicReduxStore}>
		<App />
	</Provider>,
  document.getElementById('root')
);
