import store from 'app/store';
import { ToastContextProvider } from 'context/toastContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ToastContextProvider>
        <App />
        </ToastContextProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);