import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style.global';
import App from './Page/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
);
