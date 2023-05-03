import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.register();