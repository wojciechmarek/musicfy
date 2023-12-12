import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';

import App from './app/app';

inject();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
