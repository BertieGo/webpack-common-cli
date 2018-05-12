import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import {AppContainer} from 'react-hot-loader';
import App from './App';
const mountContainer = document.getElementById('root');

// render to root mount element
ReactDom.render(
  <App/>
  , mountContainer
);
