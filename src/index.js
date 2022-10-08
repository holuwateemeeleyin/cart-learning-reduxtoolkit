import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css'

// 2. Now we wrap the App in a provider and also including
// the store we made in 1
import { Provider } from 'react-redux';
import store from './Store/store'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);