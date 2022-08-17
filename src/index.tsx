import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './components/pages/home';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <div>
    <Home />
  </div>,
);
