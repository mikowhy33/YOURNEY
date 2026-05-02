
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Importujemy Provider z Reduxa i zbudowany Store
import { Provider } from 'react-redux';
import { store } from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrzucamy Store do Providera, zeby kazdy komponent w <App /> mial do niego dostep */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
