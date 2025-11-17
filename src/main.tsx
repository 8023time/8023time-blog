import App from './App.tsx';
import { StrictMode } from 'react';
import '@styles/common/scrollbar.scss';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
