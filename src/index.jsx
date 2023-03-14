import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      registration.update();
      window.location.reload();
    }
  }
});