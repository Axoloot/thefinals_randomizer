import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import GlobalStyle from './style.global';
import App from './Page/App';
import MultiRoll from './Page/MultiRoll';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/multi" element={<MultiRoll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
