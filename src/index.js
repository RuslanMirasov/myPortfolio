import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './contexts/PopupContext';
import App from 'components/App';
import './utils/languages';
import './utils/scrollToBlock';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/myPortfolio">
      <PopupProvider>
        <App />
      </PopupProvider>
    </BrowserRouter>
  </React.StrictMode>
);
