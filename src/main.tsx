import App from './App.tsx';
import '@styles/scrollbar.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { runConsoleBrand } from '@utils/ConsoleBrand.ts';

runConsoleBrand(); // run console brand

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
