import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import toaster from './views/components/UI/toast/toast';
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
      toaster('Nueva versión. Actualizando la web...');
      window.location.reload()
    }
  },
  onSuccess: () => {
    toaster('Web disponible para su uso sin conexión')
  },
});